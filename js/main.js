//Variables from input//



function convertoLowerCase(str) {
    return str.toLowerCase();
}
//Event Listener - Button to Submit//
generate.addEventListener("click", generateIntro);

let essayAfterword = "<h2>Now, let's copy your essay introduction draft and review it with <a href='https://app.grammarly.com/' target='_blank'>Grammarly</a>!</h2>"

//Introduction Generating Function//
function generateIntro() {
    let essayIntro = "";
    let author = document.querySelector("#question1");
    let title = document.querySelector("#question2");

    let preargument = document.querySelector("#question3");
    let argument = convertoLowerCase(preargument.value);

    let prespecific = document.querySelector("#question4");
    let specific = convertoLowerCase(prespecific.value);

    let quotation = document.querySelector("#question5");

    let preexplanation = document.querySelector("#question6");
    let explanation = convertoLowerCase(preexplanation.value);

    let presumup = document.querySelector("#question7");
    let sumup = convertoLowerCase(presumup.value);

    let prestance = document.querySelector("#question8");
    let stance = convertoLowerCase(prestance.value);

    let prerationale = document.querySelector("#question9");
    let rationale = convertoLowerCase(prerationale.value);

    let preparticular = document.querySelector("#question10");
    let particular = convertoLowerCase(preparticular.value);

    let example = document.querySelector("#question11");

    let preobjection = document.querySelector("#question12");
    let objection = convertoLowerCase(preobjection.value);

    let preretort = document.querySelector("#question13");
    let retort = convertoLowerCase(preretort.value);

    let takeawaymessage = document.querySelector("#question14");
    let generate = document.querySelector("#generate");
    let yourIntroduction = document.querySelector("#yourIntroduction");
    let documentAfterword = document.querySelector("#afterword");

    essayIntro += "<p style='text-indent:40px'>The central argument of " + author.value + " in " + title.value +
        " is that " + argument + " In particular, " + author.value + " claims that " + specific + " They write, " + quotation.value +
        " In this statement, " + author.value + " explains that " + explanation + " They stress that " + sumup + "</p><br>" +
        "<p style='text-indent:40px'>I " + stance + " with " + author.value + " because " + rationale +
        " To be more specific, my position is that " + particular + " " + example.value + " Some might disagree with me by suggesting that " +
        objection + " Against this objection, I contend that " + retort + " " + takeawaymessage.value + "</p>";
    yourIntroduction.innerHTML = essayIntro;
    documentAfterword.innerHTML = essayAfterword;
}