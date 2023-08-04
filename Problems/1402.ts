function maxSatisfaction(satisfaction: number[]): number {

  satisfaction.sort((a,b)=> b-a)

  let total = 0;
  let currentSum = 0;

  for( const s of satisfaction){

    if(s + currentSum > 0 ){
      currentSum = currentSum + s;
      total = total + currentSum;
    } else {
      break;
    }
        
  }

  return total;
    
}
