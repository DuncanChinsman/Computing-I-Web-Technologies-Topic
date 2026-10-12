const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {

    let athleisure = 0;
    let casualChic = 0;
    let quietLuxury = 0;
    let corporateChic = 0;

    for (let i = 1; i <= 5; i++) {

        const answer = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (answer === null) {
            alert("Please answer all questions.");
            return;
        }

        if (answer.value === "athleisure") {
            athleisure++;
        }

        if (answer.value === "casualChic") {
            casualChic++;
        }

        if (answer.value === "quietLuxury") {
            quietLuxury++;
        }

        if (answer.value === "corporateChic") {
            corporateChic++;
        }
    }

    let fashionStyle = "";
    let description = "";

    if (athleisure >= casualChic && athleisure >= quietLuxury && athleisure >= corporateChic) {
        fashionStyle = "Sporty / Athleisure";
        description = "Your lifestyle is active, energetic and on the go. You enjoy gym sessions, running and comfortable outfits that still look stylish. Your ideal wardrobe includes matching gym sets, premium trainers, oversized hoodies and functional accessories.";
    }

    else if (casualChic >= athleisure && casualChic >= quietLuxury && casualChic >= corporateChic) {
        fashionStyle = "Casual Chic / Creative";
        description = "Your style is relaxed, creative and effortlessly cool. You enjoy coffee runs, yoga, reading books, exploring the city and socialising with friends. Your ideal wardrobe includes relaxed denim, knitwear, vintage pieces, neutral basics and stylish everyday accessories.";
    }

    else if (quietLuxury >= athleisure && quietLuxury >= casualChic && quietLuxury >= corporateChic) {
        fashionStyle = "Quiet Luxury / Old Money";
        description = "You appreciate sophistication, quality and timeless fashion. You enjoy high-end shopping, elegant restaurants and premium experiences. Your ideal wardrobe includes tailored coats, quality knitwear, elegant trousers, leather accessories and neutral colours.";
    }

    else {
        fashionStyle = "Smart Casual / Corporate Chic";
        description = "Your style is polished, ambitious and professional. You appreciate looking well put together, whether you are working in a corporate environment, attending meetings or networking. Your ideal wardrobe includes tailored blazers, smart trousers, loafers, minimalist bags and elegant everyday essentials.";
    }

    localStorage.setItem("fashionStyle", fashionStyle);
    localStorage.setItem("description", description);

    window.location.href = "result.html";
});
