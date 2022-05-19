import { randomColorsMui } from "../styles/colorsMui";

const colors = [];

const taskListData = [
  {
    name: "Wash the dishes",
    isCompleted: false,
    date: "September 14, 2016",
    username: "Leo Messi",
    color: randomColorsMui(colors),
    id: 1,
  },
  {
    name: "Biscuits",
    isCompleted: false,
    date: "September 14, 2016",
    username: "Cristiano Ronaldo",
    color: randomColorsMui(colors),
    id: 2,
  },
  {
    name: "Bread",
    isCompleted: false,
    date: "September 14, 2016",
    username: "Shevchenko",
    color: randomColorsMui(colors),
    id: 3,
  },
  {
    name: "Cheddar cheese",
    isCompleted: false,
    date: "September 14, 2016",
    username: "Andrea Orlandi",
    color: randomColorsMui(colors),
    id: 4,
  },
  {
    name: "Milk",
    isCompleted: false,
    date: "September 14, 2016",
    username: "Jack Grealish",
    color: randomColorsMui(colors),
    id: 5,
  },
];

export default taskListData;
