import os
from openai import AzureOpenAI
import constants

client = AzureOpenAI(
    api_key = constants.APIKEY,
    api_version = "2023-12-01-preview",
    azure_endpoint = constants.ENDPOINT
)

user_input = input()
deployment_name = 'GPT35TURBO' #Model Deployment Name: GPT35TURBO, GPT35TURBO16K, ADA 

response = client.chat.completions.create(
    model = deployment_name,
    messages = [{"role": "system", "content": user_input}]
)

print(response.choices[0].message.content)

# logFile = open('log.json', 'w')
# print(response, file = logFile)
# logFile.close()