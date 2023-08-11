import ProfileRegistration from "@/pages/register/ProfileRegistration";

interface ProfileOptionsProps {
  onClose: () => void 
}

export default function ProfileOptions({ onClose }: ProfileOptionsProps) {

  return (
    <div className="flex flex-col items-center">
      <h1>Profile stuff</h1>

      <ProfileRegistration onClose={onClose} />
    </div>
   
  )
}