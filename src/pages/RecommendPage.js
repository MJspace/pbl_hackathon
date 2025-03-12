import styled from 'styled-components';

const RecommendPage = ({ recommendation }) => {
  return (
    <Container>
      <Title>AI 추천 결과</Title>
      <Description>
        사용자의 입력을 바탕으로 가장 적합한 제품을 추천합니다.
      </Description>

      <CardWrapper>
        <Card isRecommended={recommendation.isBest}>
          <h3>{recommendation.product1.name}</h3>
          <ProductImage src={recommendation.product1.image} alt="제품 1" />
          <ReasonText>{recommendation.product1.reason}</ReasonText>
          <ProgressBar value={recommendation.product1.score} />
        </Card>

        <Card isRecommended={recommendation.isBest === false}>
          <h3>{recommendation.product2.name}</h3>
          <ProductImage src={recommendation.product2.image} alt="제품 2" />
          <ReasonText>{recommendation.product2.reason}</ReasonText>
          <ProgressBar value={recommendation.product2.score} />
        </Card>
      </CardWrapper>

      <StyledButton>자세히 보기</StyledButton>
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
  min-height: 100vh;
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
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: ${({ isRecommended }) =>
    isRecommended ? '2px solid #28a745' : 'none'};
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ReasonText = styled.p`
  font-size: 16px;
  color: #444;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ value }) => value}%;
    background-color: #28a745;
    transition: width 0.3s ease;
  }
`;

const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RecommendPage;
