export function starInRating(rate: number) {
  const totalRating = Array(5).fill(false)

  for (let index = 0; index < rate; index++) {
    totalRating[index] = true
  }
  return totalRating
}
