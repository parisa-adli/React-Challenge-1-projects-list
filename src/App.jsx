import { useReducer, useState } from "react";
import "./App.css";

const projectsList = [
  {
    id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: "۵۰۰,۰۰۰",
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۱,۲۰۰,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-10-26T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    id: 3,
    title: "توسعه سایت رستوران",
    description: "یک سایت رستورانی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۶۰۰,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-02T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
];

function projectsReducer(state, action) {
  switch (action.type) {
    case "ALL": {
      // return state;
      return projectsList;
    }
    case "OPEN": {
      //return [...state.filter((project) => project.status === "OPEN")];
      return projectsList.filter((project) => project.status === "OPEN");
    }
    case "CLOSED": {
      // return [...state.filter((project) => project.status === "CLOSED")];
      return projectsList.filter((project) => project.status === "CLOSED");
    }
    default:
      throw new Error("unknown action : ") + action.type;
  }
}

function App() {
  const [isShow, setIsShow] = useState(true);
  // const [projects, setProjects] = useState(projectsList);
  const [projects, dispatch] = useReducer(projectsReducer, projectsList);

  return (
    <div>
      {isShow ? (
        <div>
          <div className="max-w-md">
            <h2 className="text-slate-500 font-bold text-lg">لیست پروژه ها</h2>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => setIsShow(!isShow)}
              className="mt-16 bg-indigo-500 rounded-md py-2.5 px-8 text-white font-bold"
            >
              نشان دادن پروژه ها
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-lg space-y-8 m-auto">
          <div className="grid grid-cols-6 items-center">
            <h2 className="text-slate-700 font-bold text-lg col-span-2 text-right">
              لیست پروژه ها
            </h2>
            <div className="col-span-4 flex items-center justify-between">
              <div className="flex items-center">
                <p className="font-bold text-slate-700 ml-2">وضعیت</p>
                <div className="bg-white rounded-md p-1 w-52 font-bold grid grid-cols-3 gap-x-1">
                  <button
                    onClick={() => dispatch({ type: "ALL" })}
                    className="bg-indigo-500 py-1 rounded-md text-white"
                  >
                    همه
                  </button>
                  <button
                    onClick={() => dispatch({ type: "OPEN" })}
                    className="hover:bg-gray-100 rounded-md"
                  >
                    باز
                  </button>
                  <button
                    onClick={() => dispatch({ type: "CLOSED" })}
                    className="hover:bg-gray-100 rounded-md"
                  >
                    بسته
                  </button>
                </div>
              </div>
              <div>
                <select
                  className="py-2 rounded-md px-4 bg-white whitespace-nowrap overflow-hidden w-44"
                  name=""
                  id=""
                >
                  <option value="">مرتب سازی (جدیدترین)</option>
                </select>
              </div>
              <div>
                <select
                  className="py-2 rounded-md px-4 bg-white whitespace-nowrap overflow-hidden w-44"
                  name=""
                  id=""
                >
                  <option value="">دسته بندی (همه)</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <table className="w-full text-center ">
              <thead>
                <tr className="text-slate-700">
                  <th className="p-3">#</th>
                  <th>عنوان پروژه</th>
                  <th>بودجه</th>
                  <th>ددلاین</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody className="mt-4">
                {/* ۰۱۲۳۴۵۶۷۸۹ */}
                {projects.map((project) => (
                  <Project key={project.id} project={project} />
                ))}
                {/* <tr className="text-slate-600 bg-white ">
                  <td className="py-4">1</td>
                  <td>اولین پروژه</td>
                  <td>۵۰۰,۰۰۰</td>
                  <td>۱۴۰۳/۱۰/۲</td>
                  <td>
                    <button className="bg-green-500 rounded-xl text-white px-3">
                      باز
                    </button>
                  </td>
                  <td className="text-indigo-500">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>   */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

function Project({ project }) {
  return (
    <tr className="text-slate-600 bg-white border-b">
      <td className="py-4">{project.id}</td>
      <td>{project.title}</td>
      <td>{project.budget}</td>
      <td>{new Date(project.deadline).toLocaleDateString("fa-IR")}</td>
      <td>
        <span
          className={`rounded-xl text-white px-3 ${
            project.status === "CLOSED" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {project.status === "CLOSED" ? "بسته" : "باز"}
        </span>
      </td>
      <td className="text-indigo-500">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}
