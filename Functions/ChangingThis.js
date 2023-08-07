// How to change the value of this in a function
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();

// Examples
// function playVideo() {
//   console.log(this);
// }

// playVideo.call({ name: "Mosh" }, 1, 2);
// playVideo.apply({ name: "Mosh" }, [1, 2]);
// playVideo.bind({ name: "Mosh" })();
