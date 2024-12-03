import { render, screen } from "@testing-library/react";
import resList from "../utils/mockData";
import Cards from "../components/Cards";
import "@testing-library/jest-dom"


it("Should take component with props", ()=>{
    render(<Cards resData={resList[0]}/>);

    const name =  screen.getByText("Kannur Food Point");
    expect(name).toBeInTheDocument();
});