import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://glittermagazine.co/wp-content/uploads/2021/04/jb-lead.jpg" alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategories">Music</span>
                    <span className="postCategories">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet consectetur </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor ipsam, voluptates maxime voluptas aperiam, impedit temporibus animi voluptatem facilis blanditiis pariatur repellendus nam porro autem cumque, inventore quidem tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor ipsam, voluptates maxime voluptas aperiam, impedit temporibus animi voluptatem facilis blanditiis pariatur repellendus nam porro autem cumque, inventore quidem tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor ipsam, voluptates maxime voluptas aperiam, impedit temporibus animi voluptatem facilis blanditiis pariatur repellendus nam porro autem cumque, inventore quidem tempore!</p>
        </div>
    )
}
