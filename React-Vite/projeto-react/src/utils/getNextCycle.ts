export function getNextCycle(currentCycle: number) {
    return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
//se o current cycle for 0 ou 8 ele vai pra 1, se não ele vai pro current + 1