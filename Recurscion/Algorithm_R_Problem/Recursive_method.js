// Write an Algorithm to extract input English Language sentence characters and convert the characters to the 8-bit BINARY patterns.Import the ASCII Object attached into your source code.

// INPUT - ABCD   // OUTPUT - [ '01000001', '01000010', '00100000', '01000011', '01000100' ]

var​ ascii = {    
         A   :   ​65​  ,   
         B   :   ​66​  ,   
         C   :   ​67​  ,   
         D   :   ​68​  ,    
         E   :   ​69​  ,    
         F   :   ​70​  ,    
         G   :   ​71​  ,   
         H   :   ​72​  ,    I   :   ​73​  ,    J   :   ​74​  ,    K   :   ​75​  ,    L   :   ​76​  ,    M   :   ​77​  ,    N   :   ​78​  ,    O   :   ​79​  ,    P   :   ​80​  ,    Q   :   ​81​  ,    R   :   ​82​  ,    S   :   ​83​  ,    T   :   ​84​  ,    U   :   ​85​  ,    V   :   ​86​  ,    W   :   ​87​  ,    X   :   ​88​  ,    Y   :   ​89​  ,    Z   :   ​90​  ,    a   :   ​97​  ,    b   :   ​98​  ,    c   :   ​99​  ,    d   :   ​100​ ,    e   :   ​101​ ,    f   :   ​102​ ,    g   :   ​103​ ,    h   :   ​104​ ,    i   :   ​105​ ,
   
         j   :   ​106​ ,    k   :   ​107​ ,    l   :   ​108​ ,    m   :   ​109​ ,    n   :   ​110​ ,    o   :   ​111​ ,    p   :   ​112​ ,    q   :   ​113​ ,    r   :   ​114​ ,    s   :   ​115​ ,    t   :   ​116​ ,    u   :   ​117​ ,    v   :   ​118​ ,    w   :   ​119​ ,    x   :   ​120​ ,    y   :   ​121​ ,    z   :   ​122​ ,​' '​ :   ​32​  ,​':'​ :   ​58​  ,​';'​ :   ​59​  ,​'<'​ :   ​60​  ,​'='​ :   ​61​  ,​'>'​ :   ​62​  ,​'?'​ :   ​63​  ,​'@'​ :   ​64​  ,​'/'​ :   ​47​  ,​'0'​ :   ​48​  ,​'1'​ :   ​49​  ,​'2'​ :   ​50​  ,​'3'​ :   ​51​  ,​'4'​ :   ​52​  ,​'5'​ :   ​53​  ,​'6'​ :   ​54​  ,​'7'​ :   ​55​  ,​'8'​ :   ​56​  ,​'9'​ :   ​57}

        
         // Step 1- traverse the string 

         // Step 2- convert every character to their charcode

         // Step 3- convert the charcode to binary

         // Step 4- push it into an array and add the left 0s

         // Step 5- return a string separated by space

         var ascii = {
          A: 65,
          B: 66,
          C: 67,
          D: 68,

        }        



function foo(binaryToString) {
let bi = [];

binaryToString.split('').forEach(function(element) {
  k = '';
  for (const prop in ascii) {
    if (prop == element) {
      var x = ascii[prop];
      break;
    }
  }
  bi.push(binaryToString.padStart(8, '0'));
});



}        

foo('ABCD')