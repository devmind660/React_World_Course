import React, {useState, useEffect} from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import axios from "axios";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const getData =  () => {
        axios.get("http://localhost:3004/articles")
            .then((res) => setBlogData(res.data));
    };

    useEffect(() => getData(), []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            setError(false);
            axios.post("http://localhost:3004/articles", {
                author, // = author: author,
                content, // = content: content,
                date: Date.now()
            })
            setAuthor("");
            setContent("");
            getData();
        }
    }

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />

            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author} // la valeur est appliquée par onChange
                />
                <textarea
                    style={{ border: error ? "2px solid red" : "1px solid #61dafb"}}
                    placeholder="Message"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}> // la valeur est appliquée par onChange
                </textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (
                    <Article key={article.id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default Blog;