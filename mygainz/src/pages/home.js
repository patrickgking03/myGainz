import { auth } from "../services/firebaseConfig";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const user = useOutletContext();

  return (
    <div className="space-y-1">
      <h1 className="page-header">Home</h1>
      {user && auth.currentUser && <h2 className="page-header text-gray-500 text-lg font-light">Welcome back, <span className="font-semibold">{auth.currentUser.displayName}</span></h2>}
    </div>
  );
}
