interface MemberProps {
    name: string;
    img: string;
    role: string
}

const Role = ({name, img, role} : MemberProps ) => {
  return (
    <div className="my-[5rem]">
      <div className="w-[13rem] h-[13rem] rounded-full overflow-hidden flex items-center justify-center">
        <img src={img} alt="Member" className=""/>
      </div>
      <div className="mt-3 w-full text-center text-xl font-bold font-concertOne flex flex-col justify-center">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default Role