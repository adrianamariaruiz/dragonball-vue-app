import axios from 'axios'
import { ref } from 'vue'

export const useGetAllCharacters = () => {
  const characters = ref([])
  const errorData = ref(null)
  const loading = ref(true)

  const getAllCharactersData = async () => {
    let page = 1
    let hasMore = true

    try {
      while (hasMore) {
        const res = await axios.get(`https://dragonball-api.com/api/characters?page=${page}`)
        // console.log(res.data.items)

        if (res.data.items) {
          characters.value = [...characters.value, ...res.data.items]
          hasMore = res.data.items.length === 10
          page++
        } else {
          hasMore = false
        }
      }
      // console.log(characters)
    } catch (error) {
      console.log(error)
      errorData.value = 'Error del servidor'
    } finally {
      loading.value = false
    }
  }

  return {
    getAllCharactersData,
    characters
  }
}
