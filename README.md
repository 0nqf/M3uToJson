# M3uToJson
Convert m3u file to json

# Python
[here](/m3u_json.py)
```python
# First, download this repository and include it in your file path

from .m3u_json import m3u

m3u_file = open("#file path","r")

json_file = m3u.convert(m3u_file)

print(json_file) # Print results

save = open("#file path","w")
save.write(json_file) # Save to file
```

# Java Script
[here](/m3u_json.js)

# PHP 
[here](m3u_json.php)



