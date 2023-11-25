/** @param {NS} ns */
import {relictTPrint,relictFTPCrack,relictBruteSSH,relictNuke} from "relictLib.js";
export async function main(ns) {
  var target = ns.args[0];
  var skill = ns.args[1];
  var portReq = ns.getServerNumPortsRequired(target);
  if (portReq > skill) {
    relictTPrint(ns, "fuck");
  } if (portReq > 1) {
    relictFTPCrack(ns, target);
  } if (portReq > 0) {
    relictBruteSSH(ns, target);
  } if ((portReq-skill) >= portReq) {
    relictNuke(ns, target);
  }
}
