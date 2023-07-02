import Title from "./Title"
import { services } from "../data"
import Service from "./Service";

const Services = () => {
    return (
        <section className="section services" id="services">
        <Title title="our" subtitle="services" />
        <div className="section-center services-center">


        {services.map((data) => {
          
          const {id, title,text,icon} = data
          return ( 
         < Service key={id}  title={title} text={text} icon={icon} />
            )

        }
        )}
            </div>
    </section>
    )
}
export default Services