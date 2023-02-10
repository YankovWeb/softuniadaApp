import {Outlet} from "react-router-dom";
import Error from "../components/Error";
const ErrorPage = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <Error />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ErrorPage;
