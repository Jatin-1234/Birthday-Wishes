var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("data:image/jpeg;base64,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nmfHhbf0ZaFW9te2WcWCsMxJIOwFm6nxHeBnrj4mX6QXcvQLVpK8fWtA1Dn1axQfuAwPlJ2Q49ErTO+SIiESIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIMDl36Ru0mOpNeSURAuAehZdzEe8h1GfQY4yc4OzFYLXVVlrbCVqU4wPV2x9gDJ+Akf3rdn1Vtux9pO5SRwQDsU5HThCeeeJL/AKL336uxzyRpyM+S5dMAenQ/dLu+K447fLvw5taZt4j7f6Q/ens1dPqjXkP9GhzzksR4i49S24+4EDym27vtr09Izbcdmfj1J9B1+ABkl+k7RhNRVdz9JWVbAzjYwG4j4WKP4R6zQ7iahW19bMGwFdUYqcBypAGeg43Dn/WKZK1x63yXx2veLTHGvpxDqXZmkFNNdQORXWlYPrtULn8JsxEpcmdkREBERAREQEREBERAREQEREBERAREQEREBERAT4Z9gwKZ2FpLLKxdRdQ6uMBG3AoA7sqs658QD4OVm9pVs01rW6hUFb1qm+rcy0lWYk2EgHB3jxYwNnOOs+anusVbdprDWwAUckMFAwEFi9VHkHDgdBgTGdN2vjb7Wr0yfZn/AD7B/wBkr3bxLT20tO4mOff9jvoD9DYudq79zqyDC+BwNzqVGSinLFR4R4h5+NFTTqACuts3qVcIRp1KOpDKWTbuIyB54I++T3Yegaiiupm3FARn4knA9wzgfDymrru6+jtOWpGTydpZQSeSdoO3PvxOzFka3pHE+nrH7tjsvXl2etwgtq279jZRg2drr5jO1vCeRjzGCZGR/ZHY2n0qlaEChjljkksR0yT+UkJKN65VX7d/p8ERE6iREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=",function(img){
block_object=img;

block_object.scaleToWidth("700");
block_object.scaleToHieght("510");
block_object.set({
top:0,
left:0
});
canvas.add(block_object)	
});

}

function playSound(){
x.play();
}
