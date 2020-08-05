import axios from "axios"
const url = "https://opentdb.com/api.php?amount=5"

export const fetchData = async () => {
  try {
    const { data: { results } } = await axios.get(url)
    return results
  } catch (error) {
    console.log(error)
  }
}