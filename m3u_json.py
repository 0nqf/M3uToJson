import json

class m3u:
 
 def convert(m3u_file: str):
  m3u_json = []
  lines = m3u_file.split("\n")
  for line in lines:
         if line.startswith("#EXTINF"):
          channelInfo = {}
          logoStartIndex = line.index("tvg-logo=\"") + 10
          logoEndIndex = line.index("\"", logoStartIndex)
          logoUrl = line[logoStartIndex:logoEndIndex]
          groupTitleStartIndex = line.index("group-title=\"") + 13
          groupTitleEndIndex = line.index("\"", groupTitleStartIndex)
          groupTitle = line[groupTitleStartIndex:groupTitleEndIndex]
          titleStartIndex = line.rindex(",") + 1
          title = line[titleStartIndex:].strip()
          link = lines[lines.index(line) + 1]
          channelInfo["tvg-logo"] = logoUrl
          channelInfo["group-title"] = groupTitle
          channelInfo["title"] = title
          channelInfo["link"] = link
          m3u_json.append(channelInfo)
  result = json.dumps(m3u_json)
  return result
