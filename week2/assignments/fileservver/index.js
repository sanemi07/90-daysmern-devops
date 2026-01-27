import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()
app.use(express.json())

const FILES_DIR = path.join(process.cwd(), 'files')

app.get('/files', async (req, res) => {
  try {
    const result = await fs.readdir(FILES_DIR)
    res.status(200).json(result)
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('Directory not found')
    } else {
      res.status(500).send('Server error')
    }
  }
})

app.get('/file/:fileName', async (req, res) => {
  try {
    const fileName = req.params.fileName

    // basic safety check
    if (fileName.includes('..')) {
      return res.status(400).send('Invalid file name')
    }

    const filePath = path.join(FILES_DIR, fileName)
    const data = await fs.readFile(filePath, 'utf8')

    res.status(200).send(data)
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('File not found')
    } else {
      res.status(500).send('Server error')
    }
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
