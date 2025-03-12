// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // 환경 변수에서 API 키 가져오기
// });

// const openai = new OpenAIApi(configuration);

// export const fetchOpenAIResponse = async (
//   products,
//   purpose,
//   reason,
//   financialStatus,
// ) => {
//   try {
//     const response = await openai.createCompletion({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content:
//             'You are an AI assistant that helps users choose the best product.',
//         },
//         {
//           role: 'user',
//           content: `I am considering these products: ${products.join(
//             ', ',
//           )}. My purpose is ${purpose}, my concerns are ${reason}, and my budget is ${financialStatus}. What would you recommend?`,
//         },
//       ],
//       max_tokens: 100,
//     });

//     return response.data.choices[0].message.content;
//   } catch (error) {
//     console.error('Error fetching AI response:', error);
//     return 'An error occurred while fetching recommendations.';
//   }
// };
