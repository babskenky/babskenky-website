import React from 'react';
import './about.css'

let styles = {
    paralax:{background:"url('../img/IMG_8275.JPG')",backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center 30%',backgroundAttachment: 'fixed',color:'white'},
    paralaxText:{maxWidth:'80%',margin:'auto',textAlign:'center',color:'white',marginTop:'15px'},
    paralax3:{background:"#9e7d39",color:'white'},
    paralax2:{background:"url('../img/IMG_0737.JPG')",backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center 30%',backgroundAttachment: 'fixed',color:'white'},

}

const About = () => {

    return(

        <div>
            <header id="home" className="home">
                <div className="overlay-img">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="ab-home-content">
                                    <h1>Why am on a <span>mission</span> to change the world, <span>one person </span>at a time </h1>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

    
            <section id="about" className="sections" >

                <div className="ab-heading-content text-left">

                    <h3 style={{margin:"0 auto",width:"80%"}}>About Baba</h3>

                    <div className="separator2" ></div>

                   <p>Baba Nureni-Yusuf, often called babskenky is an author, life-coach, mentor, global traveller, digital media expert, internet and new economy entrepreneur, and public speaker specializing in digital economy strategy, digital marketing, mind-set and wealth creation. </p>
                <br/>
                    <p>He began his journey in Lagos, Nigeria. He studied computer engineering at Obafemi Awolowo University, Ile-Ife. Upon graduated, we was one of the hand selected talent at  been a columnist and a blogger for reputable newspapers and global platforms. With over fifteen years of experience working Corporate Strategy, Marketing and Sales in three different continents - Africa, Europe and North America for some of the worlds biggest global multinational corporation, Baba set up his first company in 2000 promoting products for a multi-level marketing franchise.</p>
                </div>
            </section>

            <section >

                <div className="about-bg">
                    <div className="container-fluid no-pd" style={styles.paralax}>

                        {/* Example row of columns */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="about-content text-center">

                                    <h3>Babskenky</h3>
                                    <div className="separator" style={{background: "white"}}></div>
                                    <p style={styles.paralaxText}>This company was formed after having phenomenal individual success in generating income from a variety of multi-level marketing networks. For example, during his first year, Baba bought his first car from his part time gig selling products.
Baba is highly regarded in the online marketing community for his unique insights into mind-set and social media digital marketing.
                                    </p>
                                       <p  style={styles.paralaxText}> This allows him to provide a perspective that provides outstanding clarity to his audiences with clear, actionable takeaways.
Baba is a highly sought-after, international speaker - he has visited over 35 countries.
                                       </p>
<p  style={styles.paralaxText}>Baba will teach you cutting-edge techniques in mastering social media to optimize how you, or your business, can make the absolute most out of the social media phenomenon.
99 things I learned from my mentors teaches you that, regardless of your experience, you can be making money using social media. Discover how to use Facebook, Twitter, and Instagram to access billions of people every single day. Generate thousands of followers and learn the cutting edge techniques to mastering social media and create a job-replacing income.
Instead of being a social media user, you are the target of marketing messages 24 hours a day, 7 days a week, you will become a social media content creator, you could be making money and changing your life instead, all through harnessing the power of social media.
Imagine logging onto Facebook in the morning to find out how much money it made you last night. How much better would that make your social media experience?
    Stop wasting time. Start earning money. Now is the time to make the new economy work for you !
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section id="about" className="sections" >

                <div className="ab-heading-content text-left">

                    <h3 style={{margin:"0 auto",width:"80%"}}>achieve your financial and personal freedom
                    </h3>

                    <div className="separator2" ></div>

                    <p>A blueprint to financial freedom-The event that changed my life and could change yours too!

                        Do you know that you can create the lifestyle you have always dreamed about?  Everyone fantasizes about getting out of the 9-5 rat race and finally becoming financially free but unfortunately, not everyone achieves this dream.  Just like a lot of people, I was also stuck in this tiring cycle until I found the most valuable piece of information that would change my life forever and drive me to do what I am passionate about while living life on my own terms.
                        I’ll tell you about a system that changed my life, but first let me ask you something …<br/>
                        Do you want to visit tropical locations?
                        Do you want to travel the world, and enjoy experiences like …<br/>
                        … visiting Machu Picchu<br/>
                        … taking a stroll on New York Broadway<br/>
                        … swimming with dolphins<br/>
                        … watching soccer games at iconic stadiums such as - Nou Camp, Emirate Stadium<br/>
                        … and meeting new, exciting people in new, exciting locations?<br/>
                        And do you want all of this while having an online business that brings in money while you travel?
                        Well, it is possible, and I’m living proof.
                    </p>

                    <br/>
                   <p>If anyone had told me less than a year ago that i would be able to decide exactly what I do with my time while enjoying all of life’s luxuries and achieving financial success by simply taking a bold decision, I would probably have thought that they were delirious.</p>
<br/>
                    <p>But Here I am today, planning family vacations, attending business summits, networking with some of the greatest masterminds, and best of all, having all the time in the world to spend with my beautiful wife and loving daughter without having to answer to a boss who decides my earning potential or the fate of my career.</p>
                </div>
                <div style={{margin:"0 auto",width:"80%"}}>
                    <img src='/img/IMG_4970.JPG' style={{width:'70%'}}/>
                </div>

            </section>

            <section >

                <div className="">
                    <div className="container-fluid no-pd" style={styles.paralax2}>

                        {/* Example row of columns */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="about-content text-center">

                                    <h3>Don’t get me wrong!</h3>
                                    <div className="separator" style={{background: "white"}}></div>
                                    <p style={styles.paralaxText}>
                                        I was once a dedicated employee with an outstanding record but I had always known deep within me that this was not the path that would offer me and my family the life that we deserved. I worked hard day and night and led initiatives that brought millions in revenues to the company’s top line growth. Not only was I a committed employee, I was focused too.
                                    </p>

                                        <p  style={styles.paralaxText}>
                                            As an American immigrant, I was the perfect success story. After getting an engineering degree back home, I had obtained an additional master’s degree in finance and an MBA in the states to add to my list of competencies. I was well-trained, hard working and highly educated.
                                        </p>
                                    <p  style={styles.paralaxText}>
                                        I had persuaded my wife to do the same and even though we had thousands of dollars in student loans, we were positive about our potential and our top notch jobs and careers were definitely the stuff dreams were made off.

                                        But this didn’t last.
                                    </p>
                                    <p  style={styles.paralaxText}>
                                        I started to spend more time with my wife and daughter, learning new things about true happiness, being able to attend important events like my daughter’s swimming lessons and having the opportunity to kiss my wife goodbye on her way to work. This was definitely shaping up to be some of the happiest moments of my life but there was something missing! I needed to engage myself more!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section id="about" className="sections" >

                <div className="ab-heading-content text-left">

                    <h3 style={{margin:"0 auto",width:"80%"}}>You’re probably wondering how I turned all of this around.
                    </h3>

                    <div className="separator2" ></div>
<p>
    I was invited to a free business seminar in my city and even though I almost turned down the invitation, I simply summoned up the courage to go as my desire for self-improvement has always been persistent. This was undoubtedly the most important occurrence in my life that turned things around.
    <br/>
    Meeting the guest speaker who eventually ended up being my mentor was the life-changing encounter that put me on my current earth shattering trajectory. Surprisingly, my breakthrough didn’t come from any of my fancy degrees; neither did it come from my marketing skills but rather from digging deep into the core human ideals of love, family commitment and providing great value and knowledge to people.
    <br/>
    The progress was breathtaking! In less than six months, I successfully replaced my six figure job with an income that was much better, but that wasn’t even the upside. For the first time in forever, I had all the time in the world to pay attention to my daughter, eat dinner with my family, watch movies with my wife and talk about her day while having an income that my previous job could never offer me.
    <br/>
    In my time on this journey as an internet marketing entrepreneur, I have learnt some really pivotal lessons. I learnt the importance of hard work, the benefits of providing great value to your audience and the power of investing in yourself which all started from a free business seminar that I was sceptical about attending.
</p>
                    <br/>
<p>
    In my experience as a successful internet entrepreneur, I have come to realise that although people are highly interested in working hard, they do not always have access to the right kind of information.
</p>
                    <br/>
                    <p>

                        The kind of information that teaches you exactly how to put yourself in the right position, and when to take action to achieve your dreams, I learnt why it was important to meet the right people and through my mentor I was able to slowly build up a strong system with a powerful virtual team around the world.

                    </p>
                    <br/>
                    <p>
                        Teaching people that you do not always need that “ideal job”, a business or a career to be able to live your best life is one thing, but this lesson is not complete if you do not show them what exactly they need to do to live the lifestyle that they want.
                    </p>
                    <br/>
                    <p>
                        These are the practical and hands-on information I have provided at my seminars and have had the opportunity to mentor several others who are crushing it in life.
                        <br/>
                        It is this same model that I have learnt that turned me from an employee to an employer, the same knowledge I have gained and most importantly, the same system I have replicated successfully with several of my trainees that I want to help you develop.
                    </p>
         </div>
            </section>

            <section >

                <div className="about-bg">
                    <div className="container-fluid no-pd" style={styles.paralax3}>

                        {/* Example row of columns */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="about-content text-center" style={{background:'none'}}>

                                    <h3>get out of the rat-race</h3>
                                    <div className="separator" style={{background: "white"}}></div>
                                    <p style={styles.paralaxText}>
                                        I want to show you how you can get out of the rat-race and find joy doing something you truly want with your life while developing your own financial freedom. It is time to get out of those limiting beliefs and find joy doing something you are passionate about, spend more time with your family, travel the world, enjoy the true reward of hard work and decide exactly what money means to you.

                                    </p>
                                        <p  style={styles.paralaxText}>
                                            I invite you to join me and learn the entire secret upon which I have built my success with no obligation.My passion is to transfer this knowledge and to continue to replicate this knowledge with individuals that are willing to earn their own freedom. After all, if I can do this, then you definitely can!
                                        </p>
                                            <p  style={styles.paralaxText}>Why struggle to make ends meet when you can empower yourself and know exactly how to take action.

                                                Join me by filling this application and be the next one to rise above your worries and set your own life schedules.

                                            </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

    {/* Sections */}
    <section id="twitter" className="sections different-bg">
        <div className="container text-center">

            {/* Example row of columns */}
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <div className="twitter-content">
                        <h5>CLICK HERE NOW TO REGISTER FOR YOUR 21 STEPS TRAINING THAT CHANGED MY LIFE!</h5>

                    </div>
                </div>

                <div className="col-md-4 col-sm-12 col-xs-12">
                    <a target="_blank" href="http://mobilesuccesstraining.com/letterh-a-1/?aff_id=3071558"> <div className={'ab-register-button'}>REGISTER</div></a>
                </div>
                </div>

            </div> {/* /container */}
    </section>

         </div>
    )
}

export default About