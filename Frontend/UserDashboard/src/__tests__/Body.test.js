import { render, screen } from "@testing-library/react";
import resList from "../utils/mockData";
import Body from "../components/Body";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return resolve({data});
        }
    });
}); 


it("Should take component with props", ()=>{
    render(<Body/>);

    // const name =  screen.getByText("Kannur Food Point");
    // expect(name).toBeInTheDocument();
});