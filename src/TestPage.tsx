import React from "react";

interface TestPageProps {}

const TestPage: React.FC<TestPageProps> = () => {
    return (
        <>
            <div className="app" style={{flexDirection: "column"}}>
                <div className="module-box-learn">
                    ENGLAND
                </div>
                <div className="module-box-learn">
                    <h2></h2>
                </div>
            </div>
        </>

    )
}

export default TestPage;