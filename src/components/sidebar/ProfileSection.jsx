import Foto from "../../assets/images/Foto.png";

export default function ProfileSection() {
  return (
    <>
      <img
        src={Foto}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover shadow mb-2 mt-2"
      />
      <h1 className="text-xl font-semibold mb-3 text-center leading-tight">
        Elham Nakhkoob
      </h1>
    </>
  );
}
