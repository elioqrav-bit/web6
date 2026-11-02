$(document).ready(function() {
    // Task 0: Setup check
    console.log("jQuery is ready!");

    // Task 1: Selectors & CSS & Theme Toggle
    $("#update-text-btn").click(function() {
        $("#main-title").text("Astana IT University Student Portfolio");
        $("#main-intro").css("color", "#0066cc");
    });

    $("#theme-toggle-btn").click(function() {
        $("body").toggleClass("dark-theme");
    });

    // Task 2: Visibility Methods (Hide, Show, Toggle)
    $("#hide-btn").click(function() {
        $("#status-message").hide();
    });

    $("#show-btn").click(function() {
        $("#status-message").show();
    });

    $("#toggle-btn").click(function() {
        $("#status-message").toggle();
    });

    // Task 3: Fade Methods
    $("#fade-out-btn").click(function() {
        $(".gallery-img").fadeOut();
    });

    $("#fade-in-btn").click(function() {
        $(".gallery-img").fadeIn();
    });

    $("#fade-toggle-btn").click(function() {
        $(".gallery-img").fadeToggle();
    });

    // Task 4: Slide Methods
    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle();
    });

    // Task 5: Add & Remove Elements (.append, .prepend, .remove)
    $("#append-btn").click(function() {
        let val = $("#new-skill-input").val().trim();
        if (val !== "") {
            $("#skills-list").append("<li>" + val + "</li>");
            $("#new-skill-input").val("");
        }
    });

    $("#prepend-btn").click(function() {
        let val = $("#new-skill-input").val().trim();
        if (val !== "") {
            $("#skills-list").prepend("<li>" + val + "</li>");
            $("#new-skill-input").val("");
        }
    });

    $("#remove-btn").click(function() {
        $("#skills-list li:last-child").remove();
    });

    // Task 6: Modifying Attributes (.attr)
    $("#change-attr-btn").click(function() {
        let currentHref = $("#social-link").attr("href");
        if (currentHref.includes("github")) {
            $("#social-link").attr("href", "https://lms.astanait.edu.kz");
            $("#social-link").text("Open Astana IT LMS");
        } else {
            $("#social-link").attr("href", "https://github.com");
            $("#social-link").text("Open GitHub");
        }
    });

    // Task 7: Form Interaction (.val and .text live preview)
    $("#form-name").on("input", function() {
        let val = $(this).val();
        $("#live-name-output").text(val === "" ? "-" : val);
    });

    $("#form-email").on("input", function() {
        let val = $(this).val();
        $("#live-email-output").text(val === "" ? "-" : val);
    });

    // Task 8: Basic Animation (.animate)
    let isAnimated = false;
    $("#animate-btn").click(function() {
        $(".bar-fill").each(function() {
            let targetWidth = $(this).attr("data-width");
            if (!isAnimated) {
                $(this).animate({ width: targetWidth }, 1000);
            } else {
                $(this).animate({ width: "0%" }, 1000);
            }
        });
        isAnimated = !isAnimated;
    });
});