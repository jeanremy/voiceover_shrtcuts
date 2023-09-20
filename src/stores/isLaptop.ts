import { atom } from 'nanostores'

export const isLaptop = atom<boolean>(true)

export const toggle = function (s: string) {
  isLaptop.set(!isLaptop)
}
