const formBMI = document.getElementById('formBMI');

formBMI.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const input = document.getElementById('input');
    
    function caculateBMI(w, h){
        let BMI = parseFloat(w / ((h / 100) **2));
        if(BMI < 18.5) return "Underweight";
        if(BMI < 25.0) return "Normal";
        if(BMI < 30.0) return "Overweight";
        return "Obese";
    }
    
    input.innerText = `Chỉ số BMI là: ${caculateBMI(weight, height)}`;
})