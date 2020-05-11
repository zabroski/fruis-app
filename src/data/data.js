const data = {
    allSizes: (function(small, large) {
      let sizes = [];
      for (let i = small; i<= large; i++){
        sizes.push(i);
        sizes.push(i + 0.5)
      }
      return sizes;
    })(7, 11),
  
    allColors: ['red', 'blue', 'purple', 'brown'],
  
    bySize : {
      "7": [
        "red", "blue"
      ],
  
      "7.5": [
        "red", "blue"
      ],
  
      "8": [
        "red", 'brown', 'green', 'purple', 'blue'
      ],
      "8.5": [
        'red', 'blue'
      ],
      "9": [
        'brown', 'green', 'purple'
      ],
      "9.5": [
        'brown', 'green'
      ],
  
      "10": [
        'red', 'green', 'blue', 'brown'
      ],
  
      "10.5": [
        'red','green'
      ]
  
    },
  
    byColor: {
      "red" :['7','8', '8.5'],
      "blue":[ '7', '7.5', '8', '8.5'],
      "brown" :['8', '9', '9.5', '10'],
      "purple": ['9', '9.5', '10.5'],
      "green": [ '8', '9', '9.5', '10', '']
    }
  
  }

export default data; 