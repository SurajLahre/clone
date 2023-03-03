import TabOptions from './TabOptions'
import TopNavigation from './TopNavigation'
import Footer from './Footer'
import '../App.css'

function HomePage() {
    return (
        <div>
            <TopNavigation />
            <TabOptions title='hello tab' />
            <Footer />
        </div>
    )
}
export default HomePage
