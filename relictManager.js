/** @param {NS} ns */
import {relictTPrint} from "relictLib.js";
export async function main(ns) {
  var serverList = ['home'];
  for (let i = 0; i < serverList.length; i++) {
    var tempList = ns.scan(serverList[i]);
    for (let j = 0; j < tempList.length; j++) {
      if (serverList.indexOf(tempList[j]) === -1) {
        serverList.push(tempList[j]);
      }
    }
  }
//  if (printResult = 1) {
//    for (let n = 0; n < serverList.length; n++) {
//      relictTPrint(ns, serverList[n]);
//    }
//  }
  const noHack = ['SCEC','avmnite-02h','I.I.I.I','run4theh111z','.','icarus'];
  for (let h = 0; h < noHack.length; h++) {
    var filterList = serverList
    var toRemove = filterList.indexOf(noHack[h]);
    var hackList = filterList.splice(toRemove, 1);
  }
  ns.write("relictServerList.txt", "", 'w');
  for (let w = 0; w < serverList.length; w++) {
    ns.write("relictServerList.txt", serverList[w]+'\n', 'a');
  }
}
