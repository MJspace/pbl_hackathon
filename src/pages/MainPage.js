import styled from 'styled-components';
import TextInput from '../components/TextInput';
import FinancialOption from '../components/FinancialOption';

const MainPage = () => {
  return (
    <Container>
      <Title>ShopWise</Title>
      <Description>
        If you enter two product information, AI will recommend the appropriate
        product.
      </Description>
      <CardWrapper>
        <Card>
          <h3>Product 1</h3>
          <TextInput placeholder="Product Link" />
          <TextInput placeholder="Purpose of use" />
          <TextInput placeholder="Reasons for consideration between items" />
          <FinancialOption />
        </Card>
        <Card>
          <h3>Product 2</h3>
          <TextInput placeholder="Product Link" />
          <TextInput placeholder="Purpose of use" />
          <TextInput placeholder="Reasons for consideration between items" />
          <FinancialOption />
        </Card>
      </CardWrapper>
      <WarningText>
        ※ AI recommendations are for reference only.
        <br /> The user is responsible for any consequences of their final
        purchase decision.
      </WarningText>
      <StyledButton>Get recommendations</StyledButton>
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
  max-height: 100vh;
`;

const Title = styled.h1`
  font-size: 35px;
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
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const WarningText = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 40px;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  font-size: 25px;
  color: white;
  background-color: #daadad;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b75555;
  }
`;

export default MainPage;
