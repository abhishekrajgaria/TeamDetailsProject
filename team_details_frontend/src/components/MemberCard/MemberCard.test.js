import { screen } from '@testing-library/react';
import { renderWithRouter } from "../../utils/testUtils";
import MemberCard from "./MemberCard";



describe("Member Card test", () => {
    test("should render MemberCard component", () =>{
        const member ={
            firstname:"Sim",
            lastname: "ple",
            role: "basic",
            id: "1",
            primaryStack: "base"
        }
        renderWithRouter(
          <MemberCard
            id={member.id}
            firstname={member.firstname}
            lastname={member.lastname}
            role={member.role}
            primaryStack={member.primaryStack}
          />);

          const nameElement = screen.getByText("Sim ple");
          expect(nameElement).toBeInTheDocument();
    })
})