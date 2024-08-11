window.onload = function () {

    var circleSettingForm = document.getElementById("circle-setting-form");

    circleSettingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var width = e.target['width'].value;
        var growth_amount = e.target['growth_amount'].value;
        var grow_rate = e.target['grow_rate'].value;
        var number_circles = e.target['number_circles'].value;

        if (number_circles == null || number_circles == "") {
            number_circles = 1;
        }

        var playground = document.getElementsByClassName("playground")[0];
        for (let i = 0; i < number_circles; i++) {
            let circleContainer = document.createElement('div');
            circleContainer.className = "circle-container";
            if (number_circles > 1) {
                circleContainer.style.width = "50%";
            } else {
                circleContainer.style.width = "100%";
            }

            let circle = document.createElement('div');
            circle.className = "circle";

            circle.style.width=circle.style.height=width + "px";
            circleContainer.appendChild(circle);
            playground.appendChild(circleContainer);

            let growInterval = setInterval(function () {
                let current_size = parseInt(circle.style.width);
                let new_size = current_size + parseInt(growth_amount);
                circle.style.width = circle.style.height = new_size + "px";
            }, grow_rate);

            circle.addEventListener('click', function (e) {
                circleContainer.remove();
                clearInterval(growInterval);
            });
        }

    });
}
