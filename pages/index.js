import Link from 'next/link';

export default function Index() {
  return (
    <>
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
 
          <a href="/" class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
            {/* <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg> */}
    
            MedBridge
          </a>
    
          {/* <nav class="hidden gap-12 lg:flex">
            <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
            <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
          </nav> */}
          
          <a href="./sellerPage" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Sign In</a>
    
          <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
    
            Menu
          </button>
        </header>
    
        <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            {/* <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p> */}
    
            <h1 class="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Accessible medicines, anytime, anywhere</h1>
    
            <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">MedBridge is a project that aims to promote access to medicines by facilitating the sharing of surplus medicines.
The idea behind the project is to reduce the waste of medications that are still safe and effective for use, while
also addressing the issue of accessibility of medicines for those who need them the most.</p>
    
            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="./buyerPage">
              <a  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Browse Medicines</a>
              </Link>
              <Link href="./sellerPage">
              <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Want to sell?</a>
              </Link>
            </div>
          </div>
       
          <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 ">
            <img src="https://inc42.com/wp-content/uploads/2023/02/Online-pharmacies-Feature-1024x768.png" loading="lazy" alt="Hero Image" class="h-full w-full object-cover object-center" />
          </div>
        
        </section>
      </div>
    </div>
   
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">What we provide?</h2>
    
          {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
        </div>
    
    
        <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
        
          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 419.102 22.106 C 407.334 24.227, 397.510 26.156, 397.272 26.394 C 397.034 26.632, 397.765 31.479, 398.896 37.164 C 403.039 57.991, 414.974 127.380, 414.993 130.750 C 414.997 131.456, 416.197 131.981, 417.750 131.957 C 421.570 131.896, 462.884 124.449, 463.651 123.683 C 464.122 123.211, 449.614 36.654, 446.397 20.750 C 445.692 17.264, 446.084 17.245, 419.102 22.106 M 245.810 172.009 C 210.643 176.289, 181.806 202.429, 173.374 237.671 C 171.002 247.586, 171.237 266.257, 173.861 276.198 C 182.240 307.957, 206.944 331.892, 238.370 338.703 C 247.511 340.684, 264.489 340.684, 273.630 338.703 C 288.182 335.549, 303.122 327.727, 313.700 317.722 C 357.294 276.493, 345.964 205.152, 291.744 179.464 C 278.269 173.080, 260.588 170.210, 245.810 172.009 M 221.455 206.455 C 219.907 208.002, 219 210.052, 219 212 C 219 213.948, 219.907 215.998, 221.455 217.545 C 223.782 219.873, 224.518 220, 235.639 220 C 245.506 220, 248.056 220.333, 251.701 222.097 C 254.084 223.251, 256.492 225.051, 257.052 226.097 C 258.035 227.933, 257.469 228, 240.990 228 C 224.188 228, 223.869 228.040, 221.455 230.455 C 218.207 233.702, 218.207 238.298, 221.455 241.545 C 223.869 243.960, 224.190 244, 240.955 244 C 250.330 244, 258 244.372, 258 244.826 C 258 246.297, 253.568 249.865, 249.768 251.452 C 247.224 252.515, 242.689 253.010, 235.282 253.032 C 224.078 253.065, 222.339 253.600, 220.163 257.684 C 217.930 261.878, 218.808 264.217, 224.768 269.951 C 259.482 303.348, 264.821 308, 268.436 308 C 273.118 308, 276 305.128, 276 300.461 C 276 296.478, 275.298 295.653, 257.973 279.257 L 247.447 269.295 251.973 268.088 C 261.659 265.504, 271.587 256.449, 274.163 247.850 L 275.317 244 281.704 244 C 287.152 244, 288.452 243.639, 290.545 241.545 C 292.093 239.998, 293 237.948, 293 236 C 293 234.052, 292.093 232.002, 290.545 230.455 C 288.462 228.371, 287.138 227.998, 281.795 227.990 L 275.500 227.980 273.824 223.990 L 272.149 220 280.120 220 C 287.250 220, 288.350 219.741, 290.545 217.545 C 292.093 215.998, 293 213.948, 293 212 C 293 210.052, 292.093 208.002, 290.545 206.455 L 288.091 204 256 204 L 223.909 204 221.455 206.455 M 69.746 383.943 C 58.331 385.996, 48.708 387.959, 48.361 388.305 C 47.716 388.951, 65.558 492.892, 66.471 493.805 C 67.009 494.343, 113.956 486.377, 114.714 485.620 C 114.959 485.374, 114.240 480.521, 113.114 474.836 C 110.475 461.505, 98.372 392.114, 97.488 385.250 C 96.830 380.138, 96.729 380.003, 93.656 380.105 C 91.920 380.163, 81.161 381.890, 69.746 383.943" stroke="none" fill="#04d4dc" fill-rule="evenodd"/><path d="M 390.495 41.484 C 379.305 50.601, 375.391 52.273, 365.500 52.164 C 361.100 52.115, 342.457 50.934, 324.070 49.538 C 305.684 48.142, 287.584 47, 283.849 47 C 273.353 47, 262.774 49.783, 251.725 55.452 C 241.891 60.498, 241.867 60.519, 194.443 106.921 C 148.211 152.156, 147.044 153.392, 148.749 155.312 C 153.992 161.216, 167.558 163.761, 175.928 160.412 C 178.111 159.539, 189.680 151.488, 201.637 142.522 L 223.377 126.220 226.187 130.099 C 229.837 135.138, 237.111 140.442, 243.934 143.040 C 253.667 146.747, 259.181 146.613, 285 142.042 C 317.929 136.213, 319.322 136.142, 332.553 139.621 C 342.196 142.157, 345.227 142.500, 358 142.500 C 370.388 142.500, 373.593 142.160, 380 140.164 C 389.829 137.103, 403.744 129.743, 409.424 124.601 L 413.953 120.500 412.944 115.500 C 412.389 112.750, 409.019 93.850, 405.454 73.500 C 401.889 53.150, 398.864 36.156, 398.731 35.735 C 398.599 35.314, 394.892 37.901, 390.495 41.484 M 221.455 206.455 C 219.907 208.002, 219 210.052, 219 212 C 219 213.948, 219.907 215.998, 221.455 217.545 C 223.782 219.873, 224.518 220, 235.639 220 C 245.506 220, 248.056 220.333, 251.701 222.097 C 254.084 223.251, 256.492 225.051, 257.052 226.097 C 258.035 227.933, 257.469 228, 240.990 228 C 224.188 228, 223.869 228.040, 221.455 230.455 C 218.207 233.702, 218.207 238.298, 221.455 241.545 C 223.869 243.960, 224.190 244, 240.955 244 C 250.330 244, 258 244.372, 258 244.826 C 258 246.297, 253.568 249.865, 249.768 251.452 C 247.224 252.515, 242.689 253.010, 235.282 253.032 C 224.078 253.065, 222.339 253.600, 220.163 257.684 C 217.930 261.878, 218.808 264.217, 224.768 269.951 C 259.482 303.348, 264.821 308, 268.436 308 C 273.118 308, 276 305.128, 276 300.461 C 276 296.478, 275.298 295.653, 257.973 279.257 L 247.447 269.295 251.973 268.088 C 261.659 265.504, 271.587 256.449, 274.163 247.850 L 275.317 244 281.704 244 C 287.152 244, 288.452 243.639, 290.545 241.545 C 292.093 239.998, 293 237.948, 293 236 C 293 234.052, 292.093 232.002, 290.545 230.455 C 288.462 228.371, 287.138 227.998, 281.795 227.990 L 275.500 227.980 273.824 223.990 L 272.149 220 280.120 220 C 287.250 220, 288.350 219.741, 290.545 217.545 C 292.093 215.998, 293 213.948, 293 212 C 293 210.052, 292.093 208.002, 290.545 206.455 L 288.091 204 256 204 L 223.909 204 221.455 206.455 M 335.806 351.636 C 333.774 352.479, 322.327 360.507, 310.367 369.475 L 288.623 385.780 285.813 381.901 C 282.163 376.862, 274.889 371.558, 268.066 368.960 C 258.333 365.253, 252.819 365.387, 227 369.958 C 194.071 375.787, 192.678 375.858, 179.447 372.379 C 169.804 369.843, 166.773 369.500, 154 369.500 C 141.612 369.500, 138.407 369.840, 132 371.836 C 122.142 374.906, 108.232 382.272, 102.609 387.399 L 98.112 391.500 105.428 432.500 C 109.452 455.050, 112.915 474.300, 113.122 475.278 C 113.428 476.715, 115.032 475.803, 121.500 470.515 C 132.883 461.208, 136.346 459.719, 146.335 459.832 C 150.826 459.883, 169.543 461.066, 187.930 462.462 C 206.316 463.858, 224.223 465, 227.722 465 C 238.454 465, 248.544 462.394, 259.831 456.706 L 270.162 451.500 317.579 405.076 C 363.754 359.867, 364.949 358.600, 363.247 356.684 C 362.286 355.602, 359.250 353.660, 356.500 352.368 C 350.579 349.587, 341.516 349.267, 335.806 351.636" stroke="none" fill="#f1c69e" fill-rule="evenodd"/></svg>
            </div>
    
            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Affordability</h3>
              <p class="mb-2 text-gray-500">Aims to address the issue of affordability of
               medicines by allowing individuals to donate their unused medicines. This provides a way for individuals to
              access medications at a lower cost.</p>
            </div>
          </div>
    

          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
            <img src="https://media.rootedinrights.org/wp-content/uploads/2019/01/15232720/Access.png" />
            </div>
    
            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Accessibility</h3>
              <p class="mb-2 text-gray-500">To ensure the medicines are available to those who need them the most, we allow individuals to buy unused medicines from households.</p>
            </div>
          </div>
  
       
          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
            <img src="https://t3.ftcdn.net/jpg/05/93/06/96/360_F_593069608_79rsQXqlaar18zOzbd7VObQxQHNTXn8X.jpg" />
            </div>
    
            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Unused Medicines</h3>
              <p class="mb-2 text-gray-500">Individuals can easily donate their unused medicines on our platform</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Trusted by the best</h2> */}
    
        
      </div>
    </div>
    
    <div class="bg-white py-6 sm:py-8 lg:py-12 mb-2">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>
    
          {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
        </div>
    
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img src="https://pbs.twimg.com/profile_images/1578055270747734016/1VqJrL0c_400x400.jpg" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
            </div>
    
            <div>
              <div class="text-center font-bold text-indigo-500 md:text-lg">Soumava Das</div>
              <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">UI/UX Designer</p>
    
             
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="https://www.linkedin.com/in/soumava-d-634820196/" target="https://www.linkedin.com/in/soumava-d-634820196/" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
    
                  <a href="https://twitter.com/Soumava_221B" target="https://twitter.com/Soumava_221B" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
            </div>
    
            <div>
              <div class="text-center font-bold text-indigo-500 md:text-lg">Kate Berg</div>
              <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CFO</p>
    
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
    
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
       
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
            </div>
    
            <div>
              <div class="text-center font-bold text-indigo-500 md:text-lg">Greg Jackson</div>
              <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CTO</p>
    
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
    
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" class="h-full w-full object-cover object-center" />
            </div>
    
            <div>
              <div class="text-center font-bold text-indigo-500 md:text-lg">Robert Greyson</div>
              <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Creative Director</p>
    
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
    
                  <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  
    <div class="bg-gray-900">
      <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div class="col-span-full lg:col-span-2">
            <div class="mb-4 lg:-mt-2">
              <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
                {/* <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg> */}
    
                MedBridge
              </a>
            </div>
    
            <p class="mb-6 text-gray-400 sm:pr-8">Accessible medecines, anytime, anywhere</p>
    
            <div class="flex gap-4">
    
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            
          </div>
       
          {/* <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
              </div>
            </nav>
          </div> */}
        
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
              </div>
    
            </nav>
          </div>
        
    
          
        </div>
    
        <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2023 - Present MedBridge. All rights reserved.</div>
      </footer>
    </div>
    
   </>
  );
}
