import os
from openai import AzureOpenAI
import constants

client = AzureOpenAI(
    api_key = constants.APIKEY,
    api_version = "2023-12-01-preview",
    azure_endpoint = constants.ENDPOINT
)

user_input = "Tạo cho tôi 10 câu hỏi trắc nghiệm dựa theo data / yêu cầu sau [bánh mì]. Lưu ý ngôn ngữ tiếng việt và phải theo form sau : Câu hỏi/n Đáp án a/n Đáp án b/n Đáp án c/n Đáp án d/n Đáp án đúng/n Giải thích/n"
deployment_name = 'GPT35TURBO' #Model Deployment Name: GPT35TURBO, GPT35TURBO16K, ADA 

response = client.chat.completions.create(
    model = deployment_name,
    messages = [{"role": "system", "content": user_input}]
)

print(response.choices[0].message.content)
