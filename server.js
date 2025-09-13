const express = require('express');
const { Pool } = require('pg'); // Import the pg library

const app = express();
const port = 3000;

// --- DATABASE CONFIGURATION ---
// The Pool will use these environment variables to connect to the database.
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// --- FUNCTION TO CREATE TABLE ON STARTUP ---
const createTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        task VARCHAR(255) NOT NULL
      );
    `);
    console.log('"todos" table is successfully created or already exists.');
  } catch (err) {
    console.error('Error creating table:', err.stack);
  } finally {
    client.release();
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// --- ROUTES ---

// Serve the HTML frontend
app.get('/', async (req, res) => {
  console.log('Fetching todos from database...');
  try {
    const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
    const todos = result.rows;
    let html = `
        <html>
            <head>
                <title>Todo List</title>
                <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <h1>${process.env.PAGE_TITLE || "My Default Todo List"}</h1>
                <ul>
                    ${todos.map(todo => `<li>${todo.task}</li>`).join('')}
                </ul>
                <form action="/add-todo" method="post">
                    <input type="text" name="todo" placeholder="Add a new task..." required>
                    <button type="submit">Add Task</button>
                </form>
                <div style="margin-top: 30px; padding: 10px; border: 1px solid #ccc;">
                    <h2>Secret Feature</h2>
                    ${process.env.SECRET_MESSAGE_FROM_K8S ? `<p><strong>Secret Message:</strong> ${process.env.SECRET_MESSAGE_FROM_K8S}</p>` : '<p>No secret found.</p>'}
                </div>
            </body>
        </html>
    `;
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from database');
  }
});

// Handle adding a new todo
app.post('/add-todo', async (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) {
    console.log(`Adding new task to database: ${newTodo}`);
    try {
      await pool.query('INSERT INTO todos (task) VALUES ($1)', [newTodo]);
    } catch (err) {
      console.error(err);
    }
  }
  res.redirect('/');
});

// --- HEALTH CHECK ENDPOINTS ---
app.get('/healthz/live', (req, res) => { res.sendStatus(200); });
app.get('/healthz/ready', (req, res) => { res.sendStatus(200); });


// --- START THE SERVER ---
app.listen(port, async () => {
  await createTable(); // Ensure the table exists before we start listening
  console.log(`Todo app listening at http://localhost:${port}`);
});