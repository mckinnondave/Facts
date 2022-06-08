const colors = [
  "#f79e74",
  "#89d5f9",
  "#50d855",
  "#e298a9",
  "#59f635",
  "#99d2a8",
  "#e60c85",
  "#666185",
  "#e53153",
  "#bccc86",
  "#d77583",
  "#d427da",
  "#eab893",
  "#f4cd3e",
  "#b59211",
  "#bbd0b1",
  "#099a90"
]

const colorChanger = () => {
  let choice = Math.floor(Math.random() * 17)
  return colors[choice]
}

export { colorChanger }