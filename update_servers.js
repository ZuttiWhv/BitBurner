import * as tozlib from "mainlib.js";
/** @param {NS} ns */

export async function main(ns) {
  var servers = ["home"]
  var nogoservers = ["CSEC"]
  var privateServersNames = "pserv"
  var serverStatFile = "serverstats.txt"
  var sleepTimer = 5

  if (Number.isInteger(ns.args[0])) {
    sleepTimer = ns.args[0]
  }

  while (true) {
    for (let server of servers) {
      for (let newTarget of ns.scan(server)) {
        if (!servers.includes(newTarget) &&
          !nogoservers.includes(newTarget) &&
          !newTarget.startsWith(privateServersNames)) {
          servers.push(newTarget)
        }
      }
    }

    let allServers = "";
    for (let server of servers) {
      let serverstats = ns.getServer(server)
      allServers += tozlib.serverToString(serverstats)
    }
    ns.write(serverStatFile, allServers, "w")
    await ns.sleep(sleepTimer * 1000)
  }
}
