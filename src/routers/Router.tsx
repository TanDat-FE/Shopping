import AuthRouter from "./AuthRouters";
import MainRouter from "./MainRouter";

function Routers() {
  return 1 < 2 ? <AuthRouter /> : <MainRouter />;
}

export default Routers;
