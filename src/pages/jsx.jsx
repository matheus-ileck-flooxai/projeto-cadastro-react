import Layout from "../components/Layout";


export default function Jsx() {


    const titulo = <h1>JSX é um conceito Central</h1>

    const b = 3;

    return (

        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
            </div>
        </Layout>
    )

}