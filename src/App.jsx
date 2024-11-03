import styles from './style'
import { Navbar, Hero, Stats, Business, Billing, DealCard, Testimonials, Clients, CTA, Footer } from './components'

const App = () => (
  <div className="w-full overflow-hidden bg-primary">
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <DealCard/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)

export default App
