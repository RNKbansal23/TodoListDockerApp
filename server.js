const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let todos  = ["Learn Docker", "Learn Kubernates" , "Build a ci/cd pipelines"];

app.get('/', (req, res) => {
    let html = `
    <html>
        <head><title>Todo List</title></head>
        <body>
            <h1>My AUTOMATED DevOps Todo List</h1>
            <ul>
                ${todos.map(todo => `<li>${todo}</li>`).join('')}
            </ul>
            <form action = "/add-todo" method= "post">
                <input type="text" name = "todo" placeholer = "Add a new task..." aria-required>
                <button type='submit'>Add Task</button>
            </form>
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