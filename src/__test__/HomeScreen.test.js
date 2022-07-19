import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import HomeScreen from "../components/HomeScreen";;

describe("Home screen",()=>{
    
    it("When home screen show", () =>{
        render(
            <BrowserRouter>
                <HomeScreen />
            </BrowserRouter>
        )
       
        let strDis = screen.getAllByTestId("strongly-disagree")[0]
        expect(strDis).toHaveTextContent("Strongly disagree")

        let disagree = screen.getAllByTestId("disagree")[0]
        expect(disagree).toHaveTextContent("Disagree")

        let nitdis = screen.getAllByTestId("neither-disagree")[0]
        expect(nitdis).toHaveTextContent("Neither agree not disagree")

        let agree = screen.getAllByTestId("agree")[0]
        expect(agree).toHaveTextContent("Agree")

        let strAgr = screen.getAllByTestId("strongly-agree")[0]
        expect(strAgr).toHaveTextContent("Strongly Agree")
    })
    
})