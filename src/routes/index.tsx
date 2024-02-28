import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from '../views/Home'
import TaskDetailView from '../views/Detail'
import CompletedTasksView from '../views/CompletedTasks'
import AllTasksView from '../views/AllTasks'
import NewTaskView from '../views/NewTask'
import LoginView from '../views/Login'
import SignUpView from '../views/SignUp'
import Header from "../components/Header";
import Toast from "../components/Toaster";

const RoutesComponent = () => (
    <BrowserRouter>
        <Toast />
        <Header />
        <Routes>
            <Route path='/' element={<HomeView />}/>
            <Route path='/detail/:id' element={<TaskDetailView />}/>
            <Route path='/completed-tasks' element={<CompletedTasksView />}/>
            <Route path='/all-tasks' element={<AllTasksView />}/>
            <Route path='/new' element={<NewTaskView />}/>
            <Route path='/login' element={<LoginView />}/>
            <Route path='/sign-up' element={<SignUpView />}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent