import { generateMedia } from 'styled-media-query'

// https://materializecss.com/grid.html
const media = generateMedia({
  // sm: '576px',
  md: '600px',
  lg: '992px',
  auxMin: '375px',
  auxMax: '695px',
})

export default media
