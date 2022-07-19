import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import NavBar from "../common/NavBar";

const mockedNavigator = jest.fn();
const handleChange = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));


describe("navbar screen",()=>{
    
    it("When navabar screen show", () =>{
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        )

       let title = screen.queryByText("Personality Traits").textContent
       expect(title).toBe("Personality Traits")

       let show = screen.queryByText("Show").textContent
       expect(show).toBe("Show")

       let create = screen.queryByText("Create").textContent
       expect(create).toBe("Create")


    })
    

    it("navbar link navigate functionality ", () =>{
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        )
     const home = screen.getByRole('link', { name: 'Personality Traits' });
     expect(home.getAttribute('href')).toBe('/');

     const show = screen.getByRole('link', { name: 'Show' });
     expect(show.getAttribute('href')).toBe('/show');

     const create = screen.getByRole('link', { name: 'Create' });
     expect(create.getAttribute('href')).toBe('/create');

    })

})