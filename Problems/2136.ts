function earliestFullBloom(plantTime: number[], growTime: number[]): number {
  const combined: [number, number][] = plantTime.map((p, i) => [p, growTime[i]]);

  combined.sort((a, b) => b[1] - a[1]);

  let totalPlantingDays = 0;
  let bloomDay = 0; 

  for (const [plant, grow] of combined) {
    totalPlantingDays += plant;
    
    const currentBloomDay = totalPlantingDays + grow;

    if (currentBloomDay > bloomDay) {
      bloomDay = currentBloomDay;
    }
  }

  return bloomDay;
}


console.log(earliestFullBloom([1,4,3], [2,3,1]))
console.log(earliestFullBloom([1,2,3,2], [2,1,2,1]))
console.log(earliestFullBloom([1],[1]))
