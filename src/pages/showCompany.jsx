import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyCard from "../components/company-follow";
import JobFollow from "../components/job-follow";
import { useAuth } from "../context/auth-context";
import { getCompany } from "../service/user-services";

const Wrapper = styled.div`
  margin: 2rem 8.31rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Tittle = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 8px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  margin-bottom: 2rem;
`;

function ShowCompany({ handlefollowing }) {
  const { user } = useAuth();
  const [company, setCompany] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCompany(id).then(setCompany).catch(console.log);
  }, [id]);

  return (
    <Wrapper>
      <Tittle>Following</Tittle>
      <Subtitle>{company?.jobs?.length} job openings</Subtitle>
      <ContainerCard>
        {company?.jobs?.map((job) => (
          <JobFollow
            key={job.id}
            {...job}
            company_data={{
              profile: company.profile_image,
              name: company.name,
            }}
          />
        ))}
      </ContainerCard>
    </Wrapper>
  );
}
export default ShowCompany;
