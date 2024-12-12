import SidebarLinks from "./SidebarLinks";



export default function Sidebar({open}:{open: boolean}) {
  return (
    <div className={`flex h-full flex-col gap-4 ${open ?"w-[290px]":"w-12"}`}>
      <div className="py-4 flex justify-center">
        <strong className="text-xl font-bold text-[#b4d429]">CINEMACITY</strong>
      </div>
      <SidebarLinks open={open} />
    </div>
  );
}
