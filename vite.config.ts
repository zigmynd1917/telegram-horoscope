import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//@ts-ignore
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./private.key'),
      cert: fs.readFileSync('./cert.pem'),
    },
  },
})
