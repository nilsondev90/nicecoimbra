import Footer from "../../components/footer.components";
import Header from "../../components/header.components"
import SobreHome from "../../components/home/sobre.home.components";

const Home = () => {
    return (
        <>
            <Header />
            <div className="w-full">
                <div className="mx-auto max-w-screen-2xl">
                    <SobreHome />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home