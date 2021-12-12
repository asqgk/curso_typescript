// Interfaces & Abstract

interface PaymentMethod {
    tax: number
    createPayment(orderId: string): boolean
    refoundPayment(orderId: string): boolean
}

abstract class PaymentMethodFactory {
    abstract create(): PaymentMethod
}

// Concretos

class PaypalMethod implements PaymentMethod{
    tax: number = 0.05

    createPayment(orderId: string): boolean {
        // do something
        console.log(`Cria a ordem de pagamento ${orderId} via Paypal com a taxa de ${this.tax}`)
        return true
    }

    refoundPayment(orderId: string): boolean {
        // do something
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`)
        return true
    }
}

class PaypalMethodFactory extends PaymentMethodFactory{
    create(): PaymentMethod{
        return new PaypalMethod()
    }
}

class PagseguroMethod implements PaymentMethod{
    tax: number = 0.02

    createPayment(orderId: string): boolean {
        // do something
        console.log(`Cria a ordem de pagamento ${orderId} via Pagseguro com a taxa de ${this.tax}`)
        return true
    }

    refoundPayment(orderId: string): boolean {
        // do something
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Pagseguro`)
        return true
    }
}

class PagseguroMethodFactory extends PaymentMethodFactory{
    create(): PaymentMethod{
        return new PagseguroMethod()
    }
}

// Client Code

function ClientCode(){
    let paymentMethod: PaymentMethod
    
    // entrou um pagamento via paypal
    const paypalMethodFactory = new PaypalMethodFactory()
    paymentMethod = paypalMethodFactory.create()
    paymentMethod.createPayment('Order01')

    // entrou um pagamento via pagseguro
    const pagseguroMethodFactory = new PagseguroMethodFactory()
    paymentMethod = pagseguroMethodFactory.create()
    paymentMethod.createPayment('Order02')
    paymentMethod.refoundPayment('Order02')
}

ClientCode()
