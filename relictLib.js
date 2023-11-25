/** @param {NS} ns */
export async function relictWeaken(ns, target) {
  await ns.weaken(target);
}
export async function relictSWeaken(ns, target) {
  while (true) {
    await ns.weaken(target);
  }
}
export async function relictHack(ns, target) {
  await ns.hack(target);
}
export async function relictGrow(ns, target) {
  await ns.grow(target);
}
export function relictTPrint(ns, text) {
  ns.tprint(text);
}
export function relictFTPCrack(ns, target) {
  ns.ftpcrack(target);
}
export function relictBruteSSH(ns, target) {
  ns.brutessh(target);
}
export function relictNuke(ns, target) {
  ns.nuke(target);
}
