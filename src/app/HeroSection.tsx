import { NextPage } from 'next'


interface Props {}

const HeroSection: NextPage<Props> = ({}) => {
  return <div>
  <header>
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/icons/apple-touch-icon.png" className="h-8" alt="PIYACHAT  "/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PIYACHAT</span>
            </a>
            <div className="items-center justify-items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>




    <main>
    <section className="features"> 
        <div className="container mx-auto text-center">
            <h1 className="text-center text-4xl font-bold mb-8">Top 5 สัตว์เลี้ยง</h1>
            <h1 className="text-center text-4xl font-bold mb-8">ที่คนไทยนิยมเลี้ยง</h1>
            <p>ในประเทศไทย, ความนิยมในการเลี้ยงสัตว์เลี้ยงต่างๆ อาจมีความแตกต่างกันขึ้นอยู่กับสภาพแวดล้อมและวัฒนธรรมของแต่ละพื้นที่ แต่สัตว์ที่คนไทยนิยมเลี้ยงกันอย่างแพร่หลายที่สุด 5อันดับ ได้แก่</p>
            <button className="bg-gray-100 py-4 px-8 rounded-full">click it </button>
        </div>
    </section>
    
    <section className='features crt'>
            <div className='container'>
            <img className="w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GkJaiL6nC4Q2x_GJJioIE_MB3moPn5sVOppyOEuKf7B_XM9Sc5CXUXiDjTeyTgxWZ5c&usqp=CAU"/>
                <h2>แมว</h2>
                <ul>
                    <li>แมว (Cat): แมวเป็นสัตว์เลี้ยงที่คนไทยนิยมเลี้ยงอย่างกว้างขวาง เป็นสัตว์ที่น่ารักและเป็นมิตร แมวสามารถปรับตัวให้เหมาะสมกับสภาพแวดล้อมที่อยู่อยู่ได้ง่าย นอกจากนี้ยังมีพฤติกรรมที่น่าสนุกและน่าติดตามในการเลี้ยงดู</li>
                </ul>
            </div>
        </section>    
        <section className='features'>
            <div className='container'>
            <img className="w-96" src="https://petmaya.com/wp-content/uploads/2021/06/dog-memes-03.jpg"/>
                <h2>สุนัข</h2>
                <ul>
                    <li>สุนัข (Dog): สุนัขเป็นสัตว์เลี้ยงที่คนไทยนิยมเลี้ยงในบ้านอีกสัตว์หนึ่ง สุนัขมีความภูมิใจในความภักดีและจิตใจที่ดีของสัตว์เลี้ยงที่มีความภูมิใจในการปกป้องบ้านและคนในครอบครัว</li>
                </ul>
            </div>
        </section>
        <section className='features'>
            <div className='container'>
            <img className="w-96" src="https://www.meme-arsenal.com/memes/354b6886484634eecd82da56debb63fc.jpg"/>
                <h2>กระต่าย</h2>
                <ul>
                    <li>กระต่าย (Rabbit): กระต่ายเป็นสัตว์ที่น่ารักและเป็นมิตร มีขนนุ่มนวลและถูกใจคนที่ชอบสัตว์ที่น่ารัก การเลี้ยงกระต่ายในบ้านสามารถดูแลและซ่อมแซมที่พื้นที่จำกัดได้ง่าย</li>
                    </ul>
            </div>
        </section>
        <section className='features'>
            <div className='container'>
            <img className="w-96" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1140,h_800/https://shopee.co.th/blog/wp-content/uploads/2020/08/Shopee-Blog-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%8B%E0%B8%B4%E0%B8%A5%E0%B8%81%E0%B8%B5%E0%B9%89-%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81-1140x800.jpg"/>
                <h2>ไก่</h2>
                <ul>
                    <li>ไก่ (Chicken): Kanari น้อยคนที่จะนึกถึงไก่หากไม่ได้ชื่นชอบเป็นทุนเดิม แต่ไก่ที่การนำมาเลี้ยงเป็นไก่สวยงามในปัจจุบันก็มีอยู่หลายสายพันธุ์ ทั้งไก่ญี่ปุ่นขนทอง ไก่โปรแลนด์ หรือแม้แต่ไก่แจ้ไทย </li>
                    </ul>
            </div>
        </section> 
        <section className='features'>
            <div className='container'>
            <img className="w-96" src="https://e1.pxfuel.com/desktop-wallpaper/702/266/desktop-wallpaper-funny-hamsters-hamster-meme.jpg"/>
                <h2>แฮมสเตอร์</h2>
                <ul>
                    <li>แฮมสเตอร์ (Hamster): ใครที่กำลังริเริ่มอยากมีสัตว์เลี้ยงเป็นของตัวเอง แบบฉบับที่ไม่ต้องเปลืองพื้นที่ แถมยังเลี้ยงง่าย แต่ไม่รู้ว่าจะเลี้ยงอะไรดี เจ้าหนูแฮมเตอร์ สัตว์ฟันแทะที่ได้รับความนิยมอย่างมากอีกชนิดหนึ่ง ถือเป็นหนึ่งในสัตว์เลี้ยงตัวจิ๋วที่ตอบโจทย์ทั้งเลี้ยงง่ายแถมยังไม่ต้องใช้พื้นที่เยอะ</li>
                </ul>
            </div>
        </section>
    </main>
 


    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a className="flex items-center">
                  <img src="/icons/apple-touch-icon.png" className="h-8 me-3" alt="PIYACHAT" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PIYACHAT</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developers</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="-" className="hover:underline">Documentation</a>
                      </li>
                      <li>
                          <a href="_" className="hover:underline"> CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/piya231111/OPP-Project.git" className="hover:underline ">Social Media</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  className="hover:underline">PIYACHAT™</a>. Thanks
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://discord.gg/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="https://x.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/piya231111/OPP-Project.git" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


  </div>
}

export default HeroSection
