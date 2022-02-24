import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'á',
  'ã',
  'b',
  'tc',
  'd',
  'e',
  'é',
  'ẽ',
  'f',
  'h',
  'i',
  'í',
  'ĩ',
  'k',
  'l',
  'lh',
  'm',
  'n',
  'p',
  's',
  't',
  'u',
  'ú',
  'ũ',
  'w',
  'y',
  "'",
  '^',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
