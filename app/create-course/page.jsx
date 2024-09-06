"use client"
import { useContext, useEffect, useState } from 'react'; // Import useState and useEffect from react
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import { Button } from '../../components/ui/button';
import GenerateCourseLayout_AI from '../../configs/AiModel';
import { UserInputContext } from '../_context/UserInputContext';
import { SelectCategory } from "./_components/SelectCategory";
import { SelectOption } from "./_components/SelectOption"; // Import SelectOption component
import { TopicDescription } from "./_components/TopicDescription"; // Import TopicDescription componen


function CreateCourse (){
    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <HiMiniSquares2X2 />,
        },
        {
            id: 2,
            name: 'Topic & Desc',
            icon: <HiLightBulb />,
        },
        {
            id: 3,
            name: 'Options',
            icon: <HiClipboardDocumentCheck />,
        },
    ];

    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log(userCourseInput);
    }, [userCourseInput]);

    const checkStatus = () => {
        // Your check status logic here
    };

    const GenerativeCourseLayout = async () => {
        setLoading(true);
        const BASIC_PROMPT = "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration:";
        const USER_INPUT_PROMPT = "Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format";
        const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT);

        try {
            const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
            console.log(result.response?.text());
            console.log(JSON.parse(result.response?.text()));
        } catch (error) {
            console.error('Error generating course layout:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Stepper */}
            <div className="flex flex-col justify-center items-center mt-10">
                <h2 className="text-4xl text-primary font-medium">Create Course</h2>
                <div className="flex mt-10">
                    {StepperOptions.map((item, index) => (
                        <div className="flex items-center" key={item.id}>
                            <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                                <div
                                    className={`bg-gray-200 p-3 rounded-full text-white ${
                                        activeIndex >= index && 'bg-purple-500'
                                    }`}
                                >
                                    {item.icon}
                                </div>
                                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                            </div>
                            {index !== StepperOptions.length - 1 && (
                                <div
                                    className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                                        activeIndex - 1 >= index && 'bg-purple-500'
                                    }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* {Component} */}
            {activeIndex == 0 ? <SelectCategory /> : activeIndex == 1 ? <TopicDescription /> : <SelectOption />}
            {/* {Next Previous Button} */}
            <div className="px-10 md:px-20 lg:px-44 mt-10">
                <div className="flex justify-between mt-10">
                    <Button
                        disabled={activeIndex == 0}
                        variant="outline"
                        onClick={() => setActiveIndex(activeIndex - 1)}
                    >
                        Previous
                    </Button>
                    {activeIndex < 2 && (
                        <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                    )}
                    {activeIndex == 2 && (
                        <Button onClick={GenerativeCourseLayout}>Generate Course Layout</Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateCourse
