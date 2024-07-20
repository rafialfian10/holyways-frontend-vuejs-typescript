<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email as emailValidator } from '@vuelidate/validators'
import { api } from '@/config/Api'

export default {
  name: 'RegisterView',
  setup() {
    const toast = useToast()
    const router = useRouter()

    const fullname = ref('')
    const email = ref('')
    const password = ref('')
    const phone = ref('')

    const rules = {
      fullname: { required },
      email: { required, email: emailValidator },
      password: { required, minLength: minLength(8) },
      phone: { required }
    }

    const v$ = useVuelidate(rules, { fullname, email, password, phone })

    const handleRegister = async () => {
      v$.value.$touch()
      console.log(v$)
      if (!v$.value.$invalid) {
        try {
          const formData = {
            fullname: fullname.value,
            email: email.value,
            password: password.value,
            phone: phone.value
          }
          const response = await api.post('/register', formData)
          if (response.data.status === 201) {
            toast.success(response?.data?.message)
            router.push('/verification-email')
          }
        } catch (error) {
          if (error?.response?.data?.status === 400) {
            toast.error(error?.response?.data?.message)
          } else {
            toast.error('Registration failed. Please try again.')
          }
        }
      } else {
        console.log('Register failed')
      }
    }

    return {
      fullname,
      email,
      password,
      phone,
      handleRegister,
      v$
    }
  }
}
</script>

<template>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-[#FFFFFF]">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#000000]">
        Register
      </h2>
    </div>
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-10 md:p-0">
      <form className="space-y-4" @submit.prevent="handleRegister">
        <div>
          <label for="fullname" className="block text-sm font-medium leading-6 text-gray-900">
            Fullname
          </label>
          <div className="mt-1">
            <input
              id="fullname"
              v-model="fullname"
              name="fullname"
              type="text"
              autocomplete="off"
              :class="{ 'border-red-500': v$.fullname.$error }"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
            <span v-if="v$.fullname.$error" className="text-red-500 text-xs"
              >Fullname is required</span
            >
          </div>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              v-model="email"
              name="email"
              type="text"
              autocomplete="off"
              :class="{ 'border-red-500': v$.email.$error }"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
            <span v-if="v$.email.$error" className="text-red-500 text-xs">
              <span v-if="!v$.email.email">Email is not valid</span>
              <span v-if="v$.email.required && v$.email.email">Email is required</span>
            </span>
          </div>
        </div>
        <div>
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="off"
              :class="{ 'border-red-500': v$.password.$error }"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
            <span v-if="v$.password.$error" className="text-red-500 text-xs">
              <span v-if="!v$.password.minLength">Password must be at least 8 characters</span>
              <span v-if="v$.password.required && v$.password.minLength">Password is required</span>
            </span>
          </div>
        </div>
        <div>
          <label for="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Phone
          </label>
          <div className="mt-1">
            <input
              id="phone"
              v-model="phone"
              name="phone"
              type="text"
              autocomplete="off"
              :class="{ 'border-red-500': v$.phone.$error }"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
            <span v-if="v$.phone.$error" className="text-red-500 text-xs">Phone is required</span>
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#C32424] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus:outline-none"
          >
            Create your account
          </button>
        </div>
      </form>
      <p className="mt-2 text-center text-sm text-[#000000]">
        Already have an account?
        {{ ' ' }}
        <a
          href="/login"
          className="font-semibold leading-6 text-[#C32424] underline-offset-2 hover:opacity-80"
          >Click here</a
        >
      </p>
    </div>
  </div>
</template>
