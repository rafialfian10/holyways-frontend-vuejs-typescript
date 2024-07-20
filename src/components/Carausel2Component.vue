<script>
import image2 from '@/assets/image2.png'

export default {
  name: 'Carausel2Component',

  setup() {
    return {
      image2
    }
  }
}
</script>

<template>
  <div className="min-w-full m-0 md:-mt-44 mb-10">
    <div className="carousel w-full h-600 ">
      <div className="carousel-item w-full h-400 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-2 md:p-0 z-10">
          <img :src="image2" alt="image-title" className="w-1/2 md:w-full h-56 md:h-auto" />
        </div>
        <div className="w-full md:w-3/4 p-0 md:pt-24">
          <h1
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-40 lg:pr-32 text-lg md:text-3xl font-bold text-[#000000]"
          >
            Your donation is very helpful for people affected by forest fires in Kalimantan.
          </h1>
          <p
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-60 lg:pr-32 text-xs md:text-base font-normal text-start text-[#000000]"
            style="column-count: 2; column-gap: 20px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <div className="m-0 md:ml-48 lg:ml-32 p-2">
            <button className="px-4 py-2 rounded-md font-semibold text bg-[#C32424] text-[#E8E8E8]">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="carousel-item w-full h-400 flex flex-col md:flex-row bg-[#FFFFFF]">
        <div className="w-full md:w-1/4 p-2 md:p-0 z-10">
          <img :src="image2" alt="image-title" className="w-1/2 md:w-full h-56 md:h-auto" />
        </div>
        <div className="w-full md:w-3/4 p-0 md:pt-24">
          <h1
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-40 lg:pr-32 text-lg md:text-3xl font-bold text-[#000000]"
          >
            Your donation is very helpful for people affected by forest fires in Kalimantan.
          </h1>
          <p
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-60 lg:pr-32 text-xs md:text-base font-normal text-start text-[#000000]"
            style="column-count: 2; column-gap: 20px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <div className="m-0 md:ml-48 lg:ml-32 p-2">
            <button className="px-4 py-2 rounded-md font-semibold text bg-[#C32424] text-[#E8E8E8]">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
