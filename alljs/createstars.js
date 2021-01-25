for (var iterationNumber = 0; iterationNumber < 50; iterationNumber++) {
    createstars(500 + (iterationNumber*100));
}
 var iframes = document.querySelectorAll("iframe"); //select every element
        var iframeinside = {}; // create an object to store the instances
        var count = 1;
        //create a loop to store an id representing their state i.e inside = false or true
        iframes.forEach((iframe) => {
            var keyc = count.toString();
            currentIDname = `iframe${keyc}`; // making keys something like iframe1, iframe2, iframe3.....
            iframeinside[currentIDname] = false; // adding the key value pair to the object, setting everything to flase at first.
            iframe.setAttribute("id", currentIDname);
            count += 1;
        })
        doSth();
        document.addEventListener("scroll", doSth);

        function doSth() {
            iframes.forEach((iframe) => {

                var curname = iframe.getAttribute("id");
                if (isOutside(iframe, 100)) {
                    iframe.classList.remove('active');
                    iframeinside[curname] = false;
                } else if (isInside(iframe, 100)) {
                    iframe.classList.add('active');
                    iframeinside[curname] = true;
                }
            })
        }

        function isInside(element, bound) {
            var top = element.getBoundingClientRect().top;
            var inner = Number(window.innerHeight) - bound;
            var bottom = element.getBoundingClientRect().bottom;
            var curname = element.getAttribute("id");
            if ((!iframeinside[curname]) && (top < inner) && (bottom > bound)) {
                return true;
            }

            return false;
        }

        function isOutside(element, bound) {
            var top = element.getBoundingClientRect().top;
            var inner = Number(window.innerHeight) - bound;
            var bottom = element.getBoundingClientRect().bottom;
            var curname = element.getAttribute("id");
            if ((iframeinside[curname]) && ((bottom <= bound) || (top >= inner))) {
                return true;
            }
            return false;
        }
