import styled from "@emotion/styled";
import IconExample from "../styles/img/iconoexample.svg";
import { RiArrowDownSLine, RiPauseCircleLine , RiMailLine , RiTimeLine , RiBuilding3Line, RiCalendar2Line, RiMoneyDollarCircleLine } from "react-icons/ri";

const Conteiner = styled("div")`
    border: 1px solid #E1E2E1;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 97%;
    padding: 16px;
`;

const JobTitle = styled("h4")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
`;

const CompanyName = styled("p")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #616161;
`;

const ExtraDetails = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #8E8E8E;
    display: flex;
    align-items: center
`;

const MoreDetailsButton = styled("button")`
    border: none;
    display: flex;
    align-items: end;
`;

const UpdateDate = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
`;

const SubTitles = styled("h2")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #BF5F82;
`;

const Text = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
`;

const CVButton = styled("button")`
    width: 183px;
    height: 40px;
    border: 1px solid #F48FB1;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 8px;
`;

const DeclineButton = styled("button")`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 242px;
    height: 40px;
    justify-content: center;
    background: #BF5F82;
    border-radius: 16px;
    color: white;
    border:none
`;

export default function YourApplicationComponent(){

    return (
        <Conteiner>
            <div style={{width: "100%", display: "flex", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{display: "flex", gap: "16px", alignItems: "center"}}>
                    <img src={IconExample} style={{width: "60px", height: "60px"}}></img>
                    <div>
                        <JobTitle>The job Title</JobTitle>
                        <CompanyName>The company Name SA</CompanyName>
                    </div>
                </div>
                <div>
                    <div style={{display: "flex", gap: "10px"}}>
                        <ExtraDetails><RiBuilding3Line style={{marginRight: "6px"}}/>Manufactioring</ExtraDetails>
                        <ExtraDetails><RiCalendar2Line style={{marginRight: "6px"}}/>Full time</ExtraDetails>
                    </div>
                    <div style={{display: "flex", gap: "10px"}}>
                        <ExtraDetails><RiMoneyDollarCircleLine style={{marginRight: "6px"}}/>2.0k - 2.5k</ExtraDetails>
                        <ExtraDetails><RiTimeLine style={{marginRight: "6px"}}/>Posted 2 days ago</ExtraDetails>
                    </div>
                </div>
                <div style={{display: "flex", gap: "16px",}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <ExtraDetails><RiMailLine/></ExtraDetails>
                        <ExtraDetails>Sent 1 min.</ExtraDetails>
                        <ExtraDetails>ago</ExtraDetails>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <ExtraDetails style={{color: "#F48FB1"}}><RiPauseCircleLine/></ExtraDetails>
                        <ExtraDetails style={{color: "#F48FB1"}}>Waiting for</ExtraDetails>
                        <ExtraDetails style={{color: "#F48FB1"}}>review</ExtraDetails>
                    </div>
                    <MoreDetailsButton><RiArrowDownSLine/></MoreDetailsButton>
                </div>
            </div>
            <div style={{gap: "16px", display: "flex", flexDirection: "column"}}>
                <UpdateDate>Last Updated on 03/22/21</UpdateDate>
                <SubTitles>Professional experience</SubTitles>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.
                Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis velit, interdum vitae viverra quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget risus cursus facilisis vel quis nibh. Praesent euismod lectus a.</Text>
                <SubTitles>Why are you interested in working at The company name SA</SubTitles>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.
                Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis velit, interdum vitae viverra quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget risus cursus facilisis vel quis nibh. Praesent euismod lectus a.</Text>
                <div style={{gap: "10px", width: "100%", display: "flex", justifyContent: "end"}}>
                    <CVButton>DOWNLOAD CV</CVButton>
                    <DeclineButton>DECLINE APPLICATION</DeclineButton>
                </div>
            </div>
        </Conteiner>
    )
}