import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ChatContainerPage from "../pages/chatContainer/ChatContainerPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import FriendRequestPage from "../pages/friendRequestPage/FriendRequestPage";
import FriendSuggestionPage from "../pages/friendSuggestionsPage/FriendSuggestionPage";

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
            },
            {
                path: '/friends/request',
                element: <FriendRequestPage />
            },
            {
                path: '/friends/suggestions',
                element: <FriendSuggestionPage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])