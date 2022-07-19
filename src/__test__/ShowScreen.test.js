import React from "react";
import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import ShowScreen from "../components/ShowScreen";

describe("Show screen",()=>{
    it("When show screen show", () =>{
        render(
            <BrowserRouter>
                <ShowScreen />
            </BrowserRouter>
        )

        const del = screen.getAllByTestId("delete")[0]
        expect(del).toHaveTextContent("Delete")

        const edt = screen.getAllByTestId("edit")[0]
        expect(edt).toHaveTextContent("Edit")

    })
    
})