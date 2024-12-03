

export default function LocationCard(props) {
  return ( 
    <div className="slider-card h-[200px] bg-transparent">
      <img className="w-full h-[60%] mix-blend-difference object-cover rounded-full" src={props.url} alt="Location image" />
      <h2 className="text-xl font-bold text-center uppercase text-[#795436] m-2">{props.name}</h2>
    </div>
  );
}