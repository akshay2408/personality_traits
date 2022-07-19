import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import {ResultScreen} from "../components/ResultScreen";;



const mockedNavigator = jest.fn();
const clickhandle = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));


let mockUseLocationValue = {
    pathname: "/home",
    search: '',
    hash: '',
    state: {result : 40}
}


jest.mock('react-router', () => ({
    ...jest.requireActual("react-router"),
    useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue;
    })
}));


describe("Result screen",()=>{
    
    it("When result screen show", () =>{
        render(
            <BrowserRouter>
                <ResultScreen />
            </BrowserRouter>
        )
       
        let result = screen.getByText(`Your Result : ${mockUseLocationValue.state.result} %`);
        let title = screen.getByText('You are Neutral')
        let button = screen.queryByText("Start Again")
        fireEvent.click(button)
        expect(clickhandle).not.toHaveBeenCalledTimes(1);
    
    
        expect(mockedNavigator).toHaveBeenCalledWith('/');;

    })
    
})