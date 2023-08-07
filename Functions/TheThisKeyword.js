// Rule # 1 (THIS) means the object that is executing the current function
/* Rule # 2 If that function is part of an object (a method) the this keyword refercnes that object itself
 If that function is a regular function THIS refercnes the window and global object */

// Examples of Rule # 1
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// Examples of Rule # 2
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();
