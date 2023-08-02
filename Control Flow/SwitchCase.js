let role = "guest";

switch (role) {
  case "guest":
    console.log("Gues User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// Usually Better to use if and else because its cleaner
// if (role === "guest") console.log("Guest");
// else if (role === "moderator") console.log("Moderator");
// else console.log("Unknown User");
