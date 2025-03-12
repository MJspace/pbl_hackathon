import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import FinancialOption from '../components/FinancialOption';
import { fetchOpenAIResponse } from '../utils/openai';

const MainPage = () => {
  const [products, setProducts] = useState(['']); // 상품 링크 배열
  const [productPurpose, setProductPurpose] = useState('');
  const [productReason, setProductReason] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  // 상품 추가 버튼 클릭 시 실행
  const addProductInput = () => {
    setProducts([...products, '']);
  };

  // 특정 상품 제거
  const removeProductInput = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // 상품 입력값 변경 처리
  const handleProductChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index] = value;
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <Title>ShopWise</Title>
      <Description>
        Enter product links and details to get AI recommendations.
      </Description>
      <CardWrapper>
        <Card>
          <h3>Efficient product comparison</h3>
          {products.map((product, index) => (
            <InputWrapper key={index}>
              <TextInput
                placeholder={`Product Link`}
                value={product}
                onChange={(e) => handleProductChange(index, e.target.value)}
                isTextarea={false}
                style={{ paddingRight: '80px' }} // 버튼 공간 확보
              />
              {index === products.length - 1 && (
                <AddButton onClick={addProductInput}>+</AddButton>
              )}
              {products.length > 1 && (
                <RemoveButton onClick={() => removeProductInput(index)}>
                  ✖
                </RemoveButton>
              )}
            </InputWrapper>
          ))}

          <TextInput
            placeholder="Purpose of use"
            value={productPurpose}
            onChange={(e) => setProductPurpose(e.target.value)}
            isTextarea={true}
          />
          <TextInput
            placeholder="Reasons for consideration between items"
            value={productReason}
            onChange={(e) => setProductReason(e.target.value)}
            isTextarea={true}
          />
          <FinancialOption placeholder="Financial status" />
        </Card>
      </CardWrapper>

      <WarningText>
        ※ AI recommendations are for reference only. The user is responsible for
        any consequences of their final purchase decision.
      </WarningText>

      {/* <StyledButton onClick={handleGetRecommendation}>
        Get recommendations
      </StyledButton> */}

      {/* {aiResponse && <ResponseBox>{aiResponse}</ResponseBox>} */}
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
  margin: 20px 0px 40px 0px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b75555;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: #b75555;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  padding: 5px;
`;

const RemoveButton = styled.button`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  color: blue;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;
  width: 30px;
  height: 30px;
`;

const ResponseBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: left;
`;

export default MainPage;
