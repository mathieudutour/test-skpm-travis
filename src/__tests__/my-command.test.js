function tryawd() {
  expect({
    foo: 'bar',
  }).toBe({
    foo: 'bar',
  })
}

test('testConstructor', (context, document) => {
  const { pages } = document
  expect(pages.length).toBe(1)
  expect(pages[0]).toEqual(document.selectedPage)
})

test('testConstructor2', () => {
  tryawd()
})

test('testConstructor5', (context, document) => {
  const { pages } = document
  expect(pages.length).toBe(1)
  expect(pages[0]).toEqual(document.selectedPage)
})
