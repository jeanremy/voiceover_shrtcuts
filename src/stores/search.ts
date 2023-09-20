import { atom } from 'nanostores'

export const search = atom<string | undefined>(undefined)

export const setSearch = function (s: string) {
  search.set(s.toLocaleLowerCase())
}
