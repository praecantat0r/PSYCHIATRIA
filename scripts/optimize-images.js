import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join, extname, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const QUALITY = 82
const EXTS = new Set(['.jpeg', '.jpg', '.png'])

async function convertDir(dir) {
  let files
  try {
    files = readdirSync(dir)
  } catch {
    return
  }
  for (const name of files) {
    const ext = extname(name).toLowerCase()
    if (!EXTS.has(ext)) continue
    const src = join(dir, name)
    const out = join(dir, basename(name, ext) + '.webp')
    try {
      await sharp(src).rotate().webp({ quality: QUALITY }).toFile(out)
      console.log(`✓  ${name}`)
    } catch (e) {
      console.error(`✗  ${name}: ${e.message}`)
    }
  }
}

console.log('Converting images to WebP...\n')
await convertDir(join(__dirname, '../public/images'))
await convertDir(join(__dirname, '../public'))
console.log('\nDone. Run npm run build next.')
