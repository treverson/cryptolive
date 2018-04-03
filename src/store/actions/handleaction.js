export class handleAction {
    static GETDATA_1 = "GETDATA_1";
   
    static GETGLOBAL = 'GETGLOBAL';
    static GETCRYPTODETAIL = 'GETCRYPTODETAIL';
    static TABLEGRAPH = 'TABLEGRAPH';

    static LOGIN = "LOGIN";
    static SIGNUP = "SIGNUP";

    static USERPROFILE = "USER PROFILE";

    static PASSWORD_RESET = "PASSWORD_RESET";

    static SENDRATING = "SENDRATING";
    static GETRATING = "GETRATING"

    static SENDCRYPTO = "SENDCRYPTO";
    static GETCRYPTO = "GETCRYPTO";

    static SEND_ICO = "SEND_ICO";
    static GET_ICO = "GET_ICO";

    static SEND_UC_ICO = "SEND_UC_ICO";
    static GET_UC_ICO = "GET_UC_ICO";

    static SEND_END_ICO = "SEND_END_ICO";
    static GET_END_ICO = "GET_END_ICO";

    static SEND_MARKET = "SEND_MARKET";
    static GET_MARKET = "GET_MARKET";

    // user authentication and profile firebase
    static login = (payload) => ({
        type: handleAction.LOGIN,
        payload
    })
    static signup = (payload) => ({
        type: handleAction.SIGNUP,
        payload
    })
    static resetpass = (payload) => ({
        type: handleAction.PASSWORD_RESET,
        payload
    })
    static userprofile = (payload) => ({
        type: handleAction.USERPROFILE,
        payload
    })

    // rating data firebase
    static sendRating = (payload) => ({
        type: handleAction.SENDRATING,
        payload
    })
    static getRating = (payload) => ({
        type: handleAction.GETRATING,
        payload
    })

    // crypto currency data firebase
    static send_crypto = (payload) => ({
        type: handleAction.SENDCRYPTO,
        payload
    })
    static get_crypto = (payload) => ({
        type: handleAction.GETCRYPTO,
        payload
    })

    // ico data firebase
    static send_ICO = (payload) => ({
        type: handleAction.SEND_ICO,
        payload
    })
    static get_ICO = (payload) => ({
        type: handleAction.GET_ICO,
        payload
    })

    static send_uc_ICO = (payload) => ({
        type: handleAction.SEND_UC_ICO,
        payload
    })
    static get_uc_ICO = (payload) => ({
        type: handleAction.GET_UC_ICO,
        payload
    })

    static send_end_ICO = (payload) => ({
        type: handleAction.SEND_END_ICO,
        payload
    })
    static get_end_ICO = (payload) => ({
        type: handleAction.GET_END_ICO,
        payload
    })

    static send_market = (payload) => ({
        type: handleAction.SEND_MARKET,
        payload
    })
    static get_market = (payload) => ({
        type: handleAction.GET_MARKET,
        payload
    })

    static getData1 = (payload) => ({
        type: handleAction.GETDATA_1,
        payload
    })

    static getGlobal = (payload) => ({
        type: handleAction.GETGLOBAL,
        payload
    })

    static getCryptoDetail = (payload) => ({
        type: handleAction.GETCRYPTODETAIL,
        payload
    })

    static getBitcoin = (payload) => ({
        type: handleAction.GETBITCOIN,
        payload
    })

}