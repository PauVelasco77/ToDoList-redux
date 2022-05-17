import { Factory } from "fishery";
import faker from "@faker-js/faker";

const taskFactory = Factory.define(() => ({
  name: faker.commerce.product(),
  isCompleted: faker.datatype.boolean(),
  date: faker.date.soon(),
  username: faker.name.findName(),
  id: faker.datatype.number(1000),
}));

export const generateRandomTask = () => taskFactory.build();
export const generateRandomTasks = (total) => taskFactory.buildList(total);
