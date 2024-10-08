function generate(){

countries = ['AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA', 'ANTIGUA AND BARBUDA', 'ARGENTINA', 'ARMENIA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAN', 'BAHAMAS', 'BAHRAIN', 'BANGLADESH', 'BARBADOS', 'BELARUS', 'BELGIUM', 'BELIZE', 'BENIN', 'BHUTAN', 'BOLIVIA', 'BOSNIA AND HERZEGOVINA', 'BOTSWANA', 'BRAZIL', 'BRUNEI', 'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'CAPE VERDE', 'CAMBODIA', 'CAMEROON', 'CANADA', 'CENTRAL AFRICAN REPUBLIC', 'CHAD', 'CHILE', 'COLOMBIA', 'COMOROS', 'REPUBLIC OF THE CONGO', 'COSTA RICA', 'IVORY COAST', 'CROATIA', 'CUBA', 'CYPRUS', 'CZECHIA', 'NORTH KOREA', 'DEMOCRATIC REPUBLIC OF THE CONGO', 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN REPUBLIC', 'ECUADOR', 'EGYPT', 'EL SALVADOR', 'EQUITORIAL GUINEA', 'ERITREA', 'ESTONIA', 'ESTWATINI', 'ETHIOPIA', 'FIJI', 'FINLAND', 'FRANCE', 'GABON', 'GAMBIA', 'GEORGIA', 'GERMANY', 'GHANA', 'GREECE', 'GRENADA', 'GUATEMALA', 'GUINEA', 'GUINEA BISSAU', 'GUYANA', 'HAITI', 'HONDURAS', 'HUNGARY', 'ICELAND', 'INDIA', 'INDONESIA', 'IRAN', 'IRAQ', 'IRELAND', 'ISRAEL', 'ITALY', 'JAMAICA', 'JAPAN', 'JORDAN', 'KAZAKHSTAN', 'KENYA', 'KIRIBATI', 'KUWAIT', 'KIRIBATI', 'KYRGYZSTAN', 'LAOS', 'LATVIA', 'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYA', 'LIECHTENSTEIN', 'LITHUANIA', 'LUXEMBOURG', 'MADAGASCAR', 'MALAWI', 'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA', 'MARSHALL ISLANDS', 'MAURITANIA', 'MAURITIUS', 'MEXICO', 'MICRONESIA', 'MONACO', 'MONGOLIA', 'MONTENEGRO', 'MOROCCO', 'MOZAMBIQUE', 'MYANMAR', 'NAMIBIA', 'NAURU', 'NEPAL', 'NETHERLANDS', 'NEW ZEALAND', 'NICARAGUA', 'NIGER', 'NIGERIA', 'NORTH MACEDONIA', 'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PALESTINE', 'PANAMA', 'PAPUA NEW GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES', 'POLAND', 'PORTUGAL', 'QATAR', 'SOUTH KOREA', 'MOLDOVA', 'ROMANIA', 'RUSSIA', 'RWANDA', 'SAINT KITTS AND NEVIS', 'SAINT LUCIA', 'SAINT VINCENT AND THE GRENADINES', 'SAMOA', 'SAN MARINO', 'SAO TOME AND PRINCIPE', 'SAUDI ARABIA', 'SENEGAL', 'SERBIA', 'SEYCHELLES', 'SIERRA LEONE', 'SINGAPORE', 'SLOVAKIA', 'SLOVENIA', 'SOLOMON ISLANDS', 'SOMALIA', 'SOUTH AFRICA', 'SOUTH SUDAN', 'SPAIN', 'SRI LANKA', 'SUDAN', 'SURINAME', 'SWEDEN', 'SWITZERLAND', 'SYRIA', 'TAJIKISTAN', 'THAILAND', 'EAST TIMOR', 'TOGO', 'TONGA', 'TRINIDAD AND TOBAGO', 'TUNISIA', 'TURKEY', 'TURKMENISTAN', 'TUVALU', 'UGANDA', 'UKRAINE', 'UNITED ARAB EMIRATES', 'UNITED KINGDOM', 'TANZANIA', 'UNITED STATES OF AMERICA', 'URUGUAY', 'UZBEKISTAN', 'VANUATU', 'VATICAN CITY', 'VENEZUELA', 'VIETNAM', 'YEMEN', 'ZAMBIA', 'ZIMBABWE']
num = Math.floor(Math.random()*195)
ans = countries[num]
ansA = ans.split('')
blanks = ' _'.repeat(ans.length)
attemptA = blanks.split(' ')
delete attemptA[0]
mistakes = 0
lettersdone = []
document.getElementById('hangman').src = '0.png'
i = 0
while (i < ans.length){
            
    if (ansA[i] == ' '){
        attemptA[i+1] = '/' ; 
    }
i=i+1
}
document.getElementById('attempt').innerHTML = attemptA.join(' ')
}
function showHowToPlay(){
    document.getElementById('game').style.display = 'none'
    document.getElementById('nav').style.display = 'none'
    document.getElementById('howToPlay').style.display = 'block'
}
function hideHowToPlay(){
    document.getElementById('game').style.display = 'block'
    document.getElementById('nav').style.display = 'block'
    document.getElementById('howToPlay').style.display = 'none'
}
function A(){
    if (lettersdone.includes('A')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'A'){
                attemptA[i+1] = 'A' ; 
            }
        i=i+1
        }
    if (ansA.includes('A')){
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('A')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.')
            generate()
        }, 1000);
        
    }
}
function B(){
    if (lettersdone.includes('B')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'B'){
                attemptA[i+1] = 'B' ; 
            }
        i=i+1
        }
    if (ansA.includes('B')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('B')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function C(){
    if (lettersdone.includes('C')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'C'){
                attemptA[i+1] = 'C' ; 
            }
        i=i+1
        }
    if (ansA.includes('C')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('C')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function D(){
    if (lettersdone.includes('D')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'D'){
                attemptA[i+1] = 'D' ; 
            }
        i=i+1
        }
    if (ansA.includes('D')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('D')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function E(){
    if (lettersdone.includes('E')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'E'){
                attemptA[i+1] = 'E' ; 
            }
        i=i+1
        }
    if (ansA.includes('E')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('E')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function F(){
    if (lettersdone.includes('F')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'F'){
                attemptA[i+1] = 'F' ; 
            }
        i=i+1
        }
    if (ansA.includes('F')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('F')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function G(){
    if (lettersdone.includes('G')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'G'){
                attemptA[i+1] = 'G' ; 
            }
        i=i+1
        }
    if (ansA.includes('G')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('G')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function H(){
    if (lettersdone.includes('H')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'H'){
                attemptA[i+1] = 'H' ; 
            }
        i=i+1
        }
    if (ansA.includes('H')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('H')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function I(){
    if (lettersdone.includes('I')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'I'){
                attemptA[i+1] = 'I' ; 
            }
        i=i+1
        }
    if (ansA.includes('I')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('I')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function J(){
    if (lettersdone.includes('J')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'J'){
                attemptA[i+1] = 'J' ; 
            }
        i=i+1
        }
    if (ansA.includes('J')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('J')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function K(){
    if (lettersdone.includes('K')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'K'){
                attemptA[i+1] = 'K' ; 
            }
        i=i+1
        }
    if (ansA.includes('K')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('K')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function L(){
    if (lettersdone.includes('L')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'L'){
                attemptA[i+1] = 'L' ; 
            }
        i=i+1
        }
    if (ansA.includes('L')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('L')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function M(){
    if (lettersdone.includes('M')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'M'){
                attemptA[i+1] = 'M' ; 
            }
        i=i+1
        }
    if (ansA.includes('M')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('M')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function N(){
    if (lettersdone.includes('N')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'N'){
                attemptA[i+1] = 'N' ; 
            }
        i=i+1
        }
    if (ansA.includes('N')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('N')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function O(){
    if (lettersdone.includes('O')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'O'){
                attemptA[i+1] = 'O' ; 
            }
        i=i+1
        }
    if (ansA.includes('O')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('O')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function P(){
    if (lettersdone.includes('P')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'P'){
                attemptA[i+1] = 'P' ; 
            }
        i=i+1
        }
    if (ansA.includes('P')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('P')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function Q(){
    if (lettersdone.includes('Q')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'Q'){
                attemptA[i+1] = 'Q' ; 
            }
        i=i+1
        }
    if (ansA.includes('Q')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('Q')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function R(){
    if (lettersdone.includes('R')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'R'){
                attemptA[i+1] = 'R' ; 
            }
        i=i+1
        }
    if (ansA.includes('R')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('R')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function S(){
    if (lettersdone.includes('S')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'S'){
                attemptA[i+1] = 'S' ; 
            }
        i=i+1
        }
    if (ansA.includes('S')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('S')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function T(){
    if (lettersdone.includes('T')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'T'){
                attemptA[i+1] = 'T' ; 
            }
        i=i+1
        }
    if (ansA.includes('T')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('T')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function U(){
    if (lettersdone.includes('U')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'U'){
                attemptA[i+1] = 'U' ; 
            }
        i=i+1
        }
    if (ansA.includes('U')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('U')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function V(){
    if (lettersdone.includes('V')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'V'){
                attemptA[i+1] = 'V' ; 
            }
        i=i+1
        }
    if (ansA.includes('V')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('V')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function W(){
    if (lettersdone.includes('W')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'W'){
                attemptA[i+1] = 'W' ; 
            }
        i=i+1
        }
    if (ansA.includes('W')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('W')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function X(){
    if (lettersdone.includes('X')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'X'){
                attemptA[i+1] = 'X' ; 
            }
        i=i+1
        }
    if (ansA.includes('X')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('X')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function Y(){
    if (lettersdone.includes('Y')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'Y'){
                attemptA[i+1] = 'Y' ; 
            }
        i=i+1
        }
    if (ansA.includes('Y')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('Y')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}
function Z(){
    if (lettersdone.includes('Z')){
        alert('Already Guessed')
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == 'Z'){
                attemptA[i+1] = 'Z' ; 
            }
        i=i+1
        }
    if (ansA.includes('Z')){
    
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push('Z')
    if (mistakes == 7){
        setTimeout(()=>{
        alert('Game Over. Click OK to refresh, with a new challenge. The correct answer was ' + ans + '.')
        generate()
        },1000);
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            alert('You win. Click OK to refesh, with a new challenge.');
            generate()
        }, 1000);
        
    }
}