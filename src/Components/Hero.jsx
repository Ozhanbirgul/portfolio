import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section p-5 bg-stone-300">
        <div className='container '>
            <div className="row">
                <div className="col-lg-4">
                    <div className="profile-card bg-gray-600  flex flex-col items-center rounded-[20px] p-4">
                        <img src="/src/images/profile.jpg" className='profile w-60 h-60 object-cover mb-4' alt="profile image" />
                        <div className="content">
                            <div className="title text-white text-3xl text-center">Birgül Özhan</div>
                            <div className="job-title text-center text-gray-400">Front-end Developer</div>
                            <div className="short-text text-white text-center mt-2 text-sm">
                                Sakarya Üniversitesi Matematik Bölümü mezunuyum. 1 yıldır bir ajans bünyesinde Front-end Developer olarak çalışıyor, kullanıcı odaklı arayüzler geliştiriyorum.
                            </div>
                            <ul className='p-3'>
                                <li className='text-white'>
                                    Mail: <a href="mailto:birgulozhan9@gmail.com" className='underline' target="_blank">birgulozhan9@gmail.com</a>
                                </li>
                                <li className='text-white'>
                                    Linkedin: <a href="https://www.linkedin.com/in/birgul-ozhan00/" className='underline' target="_blank">https://www.linkedin.com/in/birgul-ozhan00/</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="pro-box">
                        <img src="" alt="" />
                        <div className="content">
                            <div className="title"></div>
                            <div className="desc"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
