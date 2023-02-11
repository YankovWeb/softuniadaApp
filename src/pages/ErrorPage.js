import Error from "../components/Error";
import MainNav from "../components/MainNav";

const ErrorPage = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <MainNav />
      <main>
        <Error />
      </main>
    </>
  );
};

export default ErrorPage;
