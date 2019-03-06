var katzDeliLine = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  //console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}

let array = [1,2,3,4]
array[0]

currentLine(["Ada", "Grace", "Kent"])

function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + line.shift() + ".";
  }
}

function takeANumber (line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");