/** @param {NS} ns */
import {relictTPrint,relictFTPCrack,relictBruteSSH,relictNuke} from "relictLib.js";
export async function relictPorthack(ns, target) {
  var portReq = ns.getServerNumPortsRequired(target);
  if (portReq > 2) {
    relictTPrint(ns, "fuck");
  } if (portReq > 1) {
    relictFTPCrack(ns, target);
  } if (portReq > 0) {
    relictBruteSSH(ns, target);
  } if ((portReq-2) >= portReq) {
    relictNuke(ns, target);
  }
}
