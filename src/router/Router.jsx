import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ChatContainerPage from "../pages/chatContainer/ChatContainerPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/:id',
                element: <ChatContainerPage />
            }
        ]
    }
])