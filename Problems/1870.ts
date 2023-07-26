function minSpeedOnTime(dist: number[], hour: number): number {
  if (dist.length - 1 >= hour) {
    return -1;
  }

  let left = 1;
  let right = 1e7;  

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const time = getTime(dist, mid);
    
    if (time > hour) {
      left = mid + 1;
    } else {
      right = mid;  
    }
  }

  return left;
}

function getTime(dist: number[], speed: number): number {
  let time = 0;

  for (let i = 0; i < dist.length; ++i) {
    if (i == dist.length - 1) {
      time += dist[i] / speed;
    } else {
      time += Math.ceil(dist[i] / speed);
    }
  }

  return time;
}

const dist1 = [1,3,2];
const hour1 = 6

const dist2 = [1,3,2];
const hour2 = 2.7

const dist3 = [1,3,2];
const hour3 = 1.9

const dist4 = [1,1,100000]
const hour4 = 2.01

console.log(minSpeedOnTime(dist1,hour1))
console.log(minSpeedOnTime(dist2,hour2))
console.log(minSpeedOnTime(dist3,hour3))
console.log(minSpeedOnTime(dist4,hour4))
