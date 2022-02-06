import { Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import Aboutpage from "./pages/Aboutpage.tsx";
import Blogpage from "./pages/Blogpage.tsx";
import Singlepage from "./pages/Singlepage.tsx";
import Homepage from "./pages/Homepage.tsx";
import Notfoundpage from "./pages/Notfoundpage.tsx";
import Createpost from "./pages/Createpost.tsx";
import Editpost from "./pages/Editpost.tsx";
import Loginpage from "./pages/Loginpage.tsx";
import RequireAuth from "./hoc/RequireAuth.tsx";
import AuthProvider from "./hoc/AuthProvider.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Loginpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
