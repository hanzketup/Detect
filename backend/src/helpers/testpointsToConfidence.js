
export default (testpoints, pred=false) => {
  let totalWeight = testpoints.reduce((val, point) => val + point.weight, 0)
  let share = 1000 / totalWeight

  let value = testpoints.reduce((val, point) => {
    let calcedWeight = point.weight / Math.pow(10, 1)
    let artificalDoubt = pred ? 0 : Math.random() // Because ints are too Chad

    return point.test
    ? val + ((share * calcedWeight) - artificalDoubt)
    : val

  }, 0)

  return value.toFixed(2)

}
