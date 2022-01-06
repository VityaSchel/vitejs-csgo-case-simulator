import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rootImport from 'rollup-plugin-root-import'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rootImport({
      root: `${__dirname}/src`,
      useInput: 'prepend',
      extensions: ['.js', '.tsx'],
    }),
    ViteFonts({
      google: {
        families: ['Roboto Condensed']
      },
    })
  ]
})
