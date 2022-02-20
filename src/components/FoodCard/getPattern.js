import patterns from './Patterns.module.css'

export default function getPattern() {
  const randomNum = Math.floor(Math.random() * 18)
  switch (randomNum) {
    case 0:
      return patterns.pattern0
    case 1:
      return patterns.pattern1
    case 2:
      return patterns.pattern2
    case 3:
      return patterns.pattern3
    case 4:
      return patterns.pattern4
    case 5:
      return patterns.pattern5
    case 6:
      return patterns.pattern6
    case 7:
      return patterns.pattern7
    case 8:
      return patterns.pattern8
    case 9:
      return patterns.pattern9
    case 10:
      return patterns.pattern10
    case 11:
      return patterns.pattern11
    case 12:
      return patterns.pattern12
    case 13:
      return patterns.pattern13
    case 14:
      return patterns.pattern14
    case 15:
      return patterns.pattern15
    case 16:
      return patterns.pattern16
    case 17:
      return patterns.pattern17
    default:
      return patterns.pattern0
  }
}
