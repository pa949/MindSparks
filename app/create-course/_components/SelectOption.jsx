
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";
import { UserInputContext } from "../../_context/UserInputContext";

function SelectOption() {
     const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value
    }))
  }

  return (
    <div className='px-10 md:px-20 lg:px-44'>
        <div className='grid grid-cols-2 gap-10'>
        <div>
        <label>Difficulty level</label>
        <Select onValueChange={(value)=>handleInputChange("level",value)}>
        defaultValue={userCourseInput?.level}
  <SelectTrigger className="text - sm ">
    <SelectValue placeholder="select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Beginner">Beginner</SelectItem>
    <SelectItem value="Intermediate">Intermediate</SelectItem>
    <SelectItem value="Advanced">Advanced</SelectItem>
  </SelectContent>
</Select>
</div>
        <div>
        <label>Course Duration</label>
        <Select onValueChange={(value)=>handleInputChange("duration",value)}>
  defaultValue={userCourseInput?.duration}
  <SelectTrigger className="text - sm ">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1 hrs">1 hrs</SelectItem>
    <SelectItem value="3 hrs">3 hrs</SelectItem>
    <SelectItem value="more than 3 hrs">more than 3 hrs</SelectItem>
  </SelectContent>
</Select>
</div>
<div>
        <label>Add Video</label>
        <Select onValueChange={(value)=>handleInputChange("Add Video",value)}>
        defaultValue={userCourseInput?.video}
  <SelectTrigger className="text - sm ">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Yes">Yes</SelectItem>
    <SelectItem value="No">No</SelectItem>
    </SelectContent>
</Select>
</div>
<div>
        <label>No of chapter</label>
        <Input type="number" className="h-14 text-lg"
        defaultValue={userCourseInput?.chapter}   
            onChange={(event)=>handleInputChange("noofChapter",event.target.value)}
        />
</div>
        </div>
    </div>
  )
}

export default SelectOption