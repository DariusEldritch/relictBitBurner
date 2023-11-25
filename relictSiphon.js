/** @param {NS} ns */
import {relictWeaken,relictHack,relictGrow} from "relictLib.js";
export async function main(ns) {
  var target = ns.args[0];
  var idealCash = ns.getServerMaxMoney(target) * 0.75;
  var minDif = ns.getServerMinSecurityLevel(target);
  let i = 1;
  while (true) {
    if (ns.getServerSecurityLevel(target) > minDif) { 
      await relictWeaken(ns, target);
    } else if (ns.getServerMoneyAvailable(target) < idealCash) {
      await relictGrow(ns, target);
    } else while (i < 6) {
      await relictHack(ns, target);
      i++;
    }
  }
}
