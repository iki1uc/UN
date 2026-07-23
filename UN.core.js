class UN {

    constructor(){
        this.alpha = 0;
        this.beta = 0;
        this.gamma = 0;

        this.unity = 0;
        this.stabil = 0;
    }

    set(alpha, beta){
        this.alpha = alpha;
        this.beta = beta;
        this.gamma = alpha - beta;
    }

    compute(){
        this.unity = this.alpha + this.beta + this.gamma;
        this.stabil = UN_ANCHOR.get();

        return {
            alpha: this.alpha,
            beta: this.beta,
            gamma: this.gamma,
            unity: this.unity,
            stabil: this.stabil
        };
    }
}

window.UN = new UN();

