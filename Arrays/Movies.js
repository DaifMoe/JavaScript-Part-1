const movies = [
  { title: "Spongebob", year: 2023, rating: 9.5 },
  { title: "Handsome Squidward", year: 2023, rating: 10 },
  { title: "Patrick Star", year: 2023, rating: 8.9 },
  { title: "Mr.Krabs", year: 2020, rating: 8.1 },
];

// Get all the movies in 2023 with a rating greater > than 4
// Sort them by their rating
// In descending order
// Pick their title

const titles = movies
  .filter((m) => m.year === 2023 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
