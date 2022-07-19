import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import {CreateScreen} from "../components/CreateScreen";
import From from "../common/From";



describe("Create screen",()=>{
    
    it("When create screen render", () =>{
        render(
            <BrowserRouter>
                <CreateScreen>
                    <From />
                </CreateScreen>
            </BrowserRouter>
        )
    })

    it("Check create screen form content ", () =>{
        render(
            <BrowserRouter>
                <CreateScreen>
                    <From />
                </CreateScreen>
            </BrowserRouter>
        )


        const button = screen.getByText("Submit").textContent;
        expect(button).toBe("Submit")

        const ques = screen.getByText("Question").textContent;
        expect(ques).toBe("Question")

        const srtDis = screen.getByText("Strongly disagree").textContent;
        expect(srtDis).toBe("Strongly disagree")

        const disAg = screen.getByText("Disagree").textContent;
        expect(disAg).toBe("Disagree")

        const nAnotDis = screen.getByText("Neither agree not disagree").textContent;
        expect(nAnotDis).toBe("Neither agree not disagree")

        const agr = screen.getByText("Agree").textContent;
        expect(agr).toBe("Agree")

        const strAg = screen.getByText("Strongly Agree").textContent;
        expect(strAg).toBe("Strongly Agree")

        const quehandle = screen.getByRole("textbox", { name: "Question" })
        fireEvent.change(quehandle, {target: {value: 'I take time out for others.'}})
        expect(quehandle.value).toBe('I take time out for others.')

        const strdishandle = screen.getByRole("spinbutton", { name: "Strongly disagree" })
        fireEvent.change(strdishandle, {target: {value: '10'}})
        expect(strdishandle.value).toBe('10')

        const dishandle = screen.getByRole("spinbutton", { name: "Disagree" })
        fireEvent.change(dishandle, {target: {value: "30"}})
        expect(dishandle.value).toBe("30")

        const neutralhandle = screen.getByRole("spinbutton", { name: "Neither agree not disagree" })
        fireEvent.change(neutralhandle, {target: {value: "50"}})
        expect(neutralhandle.value).toBe("50")

        const agreehandle = screen.getByRole("spinbutton", { name: "Agree" })
        fireEvent.change(agreehandle, {target: {value: "70"}})
        expect(agreehandle.value).toBe("70")

        const stragreehandle = screen.getByRole("spinbutton", { name: "Strongly Agree" })
        fireEvent.change(stragreehandle, {target: {value: 100}})
        expect(stragreehandle.value).toBe("100")

        const handleSubmit = screen.queryByRole("button",{ name: "Submit" })
        fireEvent.click(handleSubmit)

        expect(screen.getByText("Submit successfully")).toBeInTheDocument() 


    })
    
})
