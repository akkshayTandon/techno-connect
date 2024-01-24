import Course from "../components/Course"

export default function CoursesPage() {
    const courses = [
        {
            courseName: "Frontend Development",
            imgSrc: "/img/frontend.png"
        },
        {
            courseName: "Android Development",
            imgSrc: "/img/android.png"
        },
        {
            courseName: "Blockchain Technology",
            imgSrc: "/img/blockchain.png"
        },
        {
            courseName: "Data Science Analytics",
            imgSrc: "/img/data-science.png"
        },
        {
            courseName: "Programming Languages",
            imgSrc: "/img/programming.png"
        }
    ];

    return (
        <>
            {/* <Header></Header> */}
            <section id="courses" className="flex flex-col justify-center items-center gap-2 md:gap-4 md:m-4 lg:flex-row lg:flex-wrap">
                <h1 className="font-medium title-font text-slate-800 text-2xl mt-5 w-full text-center">
                    <strong>INTERNSHIPS WE OFFER !</strong>
                </h1>
                {courses.map((course, id) => {
                    return <Course key={id} imgSrc={course.imgSrc} courseName={course.courseName}></Course>
                })}
            </section>
            {/* <Footer></Footer> */}
        </>
    )
}