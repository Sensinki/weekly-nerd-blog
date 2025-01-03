
# Process Report 📰

This is where I log my weekly discoveries from the world of web design and development. Join me as I share insights from inspiring speakers and my own journey in this exciting field.


## What did I use to create this project 🚸
- NodeJS
- Express
- Npm
- EJS (templating engine)
- Render (deployment)
- Dotenv
- Git

## How to install 📦

### 1. Create a folder
That helps you to place this project in your computer so you can easily navigate through it. 

### 2. Clone this repository 
You can clone the application from CLI or install it by downloading the ZIP file. To clone, you can paste the following code into the CLI you are using:

* HTTPS
`git clone https://github.com/Sensinki/weekly-nerd-blog.git`

* or SSH
`git clone git@github.com:Sensinki/weekly-nerd-blog.git`

### 3. Install dependencies
Now you have all documents but you can not run the code without dependencies. I used npm, you can install npm by copying the following code to the CLI.

You can check my "package.json" file if you want to see all of my dependensies and devDependensies.

`npm install`

### 4. .env file 
As last final step, you should set your .env file for MongoDB connection. In the .env file you will define following informations:

`PORT=5555`
It doesn't matter which port you choose. It's up to you :)

### 5. Run the project
Now you can run the project. Write your terminal `npm run dev`. 

To check the connection you can go to your browser and write "localhost:5555". If there is no problem, you should see the homepage of the app.
You can also check the connection by looking at the console. If it is working you should see something like:

`WeeklyNerd app listening on port 5555`