import os
from openai import AzureOpenAI

APIKEY = "6dfa1da1a2ad4165b1ba1e7b0d60b6fe"
ENDPOINT = "https://sunhackathon18.openai.azure.com"

client = AzureOpenAI(
    api_key = APIKEY,
    api_version = "2023-12-01-preview",
    azure_endpoint = ENDPOINT
)

deployment_name = 'GPT35TURBO' #Model Deployment Name: GPT35TURBO, GPT35TURBO16K, ADA 
user_input = input()
response = client.chat.completions.create(
    model=deployment_name,
    messages=[{"role": "system", "content": user_input}]
)

print(response.choices[0].message.content)
#