const users = [
  {
    id: 1,
    userName: "Sunil Hooda",
    userEmail: "sunilhooda000@gmail.com",
    password: 123456,
    todos: [
      {
        id: 1,
        title: "Task 1",
        description: "description for task 1",
        task_status: "done",
        tags: ["Personal"],
        subTasks: [
          {
            subTaskTitle: "Task 1: Sub Task 1",
            status: true,
          },
          {
            subTaskTitle: "Task 1: Sub Task 2",
            status: false,
          },
        ],
      },
    ],
    events: [
      {
        id: 1,
        title: "Learn-redux",
        status: false,
        desc: "",
      },
    ],
    tagList: [
      {
        id: 1,
        tag: "Personal",
      },
      {
        id: 2,
        tag: "Official",
      },
      {
        id: 3,
        tag: "Others",
      },
    ],
  },
];
