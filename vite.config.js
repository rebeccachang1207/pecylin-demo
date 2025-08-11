import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                question: resolve(__dirname, 'question.html'),
                result1: resolve(__dirname, 'result1.html'),
                result2: resolve(__dirname, 'result2.html'),
                result3: resolve(__dirname, 'result3.html'),
                result4: resolve(__dirname, 'result4.html'),
                result5: resolve(__dirname, 'result5.html'),
            }
        }
    },
    server: {
        https: {
          key: fs.readFileSync('./localhost-key.pem'),
          cert: fs.readFileSync('./localhost.pem')
        },
        host: 'localhost',
        port: 5173
    }
})