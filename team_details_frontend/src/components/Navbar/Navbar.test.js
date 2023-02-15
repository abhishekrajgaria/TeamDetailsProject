import Navbar from "./Navbar";
import {  screen} from '@testing-library/react';
import { renderWithRouter } from "../../utils/testUtils";

describe('Navbar test',()=>{
    test('should render the navbar',()=>{
        renderWithRouter(<Navbar/>);
        const navbarElment = screen.getByText("Team Details");
        expect(navbarElment).toBeInTheDocument();
        const addNewElement = screen.getByTestId("add-new-link");
        expect(addNewElement).toBeInTheDocument();
    })
})