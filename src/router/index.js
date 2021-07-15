import { createWebHistory, createRouter } from "vue-router";
import AddStudent from "@/components/AddStudent.vue"
import EditStudent from "@/components/EditStudent.vue"
import Students from "@/components/StudentList.vue"

const routes = [
  {
    path: "/",
    name: "AddStudent",
    component: AddStudent,
  },
  {
    path: "/add-student",
    name: "add-student",
    component: AddStudent,
  },
  {
    path: "/edit-student/:id",
    name: "edit-student",
    component: EditStudent,
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
