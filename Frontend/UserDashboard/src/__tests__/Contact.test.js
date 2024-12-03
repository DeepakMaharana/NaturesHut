import {render, screen} from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"
test("Should load contact us heading component", ()=>{

    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load contact us button component", ()=>{

    render(<Contact/>)
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
});


// Grouping Test Cases
describe("Contact Us Page test", ()=>{
    test("Should load contact us placeholder component", ()=>{

        render(<Contact/>)
        const heading = screen.getByPlaceholderText("name");
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load contact us two input component", ()=>{
    
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });

    it("Should load contact us two input component", ()=>{
    
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });

})