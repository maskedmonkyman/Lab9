let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

TrackJS.track('Testing TrackJS!');

window.onerror = function(message, source, lineno, colno, error){
    console.log(message +
        "\nsource: " + source +
        "\non line: " + lineno +
        "\non column: " + colno +
        "\n" + error
        );
};

//Console Log Demo
errorBtns[0].onclick = () => {
    console.log("console log demo clicked");
};

//Console Error Demo
errorBtns[1].onclick = () => {
    console.error("console error demo clicked");
};

//Console Dir
errorBtns[2].onclick = () => {
    console.dir(document.location);
};

//Console dirxml
errorBtns[3].onclick = () => {
    console.log(document.location);
};

//Console Group Start
errorBtns[4].onclick = () => {
    console.group();
};

//Console Group End
errorBtns[5].onclick = () => {
    console.groupEnd();
};

//Console Table
errorBtns[6].onclick = () => {
    class CSE110
    {
        constructor()
        {
            this.software = "engineering";
            this.development = "agile";
        }
    }

    let currentClass = new CSE110();
    console.table(currentClass);
};

//Start Timer
errorBtns[7].onclick = () => {
    console.time("timer started");
};

//End Timer
errorBtns[8].onclick = () => {
    console.timeEnd("timer ended");
};

//Console Trace
errorBtns[9].onclick = () => {
    function weAre(){
        function inSome(){
            function functions(){
                console.trace();
            }
            functions();
        }
        inSome();
    }
    weAre();
};

//Trigger a Global Error
errorBtns[10].onclick = () => {
    class MyError extends Error
    {
        constructor(message)
        {
            super(message);
            this.name = "my Error";
            this.isBule = false;
        }
    }

    try
    {
        throw new MyError("test error");
    }
    catch (error)
    {
        console.log(error);
    }
    finally
    {
        console.log("finally this was run");
    }
};