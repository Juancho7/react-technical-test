import { useCatImage } from '../hooks/useCatImage'

export function Other () {
  const { imageUrl } = useCatImage({ fact: 'Random fact' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
