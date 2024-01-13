const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = "https://sunhackathon18.openai.azure.com"
const azureApiKey = "6dfa1da1a2ad4165b1ba1e7b0d60b6fe"
function buildData(data) {
  let random = Math.random();
  userInput = `Tạo cho tôi ${random} flashcards ${data} với form như thế này chú ý định nghĩa bằng tiếng việt và phải siêu ngắn gọn : "Thuật ngữ - Định nghĩa"`; // Input text ở đây 
  const messages = [
      { role: "user", content: userInput },
  ];  
  
  async function main() {
      const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
      const deploymentId = "GPT35TURBO";
      const result = await client.getChatCompletions(deploymentId, messages);
      let ourData = "";
      for (const choice of result.choices) {
      ourData = ourData + choice.message.content;
      }
      uppdateData(ourData);
  }
  
  main().catch((err) => {
      console.error("The sample encountered an error:", err);
  });
  module.exports = { main };
}

function uppdateData(data) {
  fetch('../data_file/flashcard_data.txt', {
  method: 'PUT', // Use the PUT method to overwrite data in the file
  headers: {
      'Content-Type': 'text/plain'
  },
  body: data
  })
  .then(response => {
      if (response.ok) {
      console.log('Data has been written to the file flashcard_data.txt');
      } else {
      console.error('Error writing data to the file:', response.status);
      }
  })
  .catch(error => console.error('Error writing data to the file:', error));
}

module.exports = {

  buildData,

  uppdateData

};