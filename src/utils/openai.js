import OpenAI from 'openai';

// console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // 환경 변수에서 API 키 가져오기
  dangerouslyAllowBrowser: true, // 브라우저 환경에서 API 호출 허용
});

export const fetchOpenAIResponse = async (
  products,
  purpose,
  reason,
  financialStatus,
) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4.5-preview', // 최신 모델로 변경
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that helps users choose the best product.
            
            **Format the response using Markdown.**  
            **Use explicit line breaks between sections.**  
            
            **Response Format:**
            
            **Product Name:**  
            [Recommended Product Name]  
            
            **Reason for Recommendation:**  
            [Explanation tailored to the user's situation]  
            
            **Key Features:**  
            1. Feature 1  
            2. Feature 2  
            3. Feature 3  
            
            **Final Conclusion:**  
            [Summary of the recommendation]  

            Ensure that each section is separated by a full line break (\n\n) to enhance readability.`,
        },
        {
          role: 'user',
          content: `I am considering these products: ${products.join(
            ', ',
          )}. My purpose is ${purpose}, my concerns are ${reason}, and my budget is ${financialStatus}. What would you recommend?`,
        },
      ],
      max_tokens: 700, // 응답 길이 증가 (줄 바꿈을 포함한 충분한 답변 허용)
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'An error occurred while fetching recommendations.';
  }
};
