<script>
import image1 from '@/assets/image1.png'

export default {
  name: 'Carausel1Component',

  setup() {
    return {
      image1
    }
  }
}
</script>

<template>
  <div className="min-w-full mt-20">
    <div className="carousel w-full h-500 mb-12">
      <div
        className="carousel-item w-full h-370 flex flex-col-reverse md:flex-row bg-[#C32424] pt-32 md:pt-8 z-10"
      >
        <div className="w-full md:w-3/4">
          <h1
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-40 lg:pr-32 text-lg md:text-3xl font-bold text-[#E8E8E8]"
          >
            While you are still standing, try to reach out to the people who are falling.
          </h1>
          <p
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-60 lg:ml32 text-xs md:text-base font-normal text-start text-[#E8E8E8]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="m-0 md:ml-48 lg:ml-32 p-2">
            <button className="px-4 py-2 rounded-md font-semibold text bg-[#E8E8E8] text-[#C32424]">
              Donate Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2 md:p-0">
          <img :src="image1" alt="image-title" className="w-1/2 md:w-full h-56 md:h-auto" />
        </div>
      </div>
      <div
        className="carousel-item w-full h-370 flex flex-col-reverse md:flex-row bg-[#C32424] pt-32 md:pt-8 z-10"
      >
        <div className="w-full md:w-3/4">
          <h1
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-40 lg:pr-32 text-lg md:text-3xl font-bold text-[#E8E8E8]"
          >
            While you are still standing, try to reach out to the people who are falling.
          </h1>
          <p
            className="mb-3 m-0 md:ml-48 lg:ml-32 p-2 md:pr-60 lg:ml32 text-xs md:text-base font-normal text-start text-[#E8E8E8]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="m-0 md:ml-48 lg:ml-32 p-2">
            <button className="px-4 py-2 rounded-md font-semibold text bg-[#E8E8E8] text-[#C32424]">
              Donate Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2 md:p-0">
          <img :src="image1" alt="image-title" className="w-1/2 md:w-full h-56 md:h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>
