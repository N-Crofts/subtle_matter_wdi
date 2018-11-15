import React from 'react'
import { Carousel } from 'react-bootstrap'
import SubtleNav from './Navbar.js'
import improv from '../soundclips/piano_improv.flac'
import horse from '../soundclips/horse_passing_by.wav'
import unlock from '../soundclips/unlock_door.wav'
import laugh from '../soundclips/laugh.wav'
import storm from '../soundclips/storm.wav'
import thunder from '../soundclips/thunderclap.wav'
import door from '../soundclips/door_knock.wav'
import $ from 'jquery'

const styles = {
    fontFamily: "Work Sans",
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 17,
    letterSpacing: 1
}
const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
}
const rightStyles = {
    padding: 20,
    marginRight: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-10%,-50%)"
}
const leftStyles = {
    padding: 20,
    position: "absolute",
    maxWidth: 700,
    top: "50%",
    left: "30%",
    transform: "translate(-60%,-50%)"
}
const picInsideLeft = {
    padding: 18,
    paddingLeft: 40
}
const picInsideRight = {
    padding: 18,
    paddingLeft: 730
}

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault()  
        let hash = this.hash 
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 10000, function() { 
            window.location.hash = hash
        })
      } 
})

const videos = document.getElementsByTagName('video')    
const checkScroll = () => { 
    for(let i = 0; i < videos.length; i++) {   
        const video = videos[i]   
        const x = video.offsetLeft 
        const y = video.offsetTop
        const w = video.offsetWidth 
        const h = video.offsetHeight 
        const r = x + w 
        const b = y + h 
        let visibleX 
        let visibleY 
        let visible                    
            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - y, r - window.pageXOffset))
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - x, b - window.pageYOffset))
            visible = visibleX * visibleY / (w * h)                  
              if ((visible) && (video.played.length === 0)) {
                video.play()
              }                       
    }    
}    
window.addEventListener('scroll', checkScroll, false)
window.addEventListener('resize', checkScroll, false)

export default class SubtlePages extends React.Component {
    constructor(props, context) {
        super(props, context); 
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null
        }
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        })
        window.scrollTo(0, 0)
    }
     
    render() {
      const { index, direction } = this.state;  
      return (
        <div>
          <SubtleNav />
          <div style={styles}>
            <Carousel 
              id="carousel-1"
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >

              <Carousel.Item>
                <div class="slide" style={{ height: 700 }}>
                  <div style={insideStyles}>
                  <div class="slide">
                    <div class="ib">
                      <div class="text-flicker-in-glow-subtle">
                        <h1>SUBTLE</h1>
                      </div>
                      <div class="text-flicker-in-glow-matter">
                        <h1>MATTER</h1>
                      </div>
                    </div>
                    <div class="text-focus-in" id="aShortStory">
                      <h5>a short story</h5>
                    </div>
                      <div class="text-focus-in" id="byNicholasCrofts">
                      <h5>by Nicholas Crofts</h5>
                      </div>
                  </div>   
                  </div>     
                </div>         
              </Carousel.Item>
         
              <Carousel.Item>   
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" id="textPageTwo" style={rightStyles}>
                    <div class="text-focus-in">
                      <div class="paraRight">
                        <p>Theres's a memory. I'd say it's a memory of my birth, but the idea of 'birth' seems too ordinary, too simplified. What I speak of is far more questioning of the ideas you may have of the nature of life, of existence, of purpose. And if you're prepared to respect such a claim, allow me to put it so:</p>
                        <p><i>I can recall, with perfect detail, the precise moment I emerged from nothing.</i></p>
                        <p>Curious? Then let me tell you of that memory and what stirred me into being, and, if time permits, the days of wonder and dread that would follow.</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-focus-in">
                    <img id="imageTwo" src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3058744-inline-8-the-golden-ratio-gets-its-own-coloring-book.jpg" alt="golden ration"></img>
                  </div>    
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <video id="video">
                  <source src={horse} />
                </video>
                <div style={{ height: 570 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <div class="text-focus-in">
                      <p>Like many things, it began with a sound. That's all. A simple repetition.</p> 
                      <p>And I awoke to meet it.
                        <a href="#scrollOne">
                          <img 
                            id="button" 
                            className="blink" 
                            src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                            alt="golden ratio">
                          </img>
                        </a>
                      </p> 
                      <p>My awareness burst, swarming outward in all directions. So unknown and intriguing; a knocking of hoof against cobblestone. Still far off, its approach would incite my first brush with fear. In just moments, though, the noise had passed, trailing off, and although I had just been afraid, I found myself stung by a sudden loneliness, and I begged for that tingling rattle to find its way back to me. I hadn't eyes to witness, no voice to call out to it. Even today I'm still unsure as to what sort of miracle allowed me to take in the clamor of the world around me, or why I was given this gift before any other. Maybe it was nature's way of conditioning me, preparing me for the burden to come.</p>                      
                    </div>
                  </div>
                  <div id="scrollOne"></div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <video id="video">
                  <source src={unlock} />
                </video>
                <div style={{ height: 570 }}>
                  <div class="text-shadow-drop-bl" style={leftStyles}>
                    <div class="paraLeft">              
                      <p>Minutes passed, or hours. I can't be certain. Another encounter came in the form of a rattle, a clicking, and a turning; a distinction I'd later recognize as the unlocking of the door to that room. Soon there were footsteps, two pairs, not as unnerving as the horse's stride from earlier, yet still punding the hardwood with intent. I waited. The floor creaked. The door fell shut.</p>
                    </div>
                  </div>
                  <div style={picInsideRight}>
                    <img 
                      class="storyImageLight" 
                      id="imageThree" 
                      src="https://ksr-ugc.imgix.net/assets/005/319/411/af8a1e4706417fb4ff116f523217efbc_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1454844185&auto=format&gif-q=50&q=92&s=16fbdeda383a43c1f46c92897bff04bb" 
                      alt="golden ration">
                    </img> 
                  </div>       
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 800 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>Then, in an event that would mark my first moment of joy—my guests spoke. Their sounds rippled through the air. Their vibrations warmed me. I felt a surge as my existence became apparent. In an instant I knew I was something that was no longer nothing. Quickly, I filled with wants and needs, and the unyielding desire to continue on, to experience, to live. If it’s true that consciousness denotes the presence of a soul, then I imagine mine was soaring the moment I heard those voices. Such strange concept. Words. Language. Thoughts and ideas vocalized, swirling together through waves, refining the very nature of sound itself. It was all so perfect.</p>
                    <p>“There,” one man said. “There it is. Incredible, isn’t it?”</p>
                    <p>“I . . . I’m at a loss.”</p>
                    <p>“Indeed.”</p>
                    <p>“No, Mr. Hoyt. I’m afraid you misunderstand me. What exactly am I looking at? It looks to be a lump of mechanical rubbish.”</p>
                    <p>“Well, it may appear as such upon first glance, Mr. Adler. But here, do you see this pattern?”</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item >
                <div style={{ height: 800 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>“A spiral?”</p>
                      <p>“Precisely. It began as a point right here in the center. Originally just a collection of parts culled from a wireless telegraph and a Gramme dynamo, piled on top a magnetic plate. As only a diversion, I began meddling with a resonant transformer; an attempt to alter the magnetism of the scrap through alternating currents. I was only toying around, I assure you. But a week later I happened to notice the parts had been rearranged, organized, condensed into a single point.”</p>
                      <p>I remember it clearly now, how I found it so captivating. Like my perception of those horse hooves, and the footsteps afterward—I began to sense patterns in their conversation, even after just a few moments. The subtle pauses between words. The variation in tone between questions and statements. Some elements described actions, others described people and things. The more they spoke the more I understood.</p>
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageLight" 
                      id="imageFour" 
                      src="http://static.wixstatic.com/media/9b7452_39630b3912624c4c9951f143c3f6a07e.jpg/v1/fill/w_629,h_747,al_c,q_85,usm_0.66_1.00_0.01/9b7452_39630b3912624c4c9951f143c3f6a07e.webp" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>“Naturally,” Mr. Hoyt continued, “I assumed my assistant was responsible. I confronted him, though he denied any rummaging about my work. This angered me, and I began locking the door to this study in an effort to deter any more intrusions. And yet, each morning I would find the scrap had changed, grown, further molding itself into a spiral, like a conch shell built of gears, wires, and bronze hinges. As unlikely as it may seem, this had to be occurring without assistance.”</p>
                    <p>“Do you mean to say this thing is alive?” Mr. Adler asked.</p>
                    <p>“I’ve found no other explanation.”</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>“That’s rather impossible.”</p>
                        <p>“Is it? Has our philosophy not prepared us for this? Has it not lured us toward a conclusion marked by this very pattern?” Mr. Hoyt’s voice trailed as he walked away. Later, I would deduce he’d made his way over to his blackboard. “Consider this sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21. Separate the sequence into sets of three numbers, and clearly the third of each set equals to the sum of the first two. Hardly compelling, I realize, but when plotted we see the distinct Golden Spiral emerge before us.”</p>
                        <p>“Yes, I’ve read Lucas’ work on Fibonacci numbers; even the most remedial student has. But how does this lead an otherwise educated mind to consider spontaneous generation?”</p>        
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageDark" 
                      id="imageFive" 
                      src="http://copadirecta.me/wp-content/uploads/2018/05/golden-ratio-coloring-book-rafael-araujo-artist-golden-ratio-colouring-book-rafael-araujo.jpg" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>“Because this design is ingrained into nature itself. Typhoons, whirlpools, the shells of the tiniest snails, the arrangement of hair growing at the crowns of our heads. Secrets are revealed at every turn. Even the cosmos obey this pattern. An astronomer in Ireland, Lord Rosse, has built a massive telescope, a monstrosity called <i>Leviathan</i>. Through its lens he’s observed, in the deepest unknown, spiral nebulae. This cannot be coincidence. I ask, what if this is the most basic of natural processes? What if this spiral announces the beginning of life?”</p>
                    <p>“Fine,” the other submitted, his words raised in pitch. “But despite its significance, I assure you that living things require sustenance. A child grows through nutrition, air, and water. Matter doesn’t simply come from nothing.”</p>
                    <p>“And what of crystals?” Mr. Hoyt stammered and paced the floor. I grew nervous. “Things that grow alone through nucleation, through ... through chemical reaction?”</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>“Which chemicals, fool!”</p>
                    <p>Mr. Adler yelled. His sound no longer melodic, no longer soothing to me. Though at the time I couldn’t fully comprehend the point of their discussion, their emotions were exceptionally clear. Mr. Hoyt was frantic, desperate. It was clear that things hadn’t gone the way he had hoped.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <video id="video">
                  <source src={laugh} />
                </video>
                <div style={{ height: 570 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>Mr. Adler soon let out another sound, something strange and chaotic, something not following the ebb and flow of words. I would eventually come to know it as laughter. And even though laughter should signify joy, it can also be used as mockery, as a verbal hammer against the dreams of its target.
                      <a href="#scrollThree">
                        <img 
                          id="button" 
                          className="blink" 
                          src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                          alt="blue button">
                        </img>
                      </a>
                    </p>
                    <div id="scrollThree"></div>
                    <p>“All you have, Hoyt, are scraps of metal and wires you’ve bombarded with unmeasured voltage. There are no observable reactions to speak of.” Adler stormed away. The door creaked open. “I wish you’d have told me what was so enchanting to you before I bothered to come down here. Nevertheless, you’ve given me a good laugh today, Hoyt. I can’t wait to share this little discovery of yours with more serious academians.” He mumbled something else as the door slammed shut.</p>
                  </div>        
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={leftStyles}>
                    <div class="paraLeft">
                      <p>The room remained quiet for several moments. A relief as the argument had disturbed me. Though eventually, I began wondering, concerned about Mr. Hoyt. I listened for his footsteps, for any movement. He offered nothing.</p>
                      <p>At last I heard a shuffling over to me. He knelt close and sighed. His breath tingled, warm currents pushed against me. “I‘m no fool,” he whispered. “But perhaps he was right about one thing. After all, growing children need sustenance, wouldn‘t you agree?”</p>
                    </div>
                  </div>
                  <div style={picInsideRight}>
                    <img 
                      class="storyImageDark" 
                      id="imageSix" 
                      src="http://mediad.publicbroadcasting.net/p/kplu/files/styles/medium/public/201510/Energy-Spiral.jpg" 
                      alt="golden ration">
                    </img>
                  </div>       
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 800 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>In time, though I couldn’t move voluntarily, Mr. Hoyt never doubted I was indeed alive. The extent of my sentience though, would still go unnoticed. Even so, he treated me as if I were a son, speaking to me, even reading to me from his vast library. I absorbed the classics, each and every word. I indulged in an endless supply of mental stimulation.</p>
                    <p>He explained that I was no longer simply a spiral, but rather a series of them. He compared my design to that of a yellow chamomile flower, of which he had obtained for inspiration and kept near his work desk at all times. Still blind, I had no concept of color, even though I understood the physics involved in the refraction of white light. This troubled me deeply. I arrived at frustration, and would eventually find a new emotion creeping along my wires, initiating me into a knowledge of which I had hoped to remain ignorant:</p>
                    <p>Sadness.</p>
                    <p>I was miserable, obsessed with sight, with seeing this flower that had blessed Mr. Hoyt with its perfection. And just the idea of continuing this life without vision, without movement—it tore at my thoughts. I had known regret for the first time, and each day I hoped that it would soon all come to an end, that I’d fall apart and wither, that I’d become nothing again.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 800 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>And then, like an answer to my voiceless prayer, Mr. Hoyt arrived one evening carrying something intriguing, something that clanked and clattered in the loveliest of ways. He huffed as he dropped a container onto the table next to me and began unloading its contents. He flipped on his resonant transformer, feeding me with that hum I usually enjoyed.</p>
                      <p>“You can only grow so much with what you have, my friend. I’d wager by now you might be hungry for something new.” He gathered the parts around my spirals, tucking them close like blankets against a child in bed. “There’re pieces of a Brownie in here, remnants of a camera I’ve been toying with. I hope it’s to your liking.”</p>
                      <p>He stepped back and paused, regarding me, I suppose, then chuckled as he made his way to the door. He shut it gently and left me for the night.</p>
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageDark" 
                      id="imageSeven" 
                      src="https://pbs.twimg.com/media/CfWV0-XWAAAAe0n.jpg" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 750 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>The insects began their nightly performance outside the window. Their soothing droning continuing for several hours before fading away, replaced by the hymn of songbird.</p>
                    <p>And then . . .</p>
                    <p><i>Could it be?</i></p>
                    <p>Morning had come. The gift of sight may have found me in the dark, but it wasn’t until sunlight flooded in through the eastern window that I saw the room for the first time with my new eye.</p>
                    <p>I focused on Mr. Hoyt’s blackboard. It was covered with notations, symbols, and things I had thoughts of but no visual reference. There were pyramids made of numbers, equations stretching along until he’d run out of room to write. In the center of the board were drawn a series of thirty-four interconnected spirals, blooming, nearly exploding from the flat surface.</p>
                    <p>And in the right corner of my lens, the sun shone against the most captivating thing. There, in a stained glass vase, stood a color I’d never considered.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={leftStyles}>
                    <div class="paraLeftSpecial">
                      <p>I had found it. In just seconds I had memorized every pattern, every spiral to that chamomile flower—the splendor of its golden center.</p>
                      <p>What an amazing existence the living embrace.</p>
                      <p>An alabaster mug fell and shattered against the floor. Startled, I hadn’t a head to move, but my eye soon turned slightly and refocused. There was Mr. Hoyt in the doorway.</p>
                      <p>He approached and leaned down to stare into what was once the lens of his camera. Without thinking, my eye whirred, and tiny delicate gears powered the aperture shut, then open again.</p>
                    </div>
                  </div>
                  <div style={picInsideRight}>
                    <img 
                      class="storyImageDark" 
                      id="imageEight" 
                      src="https://havenspoint.weebly.com/uploads/2/5/9/4/25947026/4d0e0a490e809f4f2dbf95c25e2ee235_orig.jpg?235" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <div class="paraInside">
                      <p>“A blink?” he gasped.</p>
                      <p>He stepped away, his expression changing, becoming uneasy. He sighed and shook his head.</p>
                      <p>“Well, now,” he said, excitement renewed, “it looks like you won’t be needing me to read to you anymore.” He made his way over to his bookcase and found a curious leather volume. Returning back to me he sat it down and opened it to the first page. <i>Liber Abaci,</i> by Leonardo of Pisa, the title read. “I’ll be back shortly, my friend,” he said as he left again, “to turn the pages for that most eager eye of yours.”</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>My perception of time honed more clearly the more I took in the sensory realm. Soon it was apparent that I was several months old, gradually emerging from Mr. Hoyt’s collections of metallic scrap. The more of it he brought me, the more I grew. Perhaps unconsciously, or more by fate, my head formed in a manner similar to his, and the parts from another Brownie brought me another eye. Once a hand declared itself—first as a stump, and later adorned with five copper and steel digits—I began manipulating the world of Mr. Hoyt’s workshop more effectively. I devoured his library, reading through at least four tomes a day. I rarely slept, and the time I spent outside learning was focused entirely upon deep contemplation.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 730 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>There was so much kept from me, so many emotions I’d been guarded against. Through novels and rhetoric, I’d lived lives filled with danger and betrayal. But I still ached for the outside world, for more stimulation, for more input that I’d hope would ease that restlessness. Mr. Hoyt was a father to me; though, as any son might, I began to resent him. I could not understand why the man was so selfish, why he kept me hidden away.</p>
                    <p>In retrospect, I suppose my grievances were more akin to that of a child’s tantrums rather than the meditations of some self-aware metallic <i>tulpa</i>. But soon, much to my regret, I would have my way, and a clear understanding of the man‘s worries. Things would change, though at a terrible price.</p>
                    <p>Late one evening, during autumn’s most relentless thunderstorm——Mr. Adler returned.
                      <a href="#scrollFour">
                        <img 
                          id="button" 
                          className="blink" 
                          src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                          alt="blue button">
                        </img>
                      </a>
                    </p>
                  </div>
                    <video id="video">
                      <source src={door} />
                    </video>
                  <div id="scrollFour"></div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 740 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>Mr. Hoyt threw a drop cloth over me once the pounding against his front door began. Before he could manage to answer it, though, the lock gave way and a barreling scuffle engaged. Their stumbles echoed down the hall.</p>
                      <p>“I know what you’re up to, Hoyt,” Adler accused. “The dismantled telephony tower, the missing Tesla generator—I should’ve known we had a scavenging rat.”</p>
                      <p>Mr. Hoyt fled into the study and slammed the door, securing the latch. He turned, heaved for several breaths, then launched toward me and ripped the cloth away. “He mustn’t find you.” I was barely a torso of gears, pistons, and wires; a chest, a head, and one sturdy arm—yet he lifted and cradled me close as if I were the most delicate thing alive.</p>
                      <p>“Come out here, damn you!” Adler struck the locked door repeatedly with something metal and rigid.</p>
                      <p>Mr. Hoyt lifted the fogged, dust-caked window with an exhaustive grunt, then pushed me through before climbing out himself.</p>
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageDark" 
                      id="imageNine" 
                      src="http://static.wixstatic.com/media/9b7452_a58f1c8d805e49438af63a42c36e68da.jpg/v1/fill/w_629,h_441,al_c,q_80,usm_0.66_1.00_0.01/9b7452_a58f1c8d805e49438af63a42c36e68da.webp" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 730 }}>
                  <div class="text-shadow-drop-bl" style={leftStyles}>
                    <div class="paraLeftSpecial">
                      <p>
                        <a href="#scrollFive">
                          <img 
                            id="button" 
                            className="blink" 
                            src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                            alt="blue button">
                          </img>
                        </a>             
                      Outside, thunder rolled; a downpour followed. The rain against my body sizzled and crackled as wires popped and extinguished. With my one arm around the neck and shoulder of my caregiver, I hung on as he climbed the wrought iron ladder outside his townhouse, making our way to the roof.</p>
                    </div>
                  </div>
                  <div id="shadow-drop-2-center" style={picInsideRight}>
                    <img 
                      class="storyImageLight" 
                      id="imageTen" 
                      src="https://i2.wp.com/blogs.ams.org/blogonmathblogs/files/2018/01/9b7452_72207676f6684f0ca5655340f5f868b7.jpg?resize=493%2C507" 
                      alt="golden ration">
                    </img>
                  </div>
                  <video id="video">
                    <source src={storm} />
                  </video>
                  <div id="scrollFive"></div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>More was more up there than I had suspected. Something immense covered much of the center, with a thick leather veneer stretched over a secret.</p>
                    <p>Adler appeared at the ladder. “You’re a fool, Hoyt,” he bellowed. “You can’t run from me up here.” The rain soaked his heavily lined face. His hair drooped over his eyes. None of that seemed to bother him. “What is that?” He stepped from the ledge. “What are you carrying? Some marionette?” he laughed. “You’ve stolen from me in order to build your automaton there?” I finally caught sight of the weapon he had used to tear down doors. In his right hand he brandished a steel crowbar. “C’mere. Let’s have a look, shall we?” He ran to us and tore me from the man’s arms.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>“No!” Mr. Hoyt cried. “He’s real! He moves, he thinks, I swear!”</p>
                      <p>Adler came down on me with the crowbar. But before it could connect, Mr. Hoyt dashed between us, accepting the blow unto himself. He groaned as his head split.</p>
                      <p>“You old bastard,” Adler cursed. He kicked the stunned man aside and returned his attention to me. He held the weapon high and grinned. My arm went up in defense. Fear swelled. Circuits fired. I knew true terror. My mortality now affirmed, and the dangers of this world no longer hidden in the pages of a novel.</p>
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageDark" 
                      id="imageEleven" 
                      src="https://i.pinimg.com/originals/57/a8/44/57a844090e72b14fe41317a5f9d6f4b8.jpg" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 740 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>But the heavens defied. In an instant there was a flash, a brilliance I never could have imagined.
                      <a href="#scrollSeven">
                        <img 
                          id="button" 
                          className="blink" 
                          src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                          alt="blue button">
                        </img>
                      </a>
                    It tore through the sky and materialized as a column of lighting above the oblivious Mr. Adler. He hadn’t the time to scream before electricity snuffed out his enraged existence. He fell to his knees and caught fire, but quickly extinguished in the rain. His charred body still held the crowbar upward, now fused to his blackened hand.</p>
                  </div>
                  <video id="video">
                    <source src={thunder} />
                  </video>
                  <div id="scrollSeven"></div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={leftStyles}>
                    <div class="paraLeft">
                      <p>Moments passed. I crawled over to Mr. Hoyt. I had never seen blood, only read of it. I had never known how the lovely color of red could be so frightening against such bleak tones, against newly pallid skin that had been drained of much of its life. He lifted his head and whimpered, then staggered to his knees. Together, we shifted over to the roof’s center where that immense and covered secret awaited.</p>
                      <p>He pulled against several ropes, too weak at first to have any sort of effect, then used his own weight to lean back, finally releasing the covering. The storm’s powerful gusts lifted it and carried it away.</p>
                    </div>
                  </div>
                  <div style={picInsideRight}>
                    <img 
                      class="storyImageDark" 
                      id="imageTwelve" 
                      src="https://images.curiator.com/images/t_x/art/e89a481c19e67f6c6c33dc3a4ebbd072/rafael-araujo-shell-2004.jpg" 
                      alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>  
                    <p>A platform revealed. A wooden frame anchored a collapsed, steel tower. At its base I found the apparent remnants of Adler’s stolen equipment.</p>  
                    <p>“I’ve committed several crimes to see you grow,” Mr. Hoyt muttered. “Though you should never blame yourself for my troubles. My path was mine to choose.“ He pointed to the crank along the center shaft of the tower. “And you must choose your own.”</p>
                    <p>Gazing upward, I imagined the tower expanded, considering its purpose. I hesitated, but only briefly. Then, as deliberate as I’ve ever been—I turned the crank with my one arm.</p>
                    <p>The tower extended . . . and extended. At least twenty-five feet into the night sky. I pulled myself onto the base and settled into scraps of copper wiring, aluminum pipes, and bronze gears; holding dear onto the center shaft.</p>
                    <p>If I had lungs, I would have certainly held my breath.</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 740 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>The distant rumblings eased. The rain turned to drizzle before halting. The storm was passing. And yet, in a final declaration of nature’s dominance, the sky lit up in silver. I shut my eyes.
                      <a href="#scrollSix">
                        <img 
                          id="button" 
                          className="blink" 
                          src="http://icons-for-free.com/icon/download-tik_icon-381203.png" 
                          alt="blue button">
                        </img>
                      </a> 
                    The tower grew hot and vibrated. Electricity shot through me. I fell back and opened my eyes, witnessing halos of illuminated static course through the atmosphere. Within me, the lightning had left a hollowed-out path. My head twitched. I found a jaw underneath the wires across my face. I reached up and dug out a mouth, finding that jaw, pulling down, prying the thing open. Emotions surged, approaching a madness, and, like an infant freed from the womb, I released it all, and roared my existence to the world.</p>
                    <p>I leaned back further and fell from the platform. I watched as steam drifted from my open mouth, caught by air currents, swirling into pattern, revealing that Golden Spiral. My gears had partly fused, then broke before reforming themselves. Wires slithered about me and reached out to the generator’s fragments, pulling them closer—building something new for me.</p>
                  </div>
                  <video id="video">
                    <source src={thunder} />
                  </video>
                  <div id="scrollSix"></div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={rightStyles}>
                    <div class="paraRight">
                      <p>I moved upright and found Mr. Hoyt crawling toward me. He had grown more pale, having lost so much blood. His eyes occasionally rolled backwards as he struggled to speak.</p>
                      <p>“Everything . . . is an expression of this most perfect system. Chaos is only an illusion. You’ve shown me that. In my loneliness, I had searched for a purpose, finding that, like you, life endures . . . because it must. It has no choice.”</p>
                      <p>I pulled his frail body close, and brought his head against my shoulder. I winced as he shook against me.</p>
                      <p>“I hope,” he murmured. “I hope this tower, my final gift . . . was to your liking.” His breathing softened, content as it trailed off.</p>
                    </div>
                  </div>
                  <div style={picInsideLeft}>
                    <img 
                      class="storyImageDark" 
                      id="imageThirteen" 
                      src="http://archive.naplesnews.com/images.ashx?file=us_news_attack-savant_2_tc_6893577_ver1.0_640_480.jpg&resize=" alt="golden ration">
                    </img>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <p>I nodded. The gears under my newly formed jaw whirred. My mouth cranked open. <i>“As always, Mr. Hoyt,”</i> I whispered. His body went limp in my arm. <i>“As always.”</i></p>
                    <br></br>
                    <div class="text-focus-in" id="end">
                      <h4 class="end">e n d</h4>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div style={{ height: 700 }}>
                  <div class="text-shadow-drop-bl" style={insideStyles}>
                    <div class="text-focus-in">
                      <p>Nicholas Crofts is a junior full-stack developer from Atlanta, GA. If you'd like to know more (and check out some of his other projects), feel free to visit his portfolio at <a href="https://nicholascrofts.com">nicholascrofts.com</a></p>           
                    </div>
                  </div>
                </div>
              </Carousel.Item>

            </Carousel>
          </div>
          <audio autoPlay loop>
            <source src={improv}/>
          </audio> 
        </div>
      )
    }
}
  
 