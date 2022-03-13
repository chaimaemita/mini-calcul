class calcul{
    constructor(stnumberandtextelement,ndnumbertexteelement){
        this.stnumberandtextelement = stnumberandtextelement
        this.ndnumbertexteelement= ndnumbertexteelement
        this.clear()
    }
    
    clear(){
        this.stnumber =''
        this.ndnumber =''
        this.operation = undefined
    }

    delete(){
        this.stnumber= this.stnumber.toString().slice(0,-1)
    }

    appendnumber(number){
        if (number === '.' && this.stnumber.includes('.'))return
        this.stnumber.toString() + number.toString()
    }

    chooseoperation(operation){
        if (this.stnumber === '') return
        if (this.stnumber !== '') {
            this.operate()
        }  
        this.operation = operation
        this.ndnumber = this.stnumber
        this.stnumber = '' 
    }
    operate(){
        let operate
        const first = parseFloat(this.stnumber) 
        const second = parseFloat(this.ndnumber)
        if(isNaN(first) || isNaN(second))return
        switch (this.operation) {
            case '+':
                operate = first + second
                break
            case '-':
                operate = first - second
                break
            case '*':
                operate = first * second
                break
            case '/':
                operate = first / second
                break
            default:
                return
        }
        this.ndnumber = operate
        this.operation = undefined
        this.stnumber = ''
    }
}
    const numberInput = document.querySelectorAll('[data-number]')
    const operationInput = document.querySelectorAll('[data-operation]')
    const equalInput = document.querySelector('[data-equal]')
    const deleteInput = document.querySelector('[data-delete]')
    const allclearInput = document.querySelector('[data-all-clear]')
    const stnumberandtextelement = document.querySelector('[data-stnumber]')
    const ndnumbertexteelement = document.querySelector('data-ndnumber')

    const calcul = new calcul(stnumberandtextelement,ndnumbertexteelement)

    numberInput.forEach(input => {
        input.addEventListener('click',() =>{
            calcul.appendnumber(input.innerText)
            calcul.updatedisplay()
        })
    })

    operationInput.forEach(input => {
        input.addEventListener('click' , () =>{
            calcul.chooseoperation(input.innerText)
        })
    })

    equalInput.addEventListener('click', input => {
        calcul.operation()
        calcul.updateDisplay()
    })
      
    allClearInput.addEventListener('click', input => {
        calculator.clear()
        calculator.updateDisplay()
      })
      
      deleteInput.addEventListener('click', input => {
        calculator.delete()
        calculator.updateDisplay()
      })