import { Link } from "react-router-dom";

export default function Header({data}) {  // (props) -> props.data -> {data}

    // console.log(data);

  return (
    <>
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), 
                url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path} ) `,  
            backgroundPosition: "center",  
                // center --> "center" 
            backgroundSize: "cover",
          }} 
           className="w-full h-[60vh] flex flex-col justify-end p-[3%] items-start gap-2 "  // is -> link take only required width 
        >

            <h1 className=" w-[80%] text-5xl font-bold text-zinc-200 ">
                { data.name || data.title || data.original_title ||  data.original_name}
            </h1>

            <p className="text-zinc-400 w-[60%]  ">
                { data.overview.slice(0, 150) }...
                <Link to={`/${data.media_type}/details/${data.id}`}  className="text-blue-400" >more</Link>
            </p>

            <p className="text-zinc-200 text-lg ">
                { 
                    data.media_type ?  (
                        <span>
                            <i className=" text-teal-500 ri-vidicon-2-fill mr-1 "></i> {data.media_type.toUpperCase()}
                        </span>
                    ) : null
                } 
                {
                    data.release_date ? (
                        // wrap in a container
                        <span>
                            <i className=" text-teal-500 ri-megaphone-fill mr-1 ml-5 "></i> {data.release_date}
                        </span>
                    ) : null
                }
            </p>

            <Link to={`/${data.media_type}/details/${data.id}`}
             className="p-3 bg-[rgb(54,45,115)] text-lg tracking-widest rounded-xl text-zinc-100 hover:bg-[#362c86] hover:text-white hover:scale-105 duration-300 "> 
                Watch Trailer 
            </Link>


        </div>
    </>
  )
}







