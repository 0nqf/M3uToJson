# M3uToJson
Convert m3u file to json

# How to use

```python
# First, download this repository and include it in your file path

from .m3u_json import m3u

m3u_file = open("#file path","r")

json_file = m3u.convert("m3u_file")

print(json_file) 
```
