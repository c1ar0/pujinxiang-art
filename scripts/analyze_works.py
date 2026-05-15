#!/usr/bin/env python3
import base64
import json
import re
import time
from pathlib import Path
from urllib import request, error

import yaml

ROOT = Path('/home/chennuo/liquid-glass-portfolio')
IMG_DIR = ROOT / 'public/images/works'
OUT = ROOT / 'src/data/vision-analysis.json'
CFG = Path('/home/chennuo/.hermes/config.yaml')
MODEL = 'gpt-5.5'

SYSTEM = '''你是一位中文美术设计作品集策展人，擅长工艺美术、文创产品设计、竹木工艺、平面视觉和作品集文案。请根据图片内容输出准确、克制、专业的中文作品信息。不要夸大，不要虚构品牌客户，不要写“可能”。如果看不清，就基于可见元素描述。'''

def load_api():
    cfg = yaml.safe_load(CFG.read_text())
    for cp in cfg.get('custom_providers', []):
        if cp.get('name') == 'mtcode':
            return cp['base_url'].rstrip('/'), cp['api_key']
    raise RuntimeError('mtcode provider not found')

def parse_sse(text):
    content = []
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith('data:'):
            continue
        data = line[5:].strip()
        if data == '[DONE]':
            continue
        try:
            obj = json.loads(data)
            delta = obj.get('choices', [{}])[0].get('delta', {})
            if 'content' in delta:
                content.append(delta['content'])
        except Exception:
            pass
    return ''.join(content)

def extract_json(text):
    text = text.strip()
    text = re.sub(r'^```json\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    m = re.search(r'\{.*\}', text, re.S)
    if m:
        text = m.group(0)
    return json.loads(text)

def analyze_one(path, base_url, api_key):
    mime = 'image/jpeg' if path.suffix.lower() in ['.jpg', '.jpeg'] else 'image/png'
    b64 = base64.b64encode(path.read_bytes()).decode()
    group = '文创产品设计' if path.name.startswith('cultural') else '竹木工艺技法'
    prompt = f'''
请分析这张作品集图片。文件名：{path.name}。当前归类：{group}。

请只输出 JSON，不要解释，字段为：
{{
  "title": "8-14字作品标题",
  "category": "文创产品设计/竹木工艺技法/平面视觉设计/材料工艺练习/其他",
  "summary": "一句话介绍，35字以内",
  "description": "作品介绍，90-140字，适合美术设计专业作品集",
  "visual_elements": ["可见元素1", "可见元素2", "可见元素3"],
  "design_points": ["设计要点1", "设计要点2", "设计要点3"],
  "tools": ["推测使用工具或技法，最多4个"],
  "keywords": ["关键词1", "关键词2", "关键词3"]
}}

写作要求：
- 必须基于图片可见内容。
- 如果是竹编/竹木/手工结构，强调材料、编织、结构、肌理、器物形态。
- 如果是文创/平面/包装/海报，强调文化符号、图形、版式、色彩、应用场景。
- 不要编造不可见的品牌、客户、商业合作。
'''
    payload = {
        'model': MODEL,
        'stream': True,
        'messages': [
            {'role': 'system', 'content': SYSTEM},
            {'role': 'user', 'content': [
                {'type': 'text', 'text': prompt},
                {'type': 'image_url', 'image_url': {'url': f'data:{mime};base64,{b64}'}}
            ]}
        ],
        'max_tokens': 1200,
        'temperature': 0.4,
    }
    req = request.Request(
        base_url + '/chat/completions',
        data=json.dumps(payload, ensure_ascii=False).encode('utf-8'),
        headers={'Authorization': 'Bearer ' + api_key, 'Content-Type': 'application/json'},
        method='POST'
    )
    with request.urlopen(req, timeout=120) as resp:
        raw = resp.read().decode('utf-8', 'ignore')
    text = parse_sse(raw)
    return extract_json(text), text

def main():
    base_url, api_key = load_api()
    existing = {}
    if OUT.exists():
        existing = json.loads(OUT.read_text())
    files = sorted([p for p in IMG_DIR.iterdir() if p.suffix.lower() in ['.jpg', '.jpeg', '.png']])
    results = dict(existing)
    for i, p in enumerate(files, 1):
        if p.name in results and results[p.name].get('title'):
            print(f'[{i}/{len(files)}] skip {p.name}')
            continue
        print(f'[{i}/{len(files)}] analyzing {p.name}...', flush=True)
        last_err = None
        for attempt in range(3):
            try:
                data, raw = analyze_one(p, base_url, api_key)
                data['file'] = p.name
                data['image'] = '/images/works/' + p.name
                results[p.name] = data
                OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2))
                print('  ->', data.get('title'), flush=True)
                break
            except Exception as e:
                last_err = e
                print('  error:', repr(e), flush=True)
                time.sleep(2 + attempt * 3)
        else:
            results[p.name] = {'file': p.name, 'image': '/images/works/' + p.name, 'error': repr(last_err)}
            OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2))
    print('DONE', OUT)

if __name__ == '__main__':
    main()
