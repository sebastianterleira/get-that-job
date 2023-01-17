import styled from "@emotion/styled"
import YourApplicationComponent from "./yourApplicationComponent"

const Title = styled("h1")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
    margin-bottom: 40px;
`;

const FilterTitle = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
`;

const FilterOptions = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1.5px;
    color: #616161;
`;

const FilterCount = styled("h3")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin-top: 16px;
    margin-bottom: 8px;
`;

export default function YourApplication(){
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={{width: "80vw", marginTop: "10vh"}}>
                <Title>Your Applications</Title>
                <FilterTitle>FILTER YOUR APPLICATIONS</FilterTitle>
                <div style={{display: "flex", gap: "10px",}}>
                    <input type="checkbox"></input>
                    <FilterOptions>All</FilterOptions>
                    <input type="checkbox"></input>
                    <FilterOptions>Waiting</FilterOptions>
                    <input type="checkbox"></input>
                    <FilterOptions>In progress</FilterOptions>
                    <input type="checkbox"></input>
                    <FilterOptions>Finished</FilterOptions>
                    <input type="checkbox"></input>
                    <FilterOptions>Declined</FilterOptions>
                </div>
                <FilterCount>4 applications found</FilterCount>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <YourApplicationComponent/>
                </div>
            </div>
        </div>
    )
}