import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ChatContainerPage from "../pages/chatContainer/ChatContainerPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <PrivateRoute>
                <MainLayout />
            </PrivateRoute>,
        children: [
            {
                path: '/:id',
                element: <ChatContainerPage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])