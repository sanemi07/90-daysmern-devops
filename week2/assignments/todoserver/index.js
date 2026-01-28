import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()
app.use(express.json())

// ---------- CONFIG ----------
const DATA_FILE = path.join(process.cwd(), 'todo.txt')

// ---------- HELPERS ----------
async function readTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    // file not found or empty → start fresh
    if (err.code === 'ENOENT') {
      return []
    }
    throw err
  }
}

async function writeTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2))
}

function generateId(todos) {
  if (todos.length === 0) return 1
  return Math.max(...todos.map(t => t.id)) + 1
}

// ---------- ROUTES ----------

// 1️⃣ GET /todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await readTodos()
    res.status(200).json(todos)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read todos' })
  }
})

// 2️⃣ GET /todos/:id
app.get('/todos/:id', async (req, res) => {
  try {
    const todos = await readTodos()
    const id = Number(req.params.id)

    const todo = todos.find(t => t.id === id)

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' })
    }

    res.status(200).json(todo)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

// 3️⃣ POST /todos
app.post('/todos', async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title || !description) {
      return res.status(400).json({ error: 'Invalid body' })
    }

    const todos = await readTodos()

    const newTodo = {
      id: generateId(todos),
      title,
      description,
      completed: false
    }

    todos.push(newTodo)
    await writeTodos(todos)

    res.status(201).json({ id: newTodo.id })
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' })
  }
})

// 4️⃣ PUT /todos/:id
app.put('/todos/:id', async (req, res) => {
  try {
    const { title, description, completed } = req.body
    const id = Number(req.params.id)

    const todos = await readTodos()
    const todo = todos.find(t => t.id === id)

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' })
    }

    if (title !== undefined) todo.title = title
    if (description !== undefined) todo.description = description
    if (completed !== undefined) todo.completed = completed

    await writeTodos(todos)
    res.status(200).json({ message: 'Todo updated' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' })
  }
})

// 5️⃣ DELETE /todos/:id
app.delete('/todos/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await readTodos()

    const index = todos.findIndex(t => t.id === id)

    if (index === -1) {
      return res.status(404).json({ error: 'Todo not found' })
    }

    todos.splice(index, 1)
    await writeTodos(todos)

    res.status(200).json({ message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' })
  }
})

// 6️⃣ Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// ---------- START SERVER ----------
app.listen(3000, () => {
  console.log('Todo server running on port 3000')
})
