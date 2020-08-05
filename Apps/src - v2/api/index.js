import axios from "axios"

let url = "https://opentdb.com/api.php?amount=10"

const FetchData = async () => {
  try {
    const { data: { results } } = await axios.get(url)
    return results
  } catch (error) {
    console.log(error)
  }
}

export default FetchData;
