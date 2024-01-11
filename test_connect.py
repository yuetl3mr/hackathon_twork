import os
from flask import Flask, render_template, request
from openai import AzureOpenAI
import constants

client = AzureOpenAI(
    api_key = constants.APIKEY,
    api_version = "2023-12-01-preview",
    azure_endpoint = constants.ENDPOINT
)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_input', methods=['POST'])
def process_input():
    user_input = request.form['user_input']
    deployment_name = 'GPT35TURBO'

    # Gọi hàm API của Azure OpenAI
    response = client.chat.completions.create(
        model = deployment_name,
        messages=[{"role": "system", "content": user_input}]
    )

    result = response.choices[0].message.content
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)

