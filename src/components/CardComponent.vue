<script>
import card1 from '@/assets/card1.png'
import card2 from '@/assets/card2.png'
import card3 from '@/assets/card3.png'

export default {
  name: 'CardComponent',

  setup() {
    return {
      card1,
      card2,
      card3
    }
  }
}
</script>

<template>
  <div className="w-full xl:w-2/3 m-auto pb-10">
    <div className="mb-10 flex justify-center">
      <h2 className="text-3xl font-bold text-[#C32424]">Donate Now</h2>
    </div>
    <div className="w-full p-2 xl:p-0 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
      <div className="card glass">
        <figure>
          <img :src="card1" alt="card1" className="w-full h-32 md:h-56 object-cover" />
        </figure>
        <div className="card-body p-2 bg-[#FFFFFF]">
          <h2 className="card-title text-lg md:text-xl font-bold text-[#000000]">
            The Strength of a People. Power of Community
          </h2>
          <p className="mb-3 text-xs md:text-sm font-normal text-start text-[#616161]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
          </p>
          <progress
            className="progress progress-error w-full mb-3 bg-[#C4C4C4]"
            value="70"
            max="100"
          ></progress>
          <div className="card-actions flex justify-between items-center">
            <p className="text-xs md:text-sm font-bold text-start text-[#000000]">Rp 25.000.000</p>
            <button
              className="px-3 py-1 rounded-md text-xs md:text-sm font-semibold text-center text-[#FFFFFF] bg-[#C32424]"
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      <div className="card glass">
        <figure>
          <img :src="card2" alt="card2" className="w-full  h-32 md:h-56 object-cover" />
        </figure>
        <div className="card-body p-2 bg-[#FFFFFF]">
          <h2 className="card-title text-lg md:text-xl font-bold text-[#000000]">
            The Strength of a People. Power of Community
          </h2>
          <p className="mb-3 text-xs md:text-sm font-normal text-start text-[#616161]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
          </p>
          <progress
            className="progress progress-error w-full mb-3 bg-[#C4C4C4]"
            value="70"
            max="100"
          ></progress>
          <div className="card-actions flex justify-between items-center">
            <p className="text-xs md:text-sm font-bold text-start text-[#000000]">Rp 25.000.000</p>
            <button
              className="px-3 py-1 rounded-md text-xs md:text-sm font-semibold text-center text-[#FFFFFF] bg-[#C32424]"
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      <div className="card glass">
        <figure>
          <img :src="card3" alt="card3" className="w-full  h-32 md:h-56 object-cover" />
        </figure>
        <div className="card-body p-2 bg-[#FFFFFF]">
          <h2 className="card-title text-lg md:text-xl font-bold text-[#000000]">
            The Strength of a People. Power of Community
          </h2>
          <p className="mb-3 text-xs md:text-sm font-normal text-start text-[#616161]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
          </p>
          <progress
            className="progress progress-error w-full mb-3 bg-[#C4C4C4]"
            value="70"
            max="100"
          ></progress>
          <div className="card-actions flex justify-between items-center">
            <p className="text-xs md:text-sm font-bold text-start text-[#000000]">Rp 25.000.000</p>
            <button
              className="px-3 py-1 rounded-md text-xs md:text-sm font-semibold text-center text-[#FFFFFF] bg-[#C32424]"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
