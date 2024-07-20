<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'
import { api } from '@/config/Api'

export default {
  name: 'VerificationEmailView',
  setup() {
    const toast = useToast()
    const router = useRouter()

    const email = ref('')
    const otpToken = ref('')

    const rules = {
      email: { required, email: emailValidator },
      otpToken: { required }
    }

    const v$ = useVuelidate(rules, { email, otpToken })

    const handleVerificationEmail = async () => {
      v$.value.$touch()
      if (!v$.value.$invalid) {
        try {
          const formData = {
            email: email.value,
            otpToken: otpToken.value
          }
          const response = await api.post('/verify-email', formData)
          if (response.data.status === 200) {
            toast.success(response?.data?.message)
            router.push('/login')
          }
        } catch (error) {
          if (error?.response?.data?.status === 400) {
            toast.error(error?.response?.data?.message)
          } else {
            toast.error('Verification email failed. Please try again.')
          }
        }
      } else {
        console.log('Verification email failed')
      }
    }

    const handleResendOtp = async () => {
      if (!email.value) {
        toast.error('Please enter your email address to resend OTP.')
        return
      }
      try {
        const response = await api.get(`/resend-otp/${email.value}`)
        if (response.data.status === 200) {
          toast.success(response?.data?.message)
        }
      } catch (error) {
        toast.error('Failed to resend OTP. Please try again.')
      }
    }
    return {
      email,
      otpToken,
      handleVerificationEmail,
      handleResendOtp,
      v$
    }
  }
}
</script>

<template>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-[#FFFFFF]">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#000000]">
        Verification Email
      </h2>
    </div>

    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-10 md:p-0">
      <form className="space-y-4" method="POST" @submit.prevent="handleVerificationEmail">
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
          <div className="flex items-center justify-between">
            <label for="otpToken" className="block text-sm font-medium leading-6 text-gray-900"
              >OTP</label
            >
            <div className="text-sm text-[#C32424]">
              <button
                type="button"
                @click.prevent="handleResendOtp"
                className="font-semibold leading-6 text-[#C32424] underline-offset-2 hover:opacity-80"
              >
                Resend OTP?
              </button>
            </div>
          </div>
          <div className="mt-1">
            <input
              id="otpToken"
              v-model="otpToken"
              name="otpToken"
              type="text"
              autocomplete="off"
              :class="{ 'border-red-500': v$.otpToken.$error }"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-[#EAEAEA] placeholder:text-gray-400 outline-none"
            />
            <span v-if="v$.otpToken.$error" className="text-red-500 text-xs">OTP is required</span>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#C32424] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus:outline-none"
          >
            Verify OTP
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
