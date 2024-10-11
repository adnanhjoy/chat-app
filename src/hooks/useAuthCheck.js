import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/auth/authSlice";
import Cookies from 'js-cookie';

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = Cookies.get('token');

    if (localAuth) {
      try {
        if (localAuth) {
          dispatch(
            userLoggedIn({
              token: localAuth,
            }),
          );
        }
      } catch (error) {
        console.error("Error parsing auth cookie:", error);
      }
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
}
