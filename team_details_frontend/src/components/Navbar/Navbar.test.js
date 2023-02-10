import Navbar from "./Navbar";
import { screen} from '@testing-library/react';
import { renderWithRouter } from "../../utils/testUtils";

describe('Navbar test',()=>{
    test('should render the navbar',()=>{
        renderWithRouter(<Navbar/>);
        const navbarElment = screen.getAllByText();
        console.log(navbarElment);
        // expect(screen.getByTestId()).toBeInTheDocument();
    })
})