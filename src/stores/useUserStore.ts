// src/store/useUserStore.ts
import { defineStore } from 'pinia'
import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

interface Role {
  id: number
  role: string
}

interface User {
  id: string
  fullname: string
  email: string
  role: Role
  token: string
}

interface State {
  user: User | null
}

const persistedStateOptions: PersistedStateOptions = {
  storage: window.sessionStorage
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    user: null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    },
    logout() {
      this.user = null
    },
  },
  persist: persistedStateOptions, // Use sessionStorage instead of localStorage
})

