import { useState, useEffect } from 'react'

const CAT_PREFFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(response => response.json())
      .then(response => {
        setImageUrl(`${CAT_PREFFIX_IMAGE_URL}${threeFirstWords}?fontSize=50&fontColor=red`)
      }
      )
  }, [fact])

  return { imageUrl }
}
