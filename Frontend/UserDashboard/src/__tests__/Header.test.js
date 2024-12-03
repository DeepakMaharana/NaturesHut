import { fireEvent, render } from "@testing-library/react";
import NavigationBar from "../../../User1/src/components/NavigationBar";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should Load Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavigationBar />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("Button", {name:"Login"});

  // expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout", ()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <NavigationBar />
          </Provider>
        </BrowserRouter>
      );
      // const loginButton = screen.getByRole("Button", {name:"Login"});

      // fireEvent.click(loginButton);
      // const logoutButton = screen.getByRole("Button", {name:"Logout"});
      
      // expect(loginButton).toBeInTheDocument();
})