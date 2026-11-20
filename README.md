# AI Recipe Generator

A React app that turns the ingredients you have into a recipe, using a local LLM through [Ollama](https://ollama.com).

## Features

- Add ingredients one at a time
- Generate a recipe from your ingredient list with a local AI model
- Keep previous recipes visible, with the latest on top
- Start a new ingredient list without losing earlier recipes
- Loading and error states (including a hint if Ollama isn't running)

## Tech Stack

- React (hooks)
- Ollama for local LLM inference
- JavaScript, CSS

## Getting Started

1. Install [Ollama](https://ollama.com) and pull a model:
   ```bash
   ollama pull llama3
   ```
2. Make sure Ollama is running.
3. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/ibala-dev/chefmate
   cd <your-project-folder>
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## How It Works

1. Type an ingredient and click **Add Ingredient**.
2. Once you have your list, click **Get Recipe**.
3. The ingredients are sent to the model, and the recipe appears on screen.
4. Click **Add new ingredients** to start another recipe. Earlier recipes stay under "Previous recipes".
