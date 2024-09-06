import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import { useContext } from 'react'; // Import useContext from React
import CategoryList from '../../_shared/CategoryList';

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({ ...prev, category }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5">Select the Course Category</h2>
      <div className="grid grid-cols-3 gap-10 px-10 md:px-20">
        {CategoryList.map((item, index) => (
          <div
            key={index} // Add a unique key for each item
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 ${
              userCourseInput.category === item.name && 'border-primary bg-blue-50'
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;