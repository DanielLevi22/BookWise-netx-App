import dayjs from 'dayjs'

export function compareDate(createdAt: string) {
  const initialDate = dayjs(createdAt)
  const currentDate = dayjs()
  const differenceInDays = currentDate.diff(initialDate, 'day')
  let date = ''
  if (differenceInDays === 0) {
    date = 'Hoje'
  } else if (differenceInDays === 1) {
    date = `Ontem`
  } else {
    date = `Há ${differenceInDays} dias`
  }
  return date
}
