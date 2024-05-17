import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../context/Language';

export default function SearchForMovie() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const { language } = useContext(LanguageContext);

    function movieTitle(event) {
        setTitle(event.target.value);
    }

    function handleSearch() {
        navigate(`/search?query=${title}`);
        setTitle('');
    }

    return (
        <div style={{ fontFamily: "cursive", backgroundColor: "rgb(235, 235, 235)", padding: "30px", borderRadius: "15px" }}>
            <h3 style={{ fontWeight: "bolder", color: "black", marginBottom: "20px" }}>{language === "en" ? "Welcome to our Movie App" : "مرحبا بكم في تطبيق الافلام"}</h3>
            <p style={{ marginBottom: "20px" }}>{ language === "en" ? "Millions of movies, TV shows and people to discover. Explore now." : "الملايين من الأفلام والبرامج التلفزيونية والأشخاص لاكتشافها. استكشف الآن."}</p>
            <div className="container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input className="form-control" type="text" placeholder={language === "en" ? "Search for a movie" : "ابحث عن أفلام"} value={title} onChange={movieTitle}
                    style={{ borderRadius: "10px", border: "none" }} />
                <button className="btn mx-2" onClick={handleSearch}
                    style={{ borderRadius: "10px", backgroundColor: "rgb(124, 124, 224)", color: "white", marginLeft: "10px" }}>{language === "en" ? "Search" : "بحث"}</button>
            </div>
        </div>
    );
}
