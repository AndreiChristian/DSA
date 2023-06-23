// for (let i = 0; i < 50; i++) {
//   const response = await fetch(
//     "https://expressjs-postgres-production-f8f8.up.railway.app/api/all"
//   );
//   if (response.ok) {
//     console.log("OK");
//   } else {
//     console.log("Bad");
//   }
// }

for (let i = 0; i < 100; i++) {
  const response = await fetch(
    "https://www.shechangesclimate.org/"
  );
  if (response.ok) {
    console.log("OK");
  } else {
    console.log("Bad");
  }
}
