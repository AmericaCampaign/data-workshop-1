/* global describe, expect, it */
import DATA from '../DATA'
import setActive from './setActive.test'

describe('setActive', () => {
  it('is a function', () => expect(typeof setActive).toBe('function'))

  it('returns null with no id', () => expect(setActive(DATA, null)).toBeNull())

  it('returns null with no data', () => expect(setActive(null, 1)).toBeNull())

  it('returns null with undefined products', () => expect(setActive({}, 1)).toBeNull())

  it('returns an object when passed a good id', () => expect(typeof setActive(DATA, 1)).toBe('object'))

  it('return the correct result', () => {
    expect(setActive(DATA, 1)).toMatchObject({
      id: 1,
      name: 'Amazing Book',
      price: 30
    })
  })
})
