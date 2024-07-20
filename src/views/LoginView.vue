<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { api } from '@/config/Api'
import { useUserStore } from '@/stores/useUserStore'

export default {
  name: 'LoginView',
  setup() {
    const toast = useToast()
    const router = useRouter()
    const userStore = useUserStore()

    const email = ref('')
    const password = ref('')

    const handleLogin = async () => {
      try {
        const formData = {
          email: email.value,
          password: password.value
        }
        const response = await api.post('/login', formData)
        if (response.data.status === 200) {
          toast.success(response?.data?.message)
          userStore.setUser(response?.data?.data)
          router.push('/')
        }
      } catch (error) {
        if (error?.response?.data?.status === 400 || error?.response?.data?.status === 401) {
          toast.error(error?.response?.data?.message)
        } else {
          toast.error('Login failed. Please try again.')
        }
      }
    }

    return {
      email,
      password,
      handleLogin
    }
  }
}
</script>

<template>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-[#FFFFFF]">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#000000]">
        Login
      </h2>
    </div>

    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-10 md:p-0">
      <form className="space-y-4" method="POST" @submit.prevent="handleLogin">
        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div className="mt-1">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="off"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold leading-6 text-[#C32424] underline-offset-2 hover:opacity-80"
                >Forgot password?</a
              >
            </div>
          </div>
          <div className="mt-1">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="off"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#C32424] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-[#000000]">
        Don&rsquo;t have an account ?
        {{ ' ' }}
        <a
          href="/register"
          className="font-semibold leading-6 text-[#C32424] underline-offset-2 hover:opacity-80"
          >Click here</a
        >
      </p>
    </div>
  </div>
</template>
