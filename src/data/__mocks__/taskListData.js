import { randomColorsMui } from "../styles/colorsMui";

export const colors = [];

const taskListData = [
  {
    name: "Wash the dishes",
    isCompleted: false,
    date: "Mon Jul 25 2022",
    username: "Leo Messi",
    color: randomColorsMui(colors),
    id: 1,
  },
  {
    name: "Biscuits",
    isCompleted: false,
    date: "Wed Jul 27 2022",
    username: "Cristiano Ronaldo",
    color: randomColorsMui(colors),
    id: 2,
  },
  {
    name: "Bread",
    isCompleted: false,
    date: "Tue Jul 26 2022",
    username: "Shevchenko",
    color: randomColorsMui(colors),
    id: 3,
  },
  {
    name: "Cheddar cheese",
    isCompleted: false,
    date: "Thu Jul 26 2022",
    username: "Andrea Orlandi",
    color: randomColorsMui(colors),
    id: 4,
  },
  {
    name: "Milk",
    isCompleted: false,
    date: "Fri Jul 30 2022",
    username: "Jack Grealish",
    color: randomColorsMui(colors),
    id: 5,
  },
];

export default taskListData;
