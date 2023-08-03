const cirlce = {
  radius: 1,
  draw() {
    console.log(draw);
  },
};

for (let key in circle) console.log(key, circle[key]);

// for (let key of circle) console.log(key); // For of is only for arrays and maps
for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(cirlce)) console.log(entry);

if ("color" in circle) console.log("yes");
