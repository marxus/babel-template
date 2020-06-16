import fs from 'fs'

export const getRootFiles = (): string[] => {
  console.log('...getting root files')
  return fs.readdirSync('/')
}

console.log('welcome...')
