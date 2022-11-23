import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  joinNow: "scale-0",
  countdown: "scale-0",
  cards: [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg",
      title: "Dumbbell Bicep Curls",
      time: 10,
      level: " Beginner",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3839025/pexels-photo-3839025.jpeg",
      title: "Weight lift",
      time: 5,
      level: "Exepert",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3837293/pexels-photo-3837293.jpeg",
      title: "Dynamic Warm Up",
      time: 20,
      level: "Intermidate",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3836861/pexels-photo-3836861.jpeg",
      title: "Wide Grip Barbell Curl",
      time: 15,
      level: "Beginner",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/3836861/pexels-photo-3836861.jpeg",
      title: "Wide Grip Barbell Curl",
      time: 15,
      level: "Beginner",
    },
  ],
  routines: [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475__340.jpg",
      title: "Dynamic Push Up",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "5 min",
      duration: 5,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg",
      title: "Dumbbell Bicep Curls",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "3 min",
      duration: 3,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5007.jpg",
      title: "Weight lift",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "4 min",
      duration: 4,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/fit-young-woman-lifting-barbells-looking-focused-working-out-gym_155003-5353.jpg",
      title: "Dynamic Warm Up",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "2 min",
      duration: 2,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/low-angle-man-holding-dumbbell_23-2149517336.jpg",
      title: "Wide Grip Barbell Curl",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "5 min",
      duration: 5,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/woman-doing-squats-smith-machine_7502-9063.jpg",
      title: "Active  Cooldown",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      time: "3 min",
      duration: 3,
    },
  ],
  counter: 0,
});

let interval;

const startCountdown = () => {
  interval = setInterval(() => {
    const counter = getGlobalState("counter");
    setGlobalState("counter", counter + 1);
  }, 1000);
  return () => clearInterval(interval);
};

const stopCountdown = () => {
  setGlobalState("counter", 0);
  clearInterval(interval);
};

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};


export {
  setGlobalState,
  useGlobalState,
  getGlobalState,
  startCountdown,
  stopCountdown,
  truncate,
};
