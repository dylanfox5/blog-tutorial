import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: "lorem ipsum...", author: "mario", id: 1 },
        { title: 'my new website', body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: 'my new website', body: "lorem ipsum...", author: "luigi", id: 3 },
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;