import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import LandingScreen from "../components/LandingScreen";



const mockedNavigator = jest.fn();
const handleChange = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));


describe("Landing screen",()=>{
    
    it("When landng screen show", () =>{
        render(
            <BrowserRouter>
                <LandingScreen setLanding={jest.fn()}/>
            </BrowserRouter>
        )
       let title = screen.getByText("Start your personality trait test").innerHTML
       expect(title).toBe("Start your personality trait test")
       let text = screen.queryByText("Start").textContent
       expect(text).toBe("Start")

    })
    

    it("When landng screen on click function call", () =>{
        render(
            <BrowserRouter>
                <LandingScreen setLanding={jest.fn()}/>
            </BrowserRouter>
        )

       let button = screen.queryByText("Start")
       fireEvent.click(button)
       expect(handleChange).toHaveBeenCalledTimes(0);


       expect(mockedNavigator).toHaveBeenCalledWith('/');;
    })

})