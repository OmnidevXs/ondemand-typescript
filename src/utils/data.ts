export interface Todo {
  id: string;
  user: string;
  date: string;
  content: string;
  isCompleted: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export function getUserById(userId: string) {
  return userList.filter(user => user.id === userId)[0];
}

export const todoListData:Todo[] = [
    {
      id :'61', content: "图雀社区：汇聚精彩的免费实战教程",
      user: "mRcfps",
      date: "2020年3月2日 19:34",
      isCompleted: false
    },
    {id :'62', 
      content: "图雀社区：汇聚精彩的免费实战教程",
      user: "pftom",
      date: "2020年3月2日 19:34",
      isCompleted: false
    },
    {id :'63', 
      content: "图雀社区：汇聚精彩的免费实战教程",
      user: "Holy",
      date: "2020年3月2日 19:34",
      isCompleted: false
    },
    {id :'64', 
      content: "图雀社区：汇聚精彩的免费实战教程",
      user: "crxk",
      date: "2020年3月2日 19:34",
      isCompleted: false
    },
    {id :'65', 
      content: "图雀社区：汇聚精彩的免费实战教程",
      user: "Pony",
      date: "2020年3月2日 19:34",
      isCompleted: false
    }
  ];
  
  export const userList:User[] = [
    {
      id: "666666666",
      name: "图雀社区",
      avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
    },
    {
      id: "23410977",
      name: "mRcfps",
      avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
    },
    {
      id: "25455350",
      name: "crxk",
      avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
    },
    {
      id: "23410977",
      name: "pftom",
      avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
    },
    {
      id: "58352313",
      name: "holy",
      avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
    }
  ];
  