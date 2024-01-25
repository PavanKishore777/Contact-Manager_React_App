import React from "react";
import Navbar from "./Navbar";

interface IProps {
    color: string,
    heading: string,
}

const Aboutuscards: React.FC<IProps> = (props) => {

    return (

        <>

            <div className="row">
                <div className={`col ${props.color} text-decoration-underline display-6`}>
                    {props.heading}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consequatur doloremque
                    ducimus eum, labore laudantium tempore? Cupiditate distinctio ducimus eligendi, eos fugit, illum
                    numquam quam quibusdam quisquam recusandae tempore tenetur unde, veritatis. Architecto
                    cupiditate dignissimos eveniet, facere fugiat id illum magnam mollitia obcaecati placeat
                    praesentium provident quae quibusdam sapiente sed sequi, similique sit suscipit voluptate
                    voluptatem. Consectetur facere maiores modi perspiciatis quia vitae voluptatem. Asperiores
                    consectetur consequatur corporis dicta eos facilis, officia? Aperiam assumenda corporis
                    dignissimos, enim eum ex fugit incidunt laboriosam laudantium molestiae molestias nam, nemo nisi
                    officiis perferendis quae quam quo reiciendis ullam veniam vero voluptatem, voluptates.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et eveniet expedita molestias
                    necessitatibus placeat quam, quod reprehenderit sapiente sequi, sint sit sunt velit? Consequatur
                    cumque earum facere inventore ipsum magnam magni officia rem? Beatae deserunt nihil nostrum placeat
                    unde.</p>
            </div>
        </>
    )
}

export default Aboutuscards;