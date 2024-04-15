import * as tozlib from "mainlib.js";
/** @param {NS} ns */
export async function main(ns) {
  var serverStatFile = "serverstats.txt"

while (true){
let serverstring = ns.read(serverStatFile)
let serverstats = tozlib.serverArrayFromString(serverstring,ns)
let ownHackingSkill = ns.getHackingLevel
let sshReady = ns.fileExists("BruteSSH.exe")
let ftpReady = ns.fileExists("FTPCrack.exe")
let smtpReady = ns.fileExists("relaySMTP.exe")
let httpReady = ns.fileExists("HTTPWorm.exe")
let sqlReady = ns.fileExists("SQLInject.exe")


for (let server of serverstats){
    if (ownHackingSkill > server.hackDifficulty){}
  }

}
}
