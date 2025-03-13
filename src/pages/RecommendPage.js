import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

const RecommendPage = () => {
  const location = useLocation();
  const recommendation = location.state?.aiResponse;

  const handleClick = () => {
    window.location.href = '/';
  };

  if (!recommendation) {
    return <div>error</div>;
  }
  return (
    <Container>
      <Title>Recommendation</Title>
      <Description>
        Based on your input, we recommend the most suitable product.
      </Description>

      <CardWrapper>
        <Card>
          <ReactMarkdown children={recommendation} />
        </Card>
      </CardWrapper>
      <StyledButton onClick={handleClick}>Go MainPage</StyledButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Card = styled.div`
  background: ${({ isRecommended }) => (isRecommended ? '#e3fcef' : 'white')};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  max-height: 400px;
`;

const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  margin-top: 40px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RecommendPage;
