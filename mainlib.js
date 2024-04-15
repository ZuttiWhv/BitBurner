export function serverToString(serverstats) {
  let returnString = ""
  for (const [key, value] of Object.entries(serverstats)) {
    returnString += key + ":" + value + ";";
  }
  return returnString + "#"

}

export function serverArrayFromString(serverstring) {
  let serversArray = [];
  let allServers = serverstring.split('#');
  for (let oneServer of serverstring.split("#")) {
    if (oneServer.length < 5) {
      continue
    }
    let serverstats = {};
    for (let oneStat of oneServer.split(";")) {
      let key = oneStat.split(":")[0]
      let value = oneStat.split(":")[1]
      if (key.length < 2) {
        continue
      }
      serverstats[key] = value
    }
    serversArray.push(serverstats)
  };
  return serversArray;
}
