export function Kozizique(initialData, data) {
  data.reverse().forEach((element) => {
    // search if element is existed or not
    const existedElement = initialData.find((initialElement) => {
      return initialElement.id === element.id
    })
    if (existedElement === undefined) {
      // add new element to array
      initialData.unshift(element)
    } else {
      // update existed element
      const existedElementIndex = initialData.indexOf(existedElement)
      initialData.splice(existedElementIndex, 1)
      initialData.unshift(element)
    }
  })
  return initialData
}
