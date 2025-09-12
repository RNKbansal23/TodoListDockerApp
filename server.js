const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let todos  = ["Learn Docker", "Learn Kubernates" , "Build a ci/cd pipelines"];

app.get('/', (req, res) => {
    // ... inside the app.get('/' ... route handler
let html = `
    <html>
        <head><title>Todo List</title></head>
        <body>
            <h1>${process.env.PAGE_TITLE || "My Default Todo List"}</h1>
            <ul>
                ${todos.map(todo => `<li>${todo}</li>`).join('')}
            </ul>
            <form action="/add-todo" method="post">
                <input type="text" name="todo" placeholder="Add a new task..." required>
                <button type="submit">Add Task</button>
            </form>

            <!-- ADD THIS NEW SECTION -->
            <div style="margin-top: 30px; padding: 10px; border: 1px solid #ccc;">
                <h2>Secret Feature</h2>
                ${process.env.SECRET_MESSAGE_FROM_K8S ? `<p><strong>Secret Message:</strong> ${process.env.SECRET_MESSAGE_FROM_K8S}</p>` : '<p>No secret found.</p>'}
            </div>
            <!-- END NEW SECTION -->

        </body>
    </html>
`;
        res.send(html);
});

app.post('/add-todo', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) {
        todos.push(newTodo);
        console.log(`Added new task: ${newTodo}`);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});