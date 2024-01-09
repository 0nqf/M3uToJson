function convert(m3u_file) {
  var m3u_json = [];
  var lines = m3u_file.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.startsWith("#EXTINF")) {
      var channelInfo = {};
      var logoStartIndex = line.indexOf("tvg-logo=\"") + 10;
      var logoEndIndex = line.indexOf("\"", logoStartIndex);
      var logoUrl = line.substring(logoStartIndex, logoEndIndex);
      var groupTitleStartIndex = line.indexOf("group-title=\"") + 13;
      var groupTitleEndIndex = line.indexOf("\"", groupTitleStartIndex);
      var groupTitle = line.substring(groupTitleStartIndex, groupTitleEndIndex);
      var titleStartIndex = line.lastIndexOf(",") + 1;
      var title = line.substring(titleStartIndex).trim();
      var link = lines[i + 1];
      channelInfo["tvg-logo"] = logoUrl;
      channelInfo["group-title"] = groupTitle;
      channelInfo["title"] = title;
      channelInfo["link"] = link;
      m3u_json.push(channelInfo);
    }
  }
  var result = JSON.stringify(m3u_json);
  return result;
}
