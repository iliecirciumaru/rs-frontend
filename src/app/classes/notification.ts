export class Notification {
    message: string;
    error: boolean;
    successVal: boolean;
    show: boolean;

    constructor() {
        this.reset();
    }

    reset() {
        this.message = '';
        this.error = false;
        this.successVal = false;
        this.show = false;
    }
    
    success(message:string) {
        this.error = false;
        this.message = message;
        this.successVal = true;
        this.show = true;
    }

    fail(message:string) {
        this.error = true;
        this.message = message;
        this.successVal = false;
        this.show = true;
    }
}