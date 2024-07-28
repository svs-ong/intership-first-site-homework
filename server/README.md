### README for Article Server 

#### Overview 

This server uses Express to serve articles stored in a JSON file via a REST API.

#### Prerequisites 
 
- **Node.js**  
  - The server requires Node.js. Download and install it from [Node.js official website](https://nodejs.org/) .

#### Installation 
 
1. **Install Dependencies**  
  - After installing Node.js, run the following command in your project directory to install the necessary dependencies:

```bash
npm install
```

#### Running the Server 
 
- **Start the Server**  
  - Start the server using this command:

```bash
node server
```
 
  - The server will run on `http://localhost:3000`.

#### Usage 
 
- **Retrieve Articles**  
  - Access all articles by navigating to the `/articles` endpoint:

```bash
curl http://localhost:3000/articles
```

  - This command returns a JSON array of articles.
 
- **Welcome Message**  
  - Access the root URL to receive a greeting:

```bash
curl http://localhost:3000/
```

### API Endpoints 
 
- **GET `/`** : Returns a welcome message.
 
- **GET `/articles`** : Outputs a JSON array of all articles.


---
