import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, NavList, Header } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
    // <>
    //   <StyledLink to="/">Home</StyledLink>
    //   <StyledLink to="/movies">Movies</StyledLink>
    //   <main>
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Outlet />
    //     </Suspense>
    //   </main>
    // </>
  );
};

export default Navigation;
