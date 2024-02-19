(function() {
    "use strict";
    var e = {
        719: function(e, E, t) {
            t.d(E, {
                EH: function() {
                    return o
                },
                O7: function() {
                    return n
                },
                o0: function() {
                    return i
                }
            });
            var a = t(6582);
            function i(e) {
                return (0,
                a.Z)({
                    url: "/index/content",
                    method: "get",
                    params: e
                })
            }
            function n() {
                return (0,
                a.Z)({
                    url: "/index/coinlist",
                    method: "get"
                })
            }
            function o() {
                return (0,
                a.Z)({
                    url: "/index/popups",
                    method: "get"
                })
            }
        },
        7065: function(e, E, t) {
            t.d(E, {
                A: function() {
                    return i
                },
                k: function() {
                    return n
                }
            });
            var a = t(6582);
            function i() {
                return (0,
                a.Z)({
                    url: "/index/carousel",
                    method: "get"
                })
            }
            function n() {
                return (0,
                a.Z)({
                    url: "/index/config",
                    method: "get"
                })
            }
        },
        4302: function(e, E, t) {
            t.d(E, {
                a: function() {
                    return g
                },
                D: function() {
                    return f
                }
            });
            var a = t(8099)
              , i = t(7820)
              , n = t(4788)
              , o = t(9487)
              , r = t(1771)
              , s = t(5984)
              , A = t(2983)
              , R = t(255)
              , c = t(1823)
              , T = t(2335)
              , I = {
                name: "Nome",
                tel: "Fone",
                save: "Salvar",
                clear: "Claro",
                cancel: "Cancelar",
                confirm: "Confirmar",
                delete: "Excluir",
                loading: "Carregando...",
                noCoupon: "Nenhum cupom",
                nameEmpty: "Por favor, preencha o nome",
                addContact: "Adicionar novo contato",
                telInvalid: "Telefone em formato inválido",
                vanCalendar: {
                    end: "Fim",
                    start: "Início",
                    title: "Calendário",
                    weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                    monthTitle: (e,E)=>`${E}/${e}`,
                    rangePrompt: e=>`Escolha no máximo ${e} dias`
                },
                vanCascader: {
                    select: "Selecione"
                },
                vanPagination: {
                    prev: "Anterior",
                    next: "Próximo"
                },
                vanPullRefresh: {
                    pulling: "Puxe para atualizar...",
                    loosing: "Solte para atualizar..."
                },
                vanSubmitBar: {
                    label: "Total:"
                },
                vanCoupon: {
                    unlimited: "Ilimitado",
                    discount: e=>10 * e + "% de desconto",
                    condition: e=>`Pelo menos ${e}`
                },
                vanCouponCell: {
                    title: "Cupom",
                    count: e=>`Você possui ${e} cupom(ns)`
                },
                vanCouponList: {
                    exchange: "Usar",
                    close: "Fechar",
                    enable: "Disponível",
                    disabled: "Indisponível",
                    placeholder: "Código do cupom"
                },
                vanAddressEdit: {
                    area: "Área",
                    areaEmpty: "Por favor, selecione uma área de recebimento",
                    addressEmpty: "Endereço não pode ser vazio",
                    addressDetail: "Endereço",
                    defaultAddress: "Usar como endereço padrão"
                },
                vanAddressList: {
                    add: "Adicionar novo endereço"
                }
            }
              , l = {
                name: "이름",
                tel: "핸드폰",
                save: "구하다",
                clear: "분명한",
                cancel: "취소",
                confirm: "확인",
                delete: "삭제",
                loading: "로딩 중...",
                noCoupon: "쿠폰 없음",
                nameEmpty: "이름을 기입해주세요",
                addContact: "새 연락처 추가",
                telInvalid: "잘못된 전화번호",
                vanCalendar: {
                    end: "끝",
                    start: "시작",
                    title: "달력",
                    weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                    monthTitle: (e,E)=>`${e}/${E}`,
                    rangePrompt: e=>`${e} 일 이내로 선택`
                },
                vanCascader: {
                    select: "선택하다"
                },
                vanPagination: {
                    prev: "이전의",
                    next: "다음"
                },
                vanPullRefresh: {
                    pulling: "당겨서 새로고침...",
                    loosing: "새로 고침..."
                },
                vanSubmitBar: {
                    label: "총:"
                },
                vanCoupon: {
                    unlimited: "제한 없는",
                    discount: e=>10 * e + "% 할인",
                    condition: e=>`최소 ${e}`
                },
                vanCouponCell: {
                    title: "쿠폰",
                    count: e=>`${e} 개의 쿠폰이 있습니다`
                },
                vanCouponList: {
                    exchange: "교환",
                    close: "닫다",
                    enable: "사용 가능",
                    disabled: "없는",
                    placeholder: "쿠폰 코드"
                },
                vanAddressEdit: {
                    area: "지역",
                    areaEmpty: "접수지역을 선택해주세요",
                    addressEmpty: "주소는 비워둘 수 없습니다",
                    addressDetail: "주소",
                    defaultAddress: "기본 주소로 설정"
                },
                vanAddressList: {
                    add: "새 주소 추가"
                }
            }
              , N = {
                name: "Имя",
                tel: "Телефон",
                save: "Сохранить",
                clear: "Прозрачный",
                cancel: "Отмена",
                confirm: "Подтвердить",
                delete: "Удалить",
                loading: "Загрузка...",
                noCoupon: "Нет купонов",
                nameEmpty: "Пожалуйста укажите имя",
                addContact: "Создать контакт",
                telInvalid: "Некорректный номер телефона",
                vanCalendar: {
                    end: "Конец",
                    start: "Начало",
                    title: "Календарь",
                    weekdays: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
                    monthTitle: (e,E)=>`${e}/${E}`,
                    rangePrompt: e=>`Укажите более ${e} дней`
                },
                vanCascader: {
                    select: "Выбрать"
                },
                vanPagination: {
                    prev: "Назад",
                    next: "Вперед"
                },
                vanPullRefresh: {
                    pulling: "Потяните для обновления...",
                    loosing: "Отпустите для обновления..."
                },
                vanSubmitBar: {
                    label: "Всего:"
                },
                vanCoupon: {
                    unlimited: "Безлимитный",
                    discount: e=>10 * e + "% скидка",
                    condition: e=>`Как минимум ${e}`
                },
                vanCouponCell: {
                    title: "Купон",
                    count: e=>`У вас есть ${e} купонов`
                },
                vanCouponList: {
                    exchange: "Обмен",
                    close: "Закрыть",
                    enable: "Доступно",
                    disabled: "Недоступно",
                    placeholder: "Код купона"
                },
                vanAddressEdit: {
                    area: "Область",
                    areaEmpty: "Укажите зону доставки",
                    addressEmpty: "Адрес не может быть пустым",
                    addressDetail: "Адрес",
                    defaultAddress: "Сделать адресом по умолчанию"
                },
                vanAddressList: {
                    add: "Новый адрес"
                }
            }
              , d = {
                app: {
                    hello: "HELLO, WORLD!",
                    download: "Download and Open the App",
                    common: {
                        input: "ENTER ",
                        select: "SELECT",
                        upload: "UPLOAD",
                        confirm: "CONFIRM",
                        cancel: "CANCEL",
                        submit: "SUBMIT",
                        save: "SAVE",
                        paste: "PASTE",
                        noorder: "NO ORDER",
                        noData: "No data"
                    },
                    msg: {
                        limitsendcode: "The maximum number of attempts to obtain a verification code has been reached. Please try again tomorrow.",
                        hint: "PROMPTS",
                        know: "I GOT IT.",
                        notShownToday: "NOT SHOWN TODAY.",
                        copy: "COPY SUCCESS",
                        success: "SUCCESSFUL OPERATION！",
                        wait: "PLEASE LOOK FORWARD TO！",
                        keeplogin: "KEEPLOGIN",
                        username: "USERNAME",
                        userid: "USERID",
                        nickname: "NICKNAME",
                        password: "PASSWORD",
                        signup: "REGISTRATIONS",
                        signin: "SIGNIN",
                        signout: "SIGNOUT",
                        guest: "GUEST",
                        welcome: "HELLO！",
                        add: "INCREASE",
                        edit: "EDIT",
                        delete: "DELETE",
                        move: "MOBILITY",
                        name: "NAME",
                        status: "STATUS",
                        weigh: "WEIGHT",
                        operate: "OPERATION",
                        warning: "TIP",
                        default: "DEFAULT",
                        article: "ARTICLE",
                        page: "PAGE",
                        ok: "CONFIRM",
                        cancel: "CANCEL",
                        loading: "LOADING",
                        more: "MORE",
                        normal: "NORMAL",
                        hidden: "HIDDEN",
                        submit: "SUBMIT",
                        reset: "RESET",
                        execute: "EXECUTE",
                        close: "CLOSE",
                        search: "SEARCH",
                        refresh: "REFRESH",
                        first: "HOME PAGE",
                        previous: "PREVIOUS PAGE",
                        next: "NEXT PAGE",
                        last: "LAST PAGE",
                        none: "NONE",
                        home: "HOME",
                        online: "ONLINE",
                        logout: "LOGOUT",
                        profile: "PERSONAL PROFILE",
                        index: "HOME PAGE",
                        hot: "POPULAR",
                        recommend: "RECOMMEND",
                        console: "CONSOLE",
                        code: "SERIAL NUMBER",
                        message: "ELEMENT",
                        line: "LINE NUMBER",
                        file: "FILE",
                        menu: "MENU",
                        type: "TYPE",
                        title: "TITLE",
                        content: "CONTENT",
                        append: "APPEND",
                        memo: "MEMO",
                        parent: "PARENT LEVEL",
                        params: "PARAMETERS",
                        permission: "PERMISSION",
                        advancesearch: "ADVANCED SEARCH",
                        checkall: "CHECK ALL",
                        expandall: "EXPAND ALL",
                        begintime: "STARTING TIME",
                        endtime: "END TIME",
                        createtime: "CREATION TIME",
                        flag: "LOGOS",
                        pleaseloginfirst: "PLEASE LOGIN TO OPERATE",
                        uploadedsuccessful: "UPLOADED SUCCESSFULLY",
                        youcanuploaduptodfiles: "YOU CAN ALSO UPLOAD UP TO MULTIPLE FILES",
                        youcanchooseuptodfiles: "YOU CAN ALSO SELECT UP TO MULTIPLE FILES",
                        chunkfilewriteerror: "SEGMENTED WRITE FAILURE",
                        chunkfileinfoerror: "SEGMENT FILE ERROR",
                        chunkfilemergeerror: "SEGMENT MERGE ERROR",
                        chunkfiledisabled: "SPLIT UPLOAD IS NOT ENABLED",
                        cancelupload: "CANCEL UPLOAD",
                        uploadcanceled: "UPLOAD CANCELED",
                        nofileuploadorserveruploadlimitexceeded: "FILES NOT UPLOADED OR SERVER UPLOAD LIMIT EXCEEDED",
                        uploadedfileformatislimited: "RESTRICTED UPLOAD FILE FORMAT",
                        uploadedfileisnotavalidimage: "UPLOADING A FILE THAT IS NOT A VALID IMAGE FILE",
                        areyousureyouwanttocancelthisupload: "CONFIRM CANCEL UPLOAD",
                        removefile: "REMOVE FILES",
                        youcanonlyuploadamaximumofsfiles: "YOU ARE ALLOWED TO UPLOAD A MAXIMUM OF FILES",
                        youcantuploadfilesofthistype: "FILE TYPES NOT ALLOWED TO BE UPLOADED",
                        serverrespondedwithscode: "SERVER-SIDE RESPONSE",
                        fileistoobigsmibmaxfilesizesmib: "CURRENT UPLOAD M, MAXIMUM ALLOWABLE UPLOAD FILE SIZE M",
                        redirectnow: "REDIRECT NOW",
                        operationcompleted: "SUCCESSFUL OPERATION!",
                        operationfailed: "FAILURE OF OPERATION!",
                        unknowndataformat: "UNKNOWN DATA FORMAT!",
                        networkerror: "NETWORK ERRORS!",
                        advancedsearch: "ADVANCED SEARCH",
                        invalidparameters: "UNKNOWN PARAMETER",
                        noresultswerefound: "RECORD NOT FOUND",
                        parameterscannotbeempty: "PARAMETERS CANNOT BE EMPTY",
                        youhavenopermission: "YOU DO NOT HAVE ACCESS.",
                        anunexpectederroroccurred: "THERE IS BEEN AN UNEXPECTED ERROR. THE PROGRAMMER IS WORKING ON IT.",
                        thispagewillberedirectedinsseconds: "THE PAGE WILL BE AUTOMATICALLY REDIRECTED IN SECONDS",
                        parametererror: "PARAMETER ERROR",
                        passwordmustbecharacters: "PASSWORD MUST BE 6-30 CHARACTERS",
                        insufficientbalance: "THE BALANCE IS INSUFFICIENT.",
                        recharge: "RECHARGE",
                        withdraw: "WITHDRAW",
                        cointransaction: "SPOT",
                        withdrawalrefusal: "WITHDRAWAL REJECTION",
                        secondcontractorder: "FEATURES ORDERS",
                        secondcontractwin: "FEATURES WINS",
                        cointransactioniscancelled: "SPOT CANCEL",
                        placeanorderforcointrading: "SPOT ORDER",
                        plusdeduction: "PLUS DEDUCTION",
                        orderdoesnotexist: "ORDER DOES NOT EXIST",
                        typeerror: "TYPE ERROR",
                        cointransactionisnotenabledforthiscurrency: "CURRENCY DOES NOT SUPPORT SPOT",
                        limitunitpricecannotbeempty: "LIMIT UNIT PRICE CANNOT BE EMPTY",
                        ordersuccessful: "ORDER SUCCESSFUL",
                        pleaseentertheamounttosell: "PLEASE ENTER THE AMOUNT OF THE SALE",
                        high: "HIGH",
                        low: "LOW",
                        ongoing: "PENDING SETTLEMENT",
                        closed: "SETTLED",
                        contractdoesnotexist: "FEATURES",
                        pleasecompleterealnameauthenticationfirst: "PLEASE COMPLETE THE REAL NAME AUTHENTICATION FIRST",
                        settlementperioddoesnotexist: "SETTLEMENT CYCLE DOES NOT EXIST",
                        amountofinvestmentexceedsthelimit: "INVESTMENTS EXCEEDED THE LIMIT",
                        currencydoesnotexist: "CURRENCY NOT AVAILABLE",
                        orderfailure: "ORDER FAILURE",
                        secondcontractisnotenabledforthiscurrency: "FEATURES IS NOT ENABLED FOR THIS CURRENCY",
                        limitordertrading: "SPOT LIMIT ORDER",
                        limitorderwaspurchasedsuccessfully: "SPOT LIMIT ORDER PURCHASE SUCCESSFUL",
                        minimumtopuplimit: "MINIMUM RECHARGE LIMIT",
                        maximumtopuplimit: "MAXIMUM RECHARGE LIMIT",
                        rechargesuccessfully: "RECHARGE SUCCESSFULLY",
                        pending: "PENDING",
                        successful: "SUCCESSFUL",
                        fail: "FAIL",
                        usercenter: "MEMBER CENTER",
                        register: "SIGN UP",
                        login: "LOGIN",
                        signupsuccessful: "SUCCESSFUL REGISTRATION",
                        usernamecannotbeempty: "USER NAME CANNOT BE EMPTY",
                        usernamemustbe3to30characters: "USERNAME MUST BE 3-30 CHARACTERS",
                        usernamemustbe6to30characters: "USERNAME MUST BE 6-30 CHARACTERS",
                        passwordcannotbeempty: "PASSWORD CANNOT BE EMPTY",
                        mobileisincorrect: "INCORRECT PHONE FORMAT",
                        usernamealreadyexist: "USERNAME ALREADY EXISTS",
                        nicknamealreadyexist: "NICKNAME ALREADY EXISTS",
                        emailalreadyexist: "EMAIL ALREADY EXISTS",
                        mobilealreadyexist: "PHONE NUMBER ALREADY EXISTS",
                        usernameisincorrect: "INCORRECT USERNAME",
                        emailisincorrect: "INCORRECT EMAIL ADDRESS",
                        accountislocked: "THE ACCOUNT HAS BEEN LOCKED.",
                        passwordisincorrect: "INCORRECT PASSWORD",
                        accountisincorrect: "ACCOUNTS DO NOT EXIST",
                        accountnotexist: "ACCOUNT DOES NOT EXIST",
                        invitationcodedoesnotexist: "INVITATION CODE DOES NOT EXIST",
                        accountcannotbeempty: "ACCOUNT CANNOT BE EMPTY",
                        usernameorpasswordisincorrect: "INCORRECT USERNAME OR PASSWORD",
                        youarenotloggedin: "YOU ARE NOT CURRENTLY LOGGED IN",
                        youveloggedindonotloginagain: "YOU ALREADY EXIST PLEASE DO NOT LOGIN AGAIN",
                        verifyemail: "EMAIL VERIFICATION",
                        changepassword: "MODIFY PASSWORD",
                        captchaisincorrect: "THE VERIFICATION CODE IS INCORRECT",
                        loggedinsuccessful: "LOGIN SUCCESSFUL",
                        logoutsuccessful: "LOGOUT SUCCESSFUL",
                        changepasswordfailure: "FAILED TO CHANGE PASSWORD",
                        resetpasswordsuccessful: "RESET PASSWORD SUCCESSFULLY",
                        sendfrequently: "FREQUENT SENDING",
                        accountalreadyexist: "THIS ACCOUNT ALREADY EXISTS",
                        unregistered: "UNREGISTERED",
                        sendsuccessfully: "SENT SUCCESSFULLY",
                        sendfail: "SEND FAILURE",
                        thegraphicverificationcodeisincorrect: "GRAPHIC CAPTCHA ERROR",
                        documenttypeerror: "INCORRECT DOCUMENT TYPE",
                        datasubmittedsuccessfully: "INFORMATION SUBMITTED SUCCESSFULLY",
                        datasubmissionfailure: "FAILURE TO SUBMIT INFORMATION",
                        certificationunderreview: "CERTIFICATION IS UNDER REVIEW",
                        duplicatedocumentnumber: "DUPLICATE DOCUMENT NUMBER",
                        withdrawaltime: "WITHDRAWAL TIME IS",
                        minimumwithdrawalamount: "THE MINIMUM WITHDRAWAL AMOUNT ",
                        withdrawalpasswordfault: "INCORRECT WITHDRAWAL PASSWORD",
                        withdrawsuccessfully: "WITHDRAWAL SUCCESSFUL",
                        passwordsetsuccessfully: "PASSWORD SET SUCCESSFULLY",
                        passwordsetfail: "PASSWORD SET UP SUCCESSFULLY",
                        oldandnewpasswordsarethesame: "OLD AND NEW PASSWORDS ARE THE SAME",
                        oldwithdrawalpasswordfault: "OLD PASSWORD ERROR",
                        passwordalreadyexists: "PASSWORD ALREADY EXISTS",
                        changepasswordsuccessful: "CHANGE PASSWORD SUCCESSFULLY",
                        withdrawalisnotopened: "WITHDRAWAL PROHIBITED, PLEASE CONTACT CUSTOMER SERVICE FOR PROCESSING",
                        withdrawaladdresshasbeenused: "WITHDRAWAL ADDRESS USED",
                        pleasecontactcustomerservice: "TRADING HAS BEEN DISABLED, PLEASE CONTACT CUSTOMER SERVICE",
                        itemexist: "ITEM DOES NOT EXIST",
                        eligiblepurchase: "NOT ELIGIBLE FOR PURCHASE",
                        outsidelimit: "OUTSIDE THE LIMIT",
                        nopurchasetimes: "NO PURCHASE TIMES",
                        pleasetryagainlater: "PLEASE TRY AGAIN LATER"
                    },
                    tab: {
                        home: "HOME",
                        market: "MARKET",
                        trade: "TRADE",
                        contract: "FEATURES",
                        assets: "WALLETS"
                    },
                    home: {
                        login: "LOGIN",
                        register: "SIGN UP",
                        coinTopUp: "DEPOSIT",
                        coinTopDown: "WITHDRAW",
                        ieo: "IEO",
                        staking: "STAKING",
                        service: "SERVICES",
                        buyCoin: "BUY COINS",
                        transactionPair: "NAME",
                        recentQuotation: "LAST PRICE",
                        change: "24H CHG%",
                        comingsoon: "COMMING SOON"
                    },
                    lang: {
                        lang: "LANGUAGE MANAGEMENT"
                    },
                    notice: {
                        notice: "NOTIFICATIONS"
                    },
                    agreement: {
                        agreement: "SERVICE AGREEMENTS"
                    },
                    user: {
                        user: "USER",
                        login: "LOGIN",
                        register: "SIGN UP",
                        email: "EMAIL",
                        phone: "PHONE",
                        phonenumber: "PHONE NUMBER",
                        pwd: "PASSWORD",
                        forgetpwd: "FORGOT PASSWORD",
                        userreg: "SIGN UP",
                        emailErrMsg: "INCORRECT EMAIL FORMAT",
                        phoneErrMsg: "INCORRECT PHONE FORMAT",
                        pwdErrMsg1: "ONLY NUMBERS, LETTERS OR -*/+. ~! @#$%^&*(), ETC.",
                        pwdErrMsg2: "CONTAINS AT LEAST THE NUMBER",
                        pwdErrMsg3: "CONTAINS AT LEAST THE LETTERS",
                        pwdErrMsg4: "LENGTHS 6-20",
                        gvc: "GRAPHICAL CAPTCHA ",
                        checkCode: "VERIFICATION CODE",
                        invCode: "INVITATION CODE",
                        getCode: "SEND",
                        regain: "RESEND",
                        newPwd: "NEW PASSWORD"
                    },
                    userInfo: {
                        userInfo: "ACCOUNT INFO",
                        creditScore: "CREDIT SCORE",
                        inviteCode: "INVITATION CODE",
                        authentication: "VERIFICATIONS",
                        authenticated: "APPROVED",
                        authenticatefail: "AUTHENTICATION FAILURES",
                        authenticating: "AUTHENTICATING",
                        lang: "LANGUAGE",
                        withdrawalAdd: "WITHDRAWAL ADDRESS",
                        setpwd: "PASSWORD",
                        support: "HELP CENTER",
                        notice: "NOTIFICATIONS",
                        newNotice: "NEW NOTICE",
                        invite: "MY INVITATION",
                        aboutUs: "ABOUT US",
                        msb: "MSB APPROVAL",
                        exit: "LOG OUT",
                        service: "ONLINE CUSTOMER SERVICE"
                    },
                    auth: {
                        name: "NAME",
                        IDType: "SELECT ID TYPE",
                        cardBack: "UPLOAD THE REVERSE SIDE OF YOUR DOCUMENTS",
                        cardFront: "UPLOAD THE FRONT OF THE DOCUMENT",
                        IDCard: "ID CARD",
                        passport: "PASSPORT",
                        cardErrMsg: "PLEASE SELECT DOCUMENT TYPE",
                        idnumber: "ID NO.",
                        idnumberErrMsg: "PLEASE ENTER THE CORRECT ID NUMBER",
                        overSize: "IMAGE SIZE CANNOT EXCEED",
                        realImage: "PLEASE ENTER THE CORRECT PICTURE OF YOUR ID",
                        uploading: "UPLOADING",
                        uploadFail: "UPLOAD FAILED",
                        waitUpload: "PLEASE WAIT FOR THE IMAGE UPLOAD TO COMPLETE",
                        reSub: "RESUBMIT",
                        pending: "PENDING",
                        approve: "APPROVE",
                        authenticating: "REAL-NAME AUTHENTICATION IS UNDER REVIEW",
                        waitauthentication: "WAIT FOR THE AUDIT TO COMPLETE AND OPERATE",
                        authenticatefail: "REAL NAME AUTHENTICATION FAILURE",
                        reauthentication: "REAUTHENTICATION.",
                        pleaseauthenticate: "TO ENJOY THE FULL RANGE OF OUR PRODUCTS AND SERVICES, WE KINDLY REQUEST YOU COMPLETE THE IDENTITY VERIFICATION PROCESS.",
                        doauthentication: "VERIFY IDENTITY"
                    },
                    market: {
                        low: "24H LOW",
                        high: "24H HIGH",
                        vol: "24H VOLUME",
                        timeStemp: "TIME",
                        price: "PRICE",
                        amount: "AMOUNT",
                        buy: "BUY",
                        sell: "SELL",
                        listTitle: "USDT MARKET",
                        mainTitle: "SPOT",
                        fullOrder: "ALL ORDERS",
                        history: "HISTORY",
                        orderDetail: "TRANSACTION DETAILS",
                        dealPrice: "TRANSACTION PRICE",
                        dealAmount: "NO. OF TRANSACTIONS",
                        orderAmount: "TRANSACTION AMOUNT",
                        status: {
                            all: "ALL",
                            wait: "PENDING",
                            done: "COMPLETED",
                            cancel: "CANCEL"
                        }
                    },
                    trade: {
                        title: "SPOT",
                        buy: "BUY",
                        sell: "SELL",
                        available: "AVAILABLE",
                        orderPrice: "ORDER PRICE",
                        orderAmount: "ORDER AMOUNT",
                        dealAmount: "DEAL AMOUNT",
                        openorders: "OPEN ORDERS",
                        limitedPrice: "LIMITED PRICE",
                        marketPrice: "MARKET PRICE",
                        placeholderPrice: "PRICE",
                        placeholderCount: "QUANTITY",
                        placeholderAmount: "AMOUNT",
                        placeholderToken: "QUANTITY",
                        description: "BEST MARKET PRICE",
                        status: {
                            all: "ALL",
                            wait: "PENDING",
                            done: "COMPLETED",
                            cancel: "CANCEL"
                        },
                        noMore: "NO MORE",
                        pleaseinputokamount: "PLEASE INPUT RIGHT AMOUNT",
                        lessamount: "AMOUNT NOT ENOUGH",
                        lasttrades: "Last Trades",
                        close: "Close"
                    },
                    contract: {
                        title: "FEATURES",
                        listTitle: "OPEN ORDERS",
                        high: "BUY UP",
                        low: "BUY FALL",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            }
                        },
                        openTime: "OPEN POSITION TIME",
                        openPrice: "OPEN POSITION PRICE",
                        totalAmount: "AMOUNT OF INVESTMENT",
                        status: {
                            onGoing: "PENDING",
                            closed: "COMPLETED"
                        },
                        detailTitle: "FEATURES DETAIL",
                        contractAmount: "FEATURES AMOUNT",
                        contractType: "FEATURES TYPE",
                        contractStatus: "FEATURES STATUS",
                        minutes: "MINUTES",
                        cycle: "CONTRACT DURATION",
                        closePrice: "CLOSE POSITION PRICE",
                        closeTime: "CLOSE POSITION TIME",
                        profitAmount: "PROFIT AND LOSS AMOUNT",
                        selectCycle: "SELECTION PERIOD",
                        orderAmount: "ORDER AMOUNT",
                        availableAmount: "ACCOUNT BALANCE:",
                        expectedEarnings: "PROJECTED PROFIT:",
                        submitContract: "CONFIRM ORDER",
                        noEnoughBalance: "THE BALANCE IS INSUFFICIENT.",
                        noTotalAmount: "PLEASE CHECK BETS AND PERIODS",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "MINIMUM BET AMOUNT",
                        amountcannotbemorethan: "MAXIMUM BET AMOUNT",
                        keepBuying: "KEEP BUYING",
                        countDown: "COUNTDOWN",
                        closing: "IN PROGRESS"
                    },
                    pwd: {
                        changePwd: "CHANGE PASSWORD",
                        loginPwd: "LOGIN PASSWORD",
                        withdrawalPwd: "WITHDRAWAL PASSWORD",
                        haveSet: "SET UP",
                        oldPwd: "OLD PASSWORD",
                        newPwd: "NEW PASSWORD",
                        confirmPwd: "CONFIRM PASSWORD",
                        pwdErrMsg: "PASSWORDS DON’T MATCH.",
                        tips: "FOR THE SAFETY OF YOUR FUNDS, WITHDRAWALS ARE NOT ALLOWED WITHIN 24 HOURS AFTER THE LOGIN PASSWORD HAS BEEN CHANGED."
                    },
                    invite: {
                        invite: "INVITE",
                        myInviteCode: "MY INVITAION CODE",
                        copyUrl: "COPY INVITATION LINK",
                        firstVip: "FIRST GENERATION MEMBERS",
                        secondVip: "SECOND GENERATION MEMBERS",
                        certified: "APPROVED",
                        uncertified: "UNAPPROVED",
                        unit: "NUMBERS"
                    },
                    withdraw: {
                        address: "CRYPTO ADDRESS MANAGEMENT",
                        address1: "ADDRESS",
                        addwithdraw: "ADD A WITHDRAWAL ADDRESS",
                        not: "NO SAVED ADDRESS",
                        add: "ADD ADDRESS",
                        btype: "CURRENCY TYPE",
                        tbtype: "TYPE OF WITHDRAWAL",
                        tbAddress: "CRYPTO WITHDRAWAL ADDRESS",
                        placeholder1: "ENTER WALLET ADDRESS",
                        addressErrMsg: "ONLY UPPER AND LOWER CASE LETTERS AND NUMBERS ARE ALLOWED",
                        remark: "REMARK",
                        placeholder2: "PLEASE ENTER A NOTE",
                        tb: "WITHDRAW",
                        tbCount: "WITHDRAW AMOUNT",
                        balance: "BALANCE",
                        password: "WITHDRAWAL PASSWORD",
                        all: "TAKE ALL",
                        tips1: "MINIMUM WITHDRAWAL AMOUNT:",
                        tips2: ",WITHDRAWALS LESS THAN THE MINIMUM AMOUNT WILL NOT BE CREDITED AND CANNOT BE REFUNDED.",
                        tips3: "IN ORDER TO PROTECT THE SAFETY OF FUNDS, WHEN YOUR ACCOUNT SECURITY POLICY CHANGES, PASSWORD CHANGES, WE WILL WITHDRAW COINS MANUALLY AUDITED, PLEASE WAIT PATIENTLY FOR THE STAFF TO CONTACT BY PHONE OR E-MAIL PLEASE BE SURE TO CONFIRM THE SECURITY OF THE COMPUTER AND THE BROWSER, TO PREVENT INFORMATION TAMPERING OR LEAKAGE!",
                        tips4: "WITHDRAW AMOUNT MUST BE WITHIN",
                        tips5: " BETWEEN",
                        tips6: "IDENTIFY THE ADDRESS TO BE DELETED",
                        text: "ADDRESSES MANAGEMENT",
                        tips7: "YOU HAVE NOT SET A WITHDRAWAL PASSWORD",
                        tips8: "ADD A CRYPTO WITHDRAWAL ADDRESS TO WITHDRAW MONEY",
                        tips9: "ADD WALLET",
                        tips10: "SERVICE FEE:",
                        tips11: "RECEIVE MOUNT:"
                    },
                    assets: {
                        assets: "WALLETS",
                        text1: "TOTAL ACCOUNT ASSETS (USDT)",
                        text2: "DUE TO THE DELAY IN THE STATISTICS OF FUNDS, THE ACCOUNT BALANCE MAY NOT BE THE LATEST BALANCE, FOR ACCURATE BALANCE PLEASE GO TO THE RELEVANT ACCOUNT PAGE FOR INQUIRY",
                        assetsList: "ASSET LIST",
                        usable: "AVAILABLE",
                        frozen: "FROZEN",
                        text3: "≈USDT",
                        finance: "TRANSACTION HISTORY",
                        time: "TIME",
                        amount: "AMOUNT",
                        explain: "EXPLAIN",
                        recharge: "DEPOSIT",
                        withdraw: "WITHDRAW",
                        buy: "BUY"
                    },
                    recharge: {
                        select: "CRYPTO",
                        charge: "POPULAR CRYPTO",
                        amount: "AMOUNT",
                        buyCoin: "BUY CRYPTOCURRENCY",
                        buy: "BUY",
                        chargeCoin: "DEPOSIT",
                        chargeNet: "NETWORK",
                        btype: "CURRENCY TYPE",
                        chargeAdd: "DEPOSIT ADDRESS",
                        tips1: "PLEASE ENTER THE RECHARGE AMOUNT",
                        tips2: "THE RECHARGE AMOUNT NEEDS TO BE WITHIN",
                        tips3: "BETWEEN",
                        tips4: "MINIMUM RECHARGE AMOUNT:",
                        tips5: ",RECHARGES LESS THAN THE MINIMUM AMOUNT WILL NOT BE CREDITED AND CANNOT BE REFUNDED.",
                        tips6: "PLEASE CHOOSE THE CORRECT RECHARGE CHANNEL NETWORK, OTHERWISE THE ASSETS WILL NOT BE RECOVERABLE. YOUR RECHARGE ADDRESS WILL NOT BE CHANGED FREQUENTLY AND YOU CAN RECHARGE REPEATEDLY; IF THERE IS ANY CHANGE, WE WILL TRY TO NOTIFY YOU VIA WEBSITE ANNOUNCEMENT OR EMAIL, PLEASE MAKE SURE YOUR COMPUTER AND BROWSER ARE SAFE TO PREVENT INFORMATION FROM BEING TAMPERED WITH OR LEAKED.",
                        chargeRecord: "DEPOSIT RECORDS",
                        time: "TIME",
                        count: "COUNT",
                        success: "SUCCESS",
                        fail: "FAIL",
                        confirming: "CONFIRMING",
                        charging: "RECHARGE IS IN PROGRESS",
                        goon: "RECHARGE IS IN PROGRESS"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "THE AMOUNT IS BEING MINED(USDT)",
                        todayEarnings: "TODAY EARNINGS(USDT)",
                        allEarnings: "CUMULATIVE INCOME(USDT)",
                        orderEarnings: "INCOME ORDER",
                        limit: "QUOTA(USDT)",
                        rate: "DAILY YIELD",
                        cycle: "PLEDGE CYCLE",
                        pledge: "PLEDGE",
                        detail: "DETAIL",
                        times: "PURCHASE LIMIT",
                        yield: "ANNUAL RATE OF RETURN",
                        balance: "BALANCE",
                        amount: "AMOUNT PLEDGED",
                        pleaseinputrightamount: "ENTER THE CORRECT PLEDGE AMOUNT",
                        preearnings: "PROJECTED TOTAL REVENUE",
                        pledgeRecord: "PLEDGE RECORDS",
                        projectName: "PROJECT NAME",
                        pledgeTime: "TIME OF PLEDGE",
                        cutOffTime: "SETTLEMENT TIME",
                        investmentAmount: "INVESTMENT AMOUNT",
                        status: "STATUS",
                        incomeRecord: "INCOME RELEASE RECORDS",
                        earning: "BE EARNING",
                        settled: "HAVE ALREADY SETTLED",
                        day: "DAY"
                    },
                    append: {
                        gotologin: "GO TO LOGIN",
                        logining: "LOGINDING..."
                    },
                    data: {
                        recharge: "DEPOSIT",
                        withdraw: "WITHDRAW",
                        withdrawalrefusal: "WITHDRAWAL REJECTED",
                        secondcontractorder: "FUTURE ORDER",
                        secondcontractwin: "FUTURE PROFIT",
                        cointransactioniscancelled: "SPOT TRADE CANCELED",
                        placeanorderforcointrading: "SPOT TRADE ORDER",
                        plusdeduction: "ADJUST BALANCE",
                        buy: "BUY",
                        sell: "SELL",
                        pending: "PENDING",
                        successful: "SUCCESSFUL",
                        fail: "FAIL",
                        defipledge: "DEFI PLEDGE",
                        miningincome: "MINING INCOME",
                        settleaccount: "SETTLE ACCOUNT",
                        limitordertrading: "Limit order trading",
                        limitorderwaspurchasedsuccessfully: "Limit order was purchased successfully",
                        realnameauthentication: "Identity Verified Successfully",
                        realnamesuccess: "YOUR REAL NAME AUTHENTICATION HAS BEEN PASSED, I WISH YOU A HAPPY TRANSACTION",
                        realnameauthenticationfailed: "REAL-NAME AUTHENTICATION FAILED",
                        rechargesuccessfullytips: "YOUR TOP-UP HAS BEEN SUCCESSFUL, WISH YOU A HAPPY TRANSACTION",
                        rechargesuccessfully: "RECHARGE SUCCESSFULLY",
                        rechargefailure: "RECHARGE FAILURE",
                        successfulwithdrawal: "SUCCESSFUL WITHDRAWAL",
                        withdrawalfailure: "WITHDRAWAL FAILURE",
                        successfulwithdrawaltips: "YOUR WITHDRAWAL REQUEST HAS BEEN APPROVED, PLEASE CHECK",
                        handlingcharge: "SERVICE FEE",
                        transactionamountisnotsatisfied: "MINIMUM TRANSACTION AMOUNT:",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "PENDING",
                        closeddata: "COMPLETED"
                    },
                    title: {
                        home: "CRYPTOCURRENCY EXCHANGE",
                        market: "MARKET",
                        trade: "TRADE",
                        futures: "FEATURES",
                        wallets: "WALLETS",
                        userinfo: "ACCOUNT INFO",
                        tradelist: "TRADE RECORDS",
                        orderlist: "OPEN RECORDS",
                        futureslist: "FUTURE RECORDS",
                        walletsdetail: "WALLETS DETAIL",
                        user: "USER",
                        language: "LANGUAGE",
                        notice: "NOTICE",
                        login: "LOGIN",
                        register: "REGISTER",
                        serviceprotoc: "AGREEMENT",
                        forgetpassword: "FORGET PASSWORD",
                        authentication: "VERIFICATIONS",
                        modifypassword: "MODIFY PASSWORD",
                        invite: "MY INVITATION",
                        aboutus: "ABOUT US",
                        onlineservice: "SERVICES",
                        withdrawpassword: "WITHDRAWAL PASSWORD",
                        withdrawaddress: "CRYPTO ADDRESS MANAGEMENT",
                        addwithdrawaddress: "ADD ADDRESS",
                        withdraw: "WITHDRAW",
                        deposit: "DEPOSIT",
                        choosecoin: "CRYPTO",
                        depositrecord: "DEPOSIT RECORDS",
                        recharge: "DEPOSIT",
                        defilist: "DEFI",
                        defidetail: "DEFI DETAIL",
                        pledgerecord: "PLEDGE RECORDS",
                        incomerecord: "INCOME RECORDS",
                        msb: "MSB APPROVAL"
                    }
                }
            }
              , O = {
                app: {
                    hello: "你好，世界！",
                    download: "下载打开APP",
                    common: {
                        input: "请输入",
                        select: "请选择",
                        upload: "上传",
                        confirm: "确定",
                        cancel: "取消",
                        submit: "提交",
                        save: "保存",
                        paste: "粘贴",
                        noorder: "暂无订单",
                        noData: "暂无数据"
                    },
                    msg: {
                        limitsendcode: "验证码获取次数已到最大值，请明日再试。",
                        hint: "提示",
                        know: "我知道了",
                        notShownToday: "今日不再提示",
                        copy: "复制成功",
                        success: "操作成功！",
                        wait: "敬请期待！",
                        keeplogin: "保持会话",
                        username: "用户名",
                        userid: "会员ID",
                        nickname: "昵称",
                        password: "密码",
                        signup: "注册",
                        signin: "登录",
                        signout: "退出",
                        guest: "游客",
                        welcome: "你好！",
                        add: "添加",
                        edit: "编辑",
                        delete: "删除",
                        move: "移动",
                        name: "名称",
                        status: "状态",
                        weigh: "权重",
                        operate: "操作",
                        warning: "温馨提示",
                        default: "默认",
                        article: "文章",
                        page: "单页",
                        ok: "确定",
                        cancel: "取消",
                        loading: "加载中",
                        more: "更多",
                        normal: "正常",
                        hidden: "隐藏",
                        submit: "提交",
                        reset: "重置",
                        execute: "执行",
                        close: "关闭",
                        search: "搜索",
                        refresh: "刷新",
                        first: "首页",
                        previous: "上一页",
                        next: "下一页",
                        last: "末页",
                        none: "无",
                        home: "主页",
                        online: "在线",
                        logout: "退出",
                        profile: "个人资料",
                        index: "首页",
                        hot: "热门",
                        recommend: "推荐",
                        console: "控制台",
                        code: "编号",
                        message: "内容",
                        line: "行号",
                        file: "文件",
                        menu: "菜单",
                        type: "类型",
                        title: "标题",
                        content: "内容",
                        append: "追加",
                        memo: "备注",
                        parent: "父级",
                        params: "参数",
                        permission: "权限",
                        advancesearch: "高级搜索",
                        checkall: "选中全部",
                        expandall: "展开全部",
                        begintime: "开始时间",
                        endtime: "结束时间",
                        createtime: "创建时间",
                        flag: "标志",
                        pleaseloginfirst: "请登录后操作",
                        uploadedsuccessful: "上传成功",
                        youcanuploaduptodfiles: "你最多还可以上传d个文件",
                        youcanchooseuptodfiles: "你最多还可以选择d个文件",
                        chunkfilewriteerror: "分片写入失败",
                        chunkfileinfoerror: "分片文件错误",
                        chunkfilemergeerror: "分片合并错误",
                        chunkfiledisabled: "未开启分片上传功能",
                        cancelupload: "取消上传",
                        uploadcanceled: "上传已取消",
                        nofileuploadorserveruploadlimitexceeded: "未上传文件或超出服务器上传限制",
                        uploadedfileformatislimited: "上传文件格式受限制",
                        uploadedfileisnotavalidimage: "上传文件不是有效的图片文件",
                        areyousureyouwanttocancelthisupload: "确定取消上传",
                        removefile: "移除文件",
                        youcanonlyuploadamaximumofsfiles: "你最多允许上传个文件",
                        youcantuploadfilesofthistype: "不允许上传的文件类型",
                        serverrespondedwithscode: "服务端响应",
                        fileistoobigsmibmaxfilesizesmib: "当前上传M，最大允许上传文件大小M",
                        redirectnow: "立即跳转",
                        operationcompleted: "操作成功!",
                        operationfailed: "操作失败!",
                        unknowndataformat: "未知的数据格式!",
                        networkerror: "网络错误!",
                        advancedsearch: "高级搜索",
                        invalidparameters: "未知参数",
                        noresultswerefound: "记录未找到",
                        parameterscannotbeempty: "参数不能为空",
                        youhavenopermission: "你没有权限访问",
                        anunexpectederroroccurred: "发生了一个意外错误,程序猿正在紧急处理中",
                        thispagewillberedirectedinsseconds: "页面将在秒后自动跳转",
                        parametererror: "参数错误",
                        passwordmustbecharacters: "密码必须6-30个字符",
                        insufficientbalance: "余额不足",
                        recharge: "充值",
                        withdraw: "提现",
                        cointransaction: "币币交易",
                        withdrawalrefusal: "提现拒绝",
                        secondcontractorder: "秒合约下单",
                        secondcontractwin: "秒合约中奖",
                        cointransactioniscancelled: "币币交易取消",
                        placeanorderforcointrading: "币币交易下单",
                        plusdeduction: "加扣款",
                        orderdoesnotexist: "订单不存在",
                        typeerror: "类型错误",
                        cointransactionisnotenabledforthiscurrency: "货币不支持币币交易",
                        limitunitpricecannotbeempty: "限价单价不可为空",
                        ordersuccessful: "下单成功",
                        pleaseentertheamounttosell: "请输入出售额度",
                        high: "买涨",
                        low: "买跌",
                        ongoing: "待结算",
                        closed: "已结算",
                        contractdoesnotexist: "该合约不存在",
                        pleasecompleterealnameauthenticationfirst: "请先完成实名认证",
                        settlementperioddoesnotexist: "结算周期不存在",
                        amountofinvestmentexceedsthelimit: "投资额度超限",
                        currencydoesnotexist: "币种不存在",
                        orderfailure: "下单失败",
                        secondcontractisnotenabledforthiscurrency: "该币种未开启秒合约",
                        limitordertrading: "币币限价委托交易",
                        limitorderwaspurchasedsuccessfully: "币币限价委托交易订单购买成功",
                        minimumtopuplimit: "最低充值限额",
                        maximumtopuplimit: "最高充值限额",
                        rechargesuccessfully: "充值成功",
                        pending: "待确定",
                        successful: "成功",
                        fail: "失败",
                        usercenter: "会员中心",
                        register: "注册",
                        login: "登录",
                        signupsuccessful: "注册成功",
                        usernamecannotbeempty: "用户名不能为空",
                        usernamemustbe3to30characters: "用户名必须3-30个字符",
                        usernamemustbe6to30characters: "用户名必须6-30个字符",
                        passwordcannotbeempty: "密码不能为空",
                        mobileisincorrect: "手机格式不正确",
                        usernamealreadyexist: "用户名已经存在",
                        nicknamealreadyexist: "昵称已经存在",
                        emailalreadyexist: "邮箱已经存在",
                        mobilealreadyexist: "手机号已经存在",
                        usernameisincorrect: "用户名不正确",
                        emailisincorrect: "邮箱不正确",
                        accountislocked: "账户已经被锁定",
                        passwordisincorrect: "密码不正确",
                        accountisincorrect: "账号不存在",
                        accountnotexist: "账户不存在",
                        invitationcodedoesnotexist: "邀请码不存在",
                        accountcannotbeempty: "账户不能为空",
                        usernameorpasswordisincorrect: "用户名或密码不正确",
                        youarenotloggedin: "你当前还未登录",
                        youveloggedindonotloginagain: "你已经存在请不要重复登录",
                        verifyemail: "邮箱验证",
                        changepassword: "修改密码",
                        captchaisincorrect: "验证码不正确",
                        loggedinsuccessful: "登录成功",
                        logoutsuccessful: "退出成功",
                        changepasswordfailure: "修改密码失败",
                        resetpasswordsuccessful: "重置密码成功",
                        sendfrequently: "发送频繁",
                        accountalreadyexist: "该账号已经存在",
                        unregistered: "未注册",
                        sendsuccessfully: "发送成功",
                        sendfail: "发送失败",
                        thegraphicverificationcodeisincorrect: "图形验证码错误",
                        documenttypeerror: "证件类型错误",
                        datasubmittedsuccessfully: "资料提交成功",
                        datasubmissionfailure: "资料提交失败",
                        certificationunderreview: "认证正在审核",
                        duplicatedocumentnumber: "证件号重复",
                        withdrawaltime: "提现时间为",
                        minimumwithdrawalamount: "最低提现金额为",
                        withdrawalpasswordfault: "提现密码错误",
                        withdrawsuccessfully: "提现成功",
                        passwordsetsuccessfully: "密码设置成功",
                        passwordsetfail: "密码设置成功",
                        oldandnewpasswordsarethesame: "新旧密码一致",
                        oldwithdrawalpasswordfault: "旧密码错误",
                        passwordalreadyexists: "密码已存在",
                        changepasswordsuccessful: "修改密码成功",
                        withdrawalisnotopened: "禁止提现，请联系客服处理",
                        withdrawaladdresshasbeenused: "提现地址已使用",
                        pleasecontactcustomerservice: "已禁止交易，请联系客服",
                        itemexist: "项目不存在",
                        eligiblepurchase: "不符合购买条件",
                        outsidelimit: "不在限额范围",
                        nopurchasetimes: "没有购买次数",
                        pleasetryagainlater: "请稍后重试"
                    },
                    tab: {
                        home: "主页",
                        market: "行情",
                        trade: "交易",
                        contract: "合约",
                        assets: "资产"
                    },
                    home: {
                        login: "登录",
                        register: "注册",
                        coinTopUp: "充币",
                        coinTopDown: "提币",
                        ieo: "IEO",
                        staking: "Staking",
                        service: "客服",
                        buyCoin: "我要买币",
                        transactionPair: "交易对",
                        recentQuotation: "最新价格",
                        change: "涨跌幅",
                        comingsoon: "敬请期待"
                    },
                    lang: {
                        lang: "语言管理"
                    },
                    notice: {
                        notice: "通知"
                    },
                    agreement: {
                        agreement: "服务协议"
                    },
                    user: {
                        user: "用户",
                        login: "登录",
                        register: "注册",
                        email: "邮箱",
                        phone: "手机号",
                        phonenumber: "手机号",
                        pwd: "密码",
                        forgetpwd: "忘记密码",
                        userreg: "用户注册",
                        emailErrMsg: "邮箱格式不正确",
                        phoneErrMsg: "手机号格式不正确",
                        pwdErrMsg1: "只能是数字，字母或-*/+.~!@#$%^&*()等符号",
                        pwdErrMsg2: "至少包含数字",
                        pwdErrMsg3: "至少包含字母",
                        pwdErrMsg4: "长度6-20",
                        gvc: "图形验证码",
                        checkCode: "验证码",
                        invCode: "邀请码",
                        getCode: "获取验证码",
                        regain: "重新获取",
                        newPwd: "新密码"
                    },
                    userInfo: {
                        userInfo: "个人中心",
                        creditScore: "信用分",
                        inviteCode: "邀请码",
                        authentication: "实名认证",
                        authenticated: "已认证",
                        authenticatefail: "认证失败",
                        authenticating: "审核中",
                        lang: "语言",
                        withdrawalAdd: "提币地址",
                        setpwd: "密码管理",
                        support: "帮助中心",
                        notice: "通知",
                        newNotice: "新通知",
                        invite: "我的邀请",
                        aboutUs: "关于我们",
                        msb: "MSB认证",
                        exit: "退出",
                        service: "在线客服"
                    },
                    auth: {
                        name: "姓名",
                        IDType: "证件类型",
                        cardBack: "上传证件反面",
                        cardFront: "上传证件正面",
                        IDCard: "身份证",
                        passport: "护照",
                        cardErrMsg: "请选择证件类型",
                        idnumber: "证件编号",
                        idnumberErrMsg: "请输入正确的证件编号",
                        overSize: "图片大小不能超过",
                        realImage: "请输入正确的证件图片",
                        uploading: "上传中...",
                        uploadFail: "上传失败",
                        waitUpload: "请等待图片上传完成",
                        reSub: "重新提交",
                        pending: "待审核",
                        approve: "审核通过",
                        authenticating: "实名认证审核中...",
                        waitauthentication: "等待审核完成后操作",
                        authenticatefail: "实名认证失败",
                        reauthentication: "去重新实名认证",
                        pleaseauthenticate: "请先实名认证",
                        doauthentication: "去实名认证"
                    },
                    market: {
                        low: "最低",
                        high: "最高",
                        vol: "24H量",
                        timeStemp: "时间",
                        price: "价格",
                        amount: "数量",
                        buy: "买入",
                        sell: "卖出",
                        listTitle: "USDT市场",
                        mainTitle: "币币交易",
                        fullOrder: "全部委托",
                        history: "历史记录",
                        orderDetail: "成交明细",
                        dealPrice: "成交价格",
                        dealAmount: "成交数量",
                        orderAmount: "委托数量",
                        status: {
                            all: "全部",
                            wait: "待成交",
                            done: "成交",
                            cancel: "撤销"
                        }
                    },
                    trade: {
                        title: "币币交易",
                        buy: "买入",
                        sell: "卖出",
                        available: "可用",
                        orderPrice: "委托价格",
                        orderAmount: "委托数量",
                        dealAmount: "数量",
                        openorders: "当前委托",
                        limitedPrice: "限价委托",
                        marketPrice: "市价委托",
                        placeholderPrice: "价格",
                        placeholderCount: "数量",
                        placeholderAmount: "交易金额",
                        placeholderToken: "交易数量",
                        description: "按市场最优价",
                        status: {
                            all: "全部",
                            wait: "撤单",
                            done: "成交",
                            cancel: "已撤销"
                        },
                        noMore: "没有更多了",
                        pleaseinputokamount: "请输入正确的数量",
                        lessamount: "数量不足",
                        lasttrades: "最新成交",
                        close: "关闭"
                    },
                    contract: {
                        title: "秒合约",
                        listTitle: "秒合约记录",
                        high: "买涨",
                        low: "买跌",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "买涨",
                                low: "买跌"
                            }
                        },
                        openTime: "建仓时间",
                        openPrice: "建仓单价",
                        totalAmount: "投入金额",
                        status: {
                            onGoing: "待结算",
                            closed: "已结算"
                        },
                        detailTitle: "合约详情",
                        contractAmount: "合约金额",
                        contractType: "合约类型",
                        contractStatus: "合约状态",
                        minutes: "分钟",
                        cycle: "合约时长",
                        closePrice: "平仓单价",
                        closeTime: "平仓时间",
                        profitAmount: "盈亏金额",
                        selectCycle: "选择周期",
                        orderAmount: "投注金额",
                        availableAmount: "账户余额:",
                        expectedEarnings: " 预计盈利:",
                        submitContract: " 确认下单",
                        noEnoughBalance: "账户余额不足",
                        noTotalAmount: "请检查投注和周期",
                        orderpricezero: "价格异常，请稍后重试",
                        amountcannotbelessthan: "投注金额不能低于",
                        amountcannotbemorethan: "投注金额不能高于",
                        keepBuying: "继续购买",
                        countDown: "倒计时",
                        closing: "结算中"
                    },
                    pwd: {
                        changePwd: "修改密码",
                        loginPwd: "登录密码",
                        withdrawalPwd: "提现密码",
                        haveSet: "已设置",
                        oldPwd: "旧密码",
                        newPwd: "新密码",
                        confirmPwd: "确认密码",
                        pwdErrMsg: "两次密码不一致",
                        tips: "为了您的资金安全，登陆密码修改后24小时以内不允许提现"
                    },
                    invite: {
                        invite: "邀请",
                        myInviteCode: "我的邀请码",
                        copyUrl: "复制邀请链接",
                        firstVip: "一代会员",
                        secondVip: "二代会员",
                        certified: "已认证",
                        uncertified: "未认证",
                        unit: "人"
                    },
                    withdraw: {
                        address: "提币地址管理",
                        address1: "地址",
                        addwithdraw: "添加提币地址",
                        not: "暂无保存地址",
                        add: "添加地址",
                        btype: "币种",
                        tbtype: "提币类型",
                        tbAddress: "提币地址",
                        placeholder1: "请选择提币地址",
                        addressErrMsg: "只允许输入大小写字母及数字",
                        remark: "备注",
                        placeholder2: "请输入备注",
                        tb: "提币",
                        tbCount: "提币数量",
                        balance: "可用",
                        password: "提币密码",
                        all: "全部",
                        tips1: "最低提现金额：",
                        tips2: "，小于最小金额的提币将不会到账且无法退回。",
                        tips3: "为保障资金安全，当您账户安全策略变更，密码修改，我们会对提币进行人工审核，请耐心等待工作人员电话或邮件联系请务必确认电脑及浏览器安全，防止信息被篡改或泄露。",
                        tips4: "提币金额需在",
                        tips5: "之间",
                        tips6: "确定要删除地址？",
                        text: "地址管理",
                        tips7: "您尚未设置提现密码",
                        tips8: "您尚未设置提币地址",
                        tips9: "去添加",
                        tips10: "提现手续费：",
                        tips11: "预计到账："
                    },
                    assets: {
                        assets: "资产",
                        text1: "账户总资产折合(USDT)",
                        text2: "由于资金统计存在延时，账户余额不一定是最新余额，如需准确余额请到相关账户页面进行查询",
                        assetsList: "资产列表",
                        usable: "可用",
                        frozen: "冻结",
                        text3: "折合USDT",
                        finance: "财务记录",
                        time: "时间",
                        amount: "金额",
                        explain: "说明",
                        recharge: "充币",
                        withdraw: "提币",
                        buy: "买币"
                    },
                    recharge: {
                        select: "选择",
                        charge: "充值",
                        amount: "充值金额",
                        buyCoin: "购买加密货币",
                        buy: "购买",
                        chargeCoin: "充币",
                        chargeNet: "充币网络",
                        btype: "币种",
                        chargeAdd: "充币地址",
                        tips1: "请输入充值金额",
                        tips2: "充值金额需在",
                        tips3: "之间",
                        tips4: "最小充值金额：",
                        tips5: "，小于最小金额的充值将不会上账且无法退回",
                        tips6: "请选择正确的充值通道网络，否则资产将不可找回。您的充值地址不会经常改变，可以重复充值;如有更改，我们会尽量通过网站公告或邮件通知您，请务必确认电脑及浏览器安全，防止信息被篡改或泄露。",
                        chargeRecord: "充币记录",
                        time: "时间",
                        count: "数量",
                        success: "成功",
                        fail: "失败",
                        confirming: "确认中",
                        charging: "充值进行中",
                        goon: "继续充币"
                    },
                    defi: {
                        defi: "DeFi",
                        doingAmount: "正在挖矿金额(USDT)",
                        todayEarnings: "今日收益(USDT)",
                        allEarnings: "累计收益(USDT)",
                        orderEarnings: "收益中的订单",
                        limit: "限额(USDT)",
                        rate: "日收益率",
                        cycle: "质押周期",
                        pledge: "质押",
                        detail: "详情",
                        times: "限购次数",
                        yield: "年化收益率",
                        balance: "余额",
                        amount: "质押金额",
                        pleaseinputrightamount: "请输入正确的质押金额",
                        preearnings: "预计总收益",
                        pledgeRecord: "质押记录",
                        projectName: "项目名称",
                        pledgeTime: "质押时间",
                        cutOffTime: "结算时间",
                        investmentAmount: "投入金额",
                        status: "状态",
                        incomeRecord: "收益发放记录",
                        earning: "收益中",
                        settled: "已结算",
                        day: "天"
                    },
                    append: {
                        gotologin: "去登录",
                        logining: "登录中..."
                    },
                    data: {
                        ordercointypetrading: "币币交易下单",
                        recharge: "充值",
                        withdraw: "提现",
                        withdrawalrefusal: "提现拒绝",
                        secondcontractorder: "秒合约下单",
                        secondcontractwin: "秒合约中奖",
                        cointransactioniscancelled: "币币交易取消",
                        placeanorderforcointrading: "币币交易下单",
                        plusdeduction: "加扣款",
                        buy: "买入",
                        sell: "卖出",
                        pending: "待确定",
                        successful: "成功",
                        fail: "失败",
                        defipledge: "defi质押",
                        miningincome: "defi收益",
                        settleaccount: "defi结算",
                        limitordertrading: "币币限价委托交易",
                        limitorderwaspurchasedsuccessfully: "币币限价委托交易订单购买成功",
                        realnameauthentication: "实名认证",
                        realnamesuccess: "您的实名认证已通过，祝您交易愉快",
                        realnameauthenticationfailed: "实名认证失败",
                        rechargesuccessfullytips: "您的充值已经成功，祝您交易愉快",
                        rechargesuccessfully: "充值成功",
                        rechargefailure: "充值失败",
                        successfulwithdrawal: "提现成功",
                        withdrawalfailure: "提现失败",
                        successfulwithdrawaltips: "您的提现请求已通过，请查收",
                        handlingcharge: "手续费",
                        transactionamountisnotsatisfied: "最小交易金额：",
                        high: "买涨",
                        low: "买跌",
                        ongoingdata: "待结算",
                        closeddata: "已结算"
                    },
                    title: {
                        home: "主页",
                        market: "行情",
                        trade: "交易",
                        futures: "合约",
                        wallets: "资产",
                        userinfo: "个人中心",
                        tradelist: "交易列表",
                        orderlist: "委托列表",
                        futureslist: "合约列表",
                        walletsdetail: "资产详情",
                        user: "user",
                        language: "语言",
                        notice: "通知",
                        login: "登录",
                        register: "注册",
                        serviceprotoc: "服务协议",
                        forgetpassword: "忘记密码",
                        authentication: "实名认证",
                        modifypassword: "修改密码",
                        invite: "邀请",
                        aboutus: "关于我们",
                        onlineservice: "在线客服",
                        withdrawpassword: "提现密码",
                        withdrawaddress: "提币地址管理",
                        addwithdrawaddress: "添加提币地址",
                        withdraw: "提币",
                        deposit: "充币",
                        choosecoin: "选择币种",
                        depositrecord: "充币记录",
                        recharge: "充值",
                        defilist: "Defi",
                        defidetail: "DefiDetail",
                        pledgerecord: "PledgeRecord",
                        incomerecord: "IncomeRecord",
                        msb: "MSB证书"
                    }
                }
            }
              , S = {
                app: {
                    hello: "您好",
                    common: {
                        input: "請輸入",
                        select: "請選擇",
                        upload: "上傳",
                        confirm: "確定",
                        cancel: "取消",
                        submit: "提出申請",
                        save: "保存",
                        paste: "貼上"
                    },
                    msg: {
                        success: "操作成功！",
                        wait: "敬請期待！",
                        keeplogin: "保持對話",
                        username: "用戶名",
                        userid: "會員ID",
                        nickname: "暱稱",
                        password: "密碼",
                        signup: "註冊",
                        signin: "登陸",
                        signout: "登出",
                        guest: "訪客",
                        welcome: "您好！",
                        add: "添加",
                        edit: "編輯",
                        delete: "刪除",
                        move: "移動",
                        name: "名稱",
                        status: "狀態",
                        weigh: "權重",
                        operate: "操作",
                        warning: "溫馨提示",
                        default: "默認",
                        article: "文章",
                        page: "單頁",
                        ok: "確認",
                        cancel: "取消",
                        loading: "加載中",
                        more: "更多",
                        normal: "正常",
                        hidden: "隱藏",
                        submit: "提交",
                        reset: "重置",
                        execute: "執行",
                        close: "關閉",
                        search: "搜尋",
                        refresh: "刷新",
                        first: "首頁",
                        previous: "上一頁",
                        next: "下一頁",
                        last: "末頁",
                        none: "無",
                        home: "主頁",
                        online: "在線上",
                        logout: "退出",
                        profile: "個人資料",
                        index: "首頁",
                        hot: "熱門",
                        recommend: "推薦",
                        console: "控制台",
                        code: "編號",
                        message: "訊息",
                        line: "行",
                        file: "文件",
                        menu: "主選單",
                        type: "類型",
                        title: "標題",
                        content: "內容",
                        append: "追加",
                        memo: "備註",
                        parent: "父級",
                        params: "參數",
                        permission: "權限",
                        advancesearch: "高級搜索",
                        checkall: "選中全部",
                        expandall: "展開全部",
                        begintime: "開始時間",
                        endtime: "結束時間",
                        createtime: "創建時間",
                        flag: "標誌",
                        pleaseloginfirst: "請登錄後操作",
                        uploadedsuccessful: "上傳成功",
                        youcanuploaduptodfiles: "你最多還可以上傳d個文件",
                        youcanchooseuptodfiles: "你最多還可以選擇d個文件",
                        chunkfilewriteerror: "分片寫入失敗",
                        chunkfileinfoerror: "分片文件錯誤",
                        chunkfilemergeerror: "分片合併錯誤",
                        chunkfiledisabled: "未開啓分片上傳功能",
                        cancelupload: "取消上傳",
                        uploadcanceled: "上傳已取消",
                        nofileuploadorserveruploadlimitexceeded: "未上傳文件或超出服務器上傳限制",
                        uploadedfileformatislimited: "上傳文件格式受限制",
                        uploadedfileisnotavalidimage: "上傳文件不是有效的圖片文件",
                        areyousureyouwanttocancelthisupload: "確定取消上傳",
                        removefile: "移除文件",
                        youcanonlyuploadamaximumofsfiles: "你最多允許上傳個文件",
                        youcantuploadfilesofthistype: "不允許上傳的文件類型",
                        serverrespondedwithscode: "伺服器響應",
                        fileistoobigsmibmaxfilesizesmib: "當前上傳M，最大允許上傳文件大小M",
                        redirectnow: "立即跳轉",
                        operationcompleted: "操作成功!",
                        operationfailed: "操作失敗!",
                        unknowndataformat: "未知的數據格式!",
                        networkerror: "網絡錯誤!",
                        advancedsearch: "高級搜索",
                        invalidparameters: "未知參數",
                        noresultswerefound: "記錄未找到",
                        parameterscannotbeempty: "參數不可為空",
                        youhavenopermission: "你沒有訪問權限",
                        anunexpectederroroccurred: "發現了一個錯誤,程序員正在緊急處理中",
                        thispagewillberedirectedinsseconds: "頁面將在秒後自動跳轉",
                        parametererror: "參數錯誤",
                        passwordmustbecharacters: "密碼必須630個字符",
                        insufficientbalance: "餘額不足"
                    },
                    tab: {
                        home: "主頁",
                        market: "行情",
                        trade: "交易",
                        contract: "合約",
                        assets: "資產"
                    },
                    home: {
                        login: "登錄",
                        register: "註冊",
                        coinTopUp: "充幣",
                        coinTopDown: "提幣",
                        ieo: "IEO",
                        staking: "Staking",
                        service: "客服",
                        buyCoin: "我要買幣",
                        transactionPair: "交易兑",
                        recentQuotation: "最新價格",
                        change: "漲跌幅"
                    },
                    lang: {
                        lang: "語言管理"
                    },
                    notice: {
                        notice: "通知"
                    },
                    agreement: {
                        agreement: "服務協議"
                    },
                    user: {
                        user: "用戶",
                        login: "登錄",
                        register: "註冊",
                        email: "郵箱",
                        phone: "手機號",
                        pwd: "密碼",
                        forgetpwd: "忘記密碼",
                        userreg: "用戶註冊",
                        emailErrMsg: "郵箱格式錯誤",
                        pwdErrMsg1: "只能是數字，字母或-*/+.~!@#$%^&*()等符號",
                        pwdErrMsg2: "至少包含數字",
                        pwdErrMsg3: "至少包含字母",
                        pwdErrMsg4: "長度6-20",
                        gvc: "圖形驗證碼",
                        checkCode: "驗證碼",
                        invCode: "邀請碼",
                        getCode: "獲取驗證碼",
                        regain: "重新獲取",
                        newPwd: "新密碼"
                    },
                    userInfo: {
                        userInfo: "個人中心",
                        creditScore: "信用評分",
                        inviteCode: "邀請碼",
                        authentication: "實名認證",
                        authenticated: "已認證",
                        lang: "語言",
                        withdrawalAdd: "提幣地址",
                        setpwd: "密碼管理",
                        support: "幫助中心",
                        notice: "通知",
                        newNotice: "新通知",
                        invite: "我的邀請",
                        aboutUs: "關於我們",
                        msb: "MSB認證",
                        exit: "退出",
                        service: "在線客服"
                    },
                    auth: {
                        name: "姓名",
                        IDType: "證件類型",
                        cardBack: "上傳證件反面",
                        cardFront: "上傳證件正面",
                        IDCard: "身份證",
                        passport: "護照",
                        idnumber: "證件編號",
                        idnumberErrMsg: "請輸入正確的證件編號",
                        over5: "圖片大小不能超過5M",
                        reSub: "重新提交",
                        pending: "待審核",
                        approve: "審核通過"
                    },
                    market: {
                        low: "最低",
                        high: "最高",
                        vol: "24H量",
                        timeStemp: "時間",
                        price: "價格",
                        amount: "數量",
                        buy: "買入",
                        sell: "賣出",
                        listTitle: "USDT市場",
                        mainTitle: "幣幣交易",
                        fullOrder: "全部委託",
                        history: "歷史記錄",
                        orderDetail: "成交明細",
                        dealPrice: "成交價格",
                        dealAmount: "成交數量",
                        orderAmount: "委託數量",
                        status: {
                            all: "全部",
                            wait: "待成交",
                            done: "成交",
                            cancel: "撤銷"
                        }
                    },
                    trade: {
                        title: "幣幣交易",
                        buy: "買入",
                        sell: "賣出",
                        available: "可用",
                        dealPrice: "委託價格",
                        dealAmount: "委託數量"
                    },
                    pwd: {
                        changePwd: "修改密碼",
                        loginPwd: "登錄密碼",
                        withdrawalPwd: "提現密碼",
                        haveSet: "已設置",
                        oldPwd: "舊密碼",
                        newPwd: "新密碼",
                        confirmPwd: "確認密碼",
                        pwdErrMsg: "兩次密碼不一致",
                        tips: "為了您的資金安全，登陸密碼修改後，24小時以內不允許提現"
                    },
                    invite: {
                        invite: "邀請",
                        myInviteCode: "我的邀請碼",
                        copyUrl: "複製邀請鏈結",
                        firstVip: "一級會員",
                        secondVip: "二級會員",
                        certified: "已認證",
                        uncertified: "未認證",
                        unit: "人"
                    },
                    withdrawAddress: {
                        address: "提幣地址",
                        addwithdraw: "添加提幣地址",
                        not: "暫無保存地址",
                        add: "添加地址",
                        btype: "幣種",
                        tbtype: "提幣類型",
                        tbAddress: "提幣地址",
                        placeholder1: "請輸入或貼上提幣地址",
                        addressErrMsg: "只允許輸入大小寫字母及數字",
                        remark: "備註",
                        placeholder2: "請輸入備註"
                    }
                }
            }
              , u = {
                app: {
                    hello: "OLÁ, MUNDO!",
                    download: "Baixar e Abrir o App",
                    common: {
                        input: "DIGITE ",
                        select: "SELECIONE",
                        upload: "CARREGAR",
                        confirm: "CONFIRMAR",
                        cancel: "CANCELAR",
                        submit: "ENVIAR",
                        save: "SALVAR",
                        paste: "COLAR",
                        noorder: "SEM PEDIDO",
                        noData: "Nenhum dado"
                    },
                    msg: {
                        limitsendcode: "O número máximo de tentativas para obter um código de verificação foi atingido. Por favor, tente novamente amanhã.",
                        hint: "PROMPT",
                        know: "ENTENDI",
                        notShownToday: "NÃO MAIS DICAS HOJE",
                        copy: "COPIAR SUCESSO",
                        success: "OPERAÇÃO BEM-SUCEDIDA!",
                        wait: "POR FAVOR, AGUARDE!",
                        keeplogin: "MANTER O LOGIN",
                        username: "NOME DE USUÁRIO",
                        userid: "ID DO USUÁRIO",
                        nickname: "NOME DE USUÁRIO",
                        password: "SENHA",
                        signup: "REGISTRO",
                        signin: "ENTRAR",
                        signout: "SAIR",
                        guest: "CONVIDADO",
                        welcome: "OLÁ!",
                        add: "ADICIONAR",
                        edit: "EDITAR",
                        delete: "EXCLUIR",
                        move: "MOVER",
                        name: "NOME",
                        status: "STATUS",
                        weigh: "PESO",
                        operate: "OPERAÇÃO",
                        warning: "ALERTA",
                        default: "PADRÃO",
                        article: "ARTIGO",
                        page: "PÁGINA",
                        ok: "OK",
                        cancel: "CANCELAR",
                        loading: "CARREGANDO",
                        more: "MAIS",
                        normal: "NORMAL",
                        hidden: "OCULTO",
                        submit: "ENVIAR",
                        reset: "REDEFINIR",
                        execute: "EXECUTAR",
                        close: "FECHAR",
                        search: "PESQUISAR",
                        refresh: "ATUALIZAR",
                        first: "PRIMEIRA PÁGINA",
                        previous: "PÁGINA ANTERIOR",
                        next: "PRÓXIMA PÁGINA",
                        last: "ÚLTIMA PÁGINA",
                        none: "NENHUM",
                        home: "INÍCIO",
                        online: "ONLINE",
                        logout: "SAIR",
                        profile: "PERFIL PESSOAL",
                        index: "INÍCIO",
                        hot: "POPULAR",
                        recommend: "RECOMENDAR",
                        console: "CONSOLE",
                        code: "NÚMERO DE SÉRIE",
                        message: "ELEMENTO",
                        line: "NÚMERO DA LINHA",
                        file: "ARQUIVO",
                        menu: "MENU",
                        type: "TIPO",
                        title: "TÍTULO",
                        content: "CONTEÚDO",
                        append: "ANEXAR",
                        memo: "MEMO",
                        parent: "NÍVEL PAI",
                        params: "PARÂMETROS",
                        permission: "PERMISSÃO",
                        advancesearch: "BUSCA AVANÇADA",
                        checkall: "SELECIONAR TUDO",
                        expandall: "EXPANDIR TUDO",
                        begintime: "HORA DE INÍCIO",
                        endtime: "HORA DE TÉRMINO",
                        createtime: "HORA DE CRIAÇÃO",
                        flag: "LOGOS",
                        pleaseloginfirst: "FAÇA O LOGIN PARA OPERAR",
                        uploadedsuccessful: "CARREGADO COM SUCESSO",
                        youcanuploaduptodfiles: "VOCÊ TAMBÉM PODE CARREGAR ATÉ ARQUIVOS",
                        youcanchooseuptodfiles: "VOCÊ TAMBÉM PODE SELECIONAR ATÉ ARQUIVOS",
                        chunkfilewriteerror: "FALHA NA GRAVAÇÃO DO ARQUIVO EM PARTES",
                        chunkfileinfoerror: "ERRO NO ARQUIVO EM PARTES",
                        chunkfilemergeerror: "ERRO NA MESCLAGEM DO ARQUIVO EM PARTES",
                        chunkfiledisabled: "O CARREGAMENTO DIVIDIDO NÃO ESTÁ HABILITADO",
                        cancelupload: "CANCELAR CARREGAMENTO",
                        uploadcanceled: "CARREGAMENTO CANCELADO",
                        nofileuploadorserveruploadlimitexceeded: "ARQUIVOS NÃO CARREGADOS OU LIMITE DE CARREGAMENTO DO SERVIDOR EXCEDIDO",
                        uploadedfileformatislimited: "FORMATO DE ARQUIVO DE CARREGAMENTO LIMITADO",
                        uploadedfileisnotavalidimage: "CARREGANDO UM ARQUIVO QUE NÃO É UMA IMAGEM VÁLIDA",
                        areyousureyouwanttocancelthisupload: "CONFIRMA CANCELAR O CARREGAMENTO",
                        removefile: "REMOVER ARQUIVOS",
                        youcanonlyuploadamaximumofsfiles: "VOCÊ PODE CARREGAR APENAS UM MÁXIMO DE ARQUIVOS",
                        youcantuploadfilesofthistype: "NÃO É PERMITIDO CARREGAR ARQUIVOS DESTE TIPO",
                        serverrespondedwithscode: "RESPOSTA DO SERVIDOR",
                        fileistoobigsmibmaxfilesizesmib: "ARQUIVO MUITO GRANDE, TAMANHO MÁXIMO DE ARQUIVO PERMITIDO",
                        redirectnow: "REDIRECIONAR AGORA",
                        operationcompleted: "OPERAÇÃO CONCLUÍDA COM SUCESSO!",
                        operationfailed: "FALHA NA OPERAÇÃO!",
                        unknowndataformat: "FORMATO DE DADOS DESCONHECIDO!",
                        networkerror: "ERROS DE REDE!",
                        advancedsearch: "BUSCA AVANÇADA",
                        invalidparameters: "PARÂMETRO DESCONHECIDO",
                        noresultswerefound: "NENHUM REGISTRO ENCONTRADO",
                        parameterscannotbeempty: "OS PARÂMETROS NÃO PODEM SER VAZIOS",
                        youhavenopermission: "VOCÊ NÃO TEM PERMISSÃO DE ACESSO",
                        anunexpectederroroccurred: "OCORREU UM ERRO INESPERADO. O PROGRAMADOR ESTÁ TRABALHANDO NISSO.",
                        thispagewillberedirectedinsseconds: "A PÁGINA SERÁ REDIRECIONADA AUTOMATICAMENTE EM SEGUNDOS",
                        parametererror: "ERRO DE PARÂMETRO",
                        passwordmustbecharacters: "A SENHA DEVE TER DE 6 A 30 CARACTERES",
                        insufficientbalance: "O SALDO É INSUFICIENTE",
                        recharge: "RECARGA",
                        withdraw: "RETIRAR",
                        cointransaction: "SPOT",
                        withdrawalrefusal: "RECUSA DE RETIRADA",
                        secondcontractorder: "PEDIDOS DE FUTUROS",
                        secondcontractwin: "VITÓRIAS DE FUTUROS",
                        cointransactioniscancelled: "CANCELAMENTO DE SPOT",
                        placeanorderforcointrading: "PEDIDO DE SPOT",
                        plusdeduction: "MAIS DEDUÇÃO",
                        orderdoesnotexist: "PEDIDO NÃO EXISTE",
                        typeerror: "ERRO DE TIPO",
                        cointransactionisnotenabledforthiscurrency: "A MOEDA NÃO SUPORTA SPOT",
                        limitunitpricecannotbeempty: "O PREÇO UNITÁRIO LIMITE NÃO PODE SER VAZIO",
                        ordersuccessful: "PEDIDO BEM-SUCEDIDO",
                        pleaseentertheamounttosell: "POR FAVOR, DIGITE A QUANTIDADE A SER VENDIDA",
                        high: "ALTO",
                        low: "BAIXO",
                        ongoing: "LIQUIDAÇÃO PENDENTE",
                        closed: "LIQUIDADO",
                        contractdoesnotexist: "FUTUROS NÃO EXISTE",
                        pleasecompleterealnameauthenticationfirst: "POR FAVOR, COMPLETE A AUTENTICAÇÃO DO NOME REAL PRIMEIRO",
                        settlementperioddoesnotexist: "O PERÍODO DE LIQUIDAÇÃO NÃO EXISTE",
                        amountofinvestmentexceedsthelimit: "O INVESTIMENTO EXCEDE O LIMITE",
                        currencydoesnotexist: "MOEDA INDISPONÍVEL",
                        orderfailure: "FALHA NO PEDIDO",
                        secondcontractisnotenabledforthiscurrency: "FUTUROS NÃO ESTÁ HABILITADO PARA ESTA MOEDA",
                        limitordertrading: "SPOT COM LIMITE",
                        limitorderwaspurchasedsuccessfully: "SPOT COM LIMITE COMPRADO COM SUCESSO",
                        minimumtopuplimit: "LIMITE MÍNIMO DE RECARGA",
                        maximumtopuplimit: "LIMITE MÁXIMO DE RECARGA",
                        rechargesuccessfully: "RECARGA BEM-SUCEDIDA",
                        pending: "PENDENTE",
                        successful: "BEM-SUCEDIDO",
                        fail: "FALHA",
                        usercenter: "CENTRO DE MEMBRO",
                        register: "REGISTRAR",
                        login: "ENTRAR",
                        signupsuccessful: "REGISTRO BEM-SUCEDIDO",
                        usernamecannotbeempty: "O NOME DE USUÁRIO NÃO PODE SER VAZIO",
                        usernamemustbe3to30characters: "O NOME DE USUÁRIO DEVE TER DE 3 A 30 CARACTERES",
                        usernamemustbe6to30characters: "O NOME DE USUÁRIO DEVE TER DE 6 A 30 CARACTERES",
                        passwordcannotbeempty: "A SENHA NÃO PODE SER VAZIA",
                        mobileisincorrect: "FORMATO DE TELEFONE INCORRETO",
                        usernamealreadyexist: "NOME DE USUÁRIO JÁ EXISTE",
                        nicknamealreadyexist: "NOME DE USUÁRIO JÁ EXISTE",
                        emailalreadyexist: "E-MAIL JÁ EXISTE",
                        mobilealreadyexist: "NÚMERO DE TELEFONE JÁ EXISTE",
                        usernameisincorrect: "NOME DE USUÁRIO INCORRETO",
                        emailisincorrect: "ENDEREÇO DE E-MAIL INCORRETO",
                        accountislocked: "A CONTA FOI BLOQUEADA",
                        passwordisincorrect: "SENHA INCORRETA",
                        accountisincorrect: "CONTAS NÃO EXISTEM",
                        accountnotexist: "CONTA NÃO EXISTE",
                        invitationcodedoesnotexist: "CÓDIGO DE CONVITE NÃO EXISTE",
                        accountcannotbeempty: "A CONTA NÃO PODE SER VAZIA",
                        usernameorpasswordisincorrect: "NOME DE USUÁRIO OU SENHA INCORRETA",
                        youarenotloggedin: "VOCÊ NÃO ESTÁ LOGADO NO MOMENTO",
                        youveloggedindonotloginagain: "VOCÊ JÁ EXISTE, POR FAVOR, NÃO FAÇA LOGIN NOVAMENTE",
                        verifyemail: "VERIFICAÇÃO DE E-MAIL",
                        changepassword: "ALTERAR SENHA",
                        captchaisincorrect: "O CÓDIGO DE VERIFICAÇÃO ESTÁ INCORRETO",
                        loggedinsuccessful: "LOGIN BEM-SUCEDIDO",
                        logoutsuccessful: "SAIR BEM-SUCEDIDO",
                        changepasswordfailure: "FALHA AO ALTERAR A SENHA",
                        resetpasswordsuccessful: "REDEFINIR A SENHA COM SUCESSO",
                        sendfrequently: "ENVIO FREQUENTE",
                        accountalreadyexist: "ESTA CONTA JÁ EXISTE",
                        unregistered: "NÃO REGISTRADO",
                        sendsuccessfully: "ENVIADO COM SUCESSO",
                        sendfail: "FALHA NO ENVIO",
                        thegraphicverificationcodeisincorrect: "ERRO NO CÓDIGO DE VERIFICAÇÃO GRÁFICO",
                        documenttypeerror: "TIPO DE DOCUMENTO INCORRETO",
                        datasubmittedsuccessfully: "INFORMAÇÃO ENVIADA COM SUCESSO",
                        datasubmissionfailure: "FALHA AO ENVIAR AS INFORMAÇÕES",
                        certificationunderreview: "A CERTIFICAÇÃO ESTÁ EM REVISÃO",
                        duplicatedocumentnumber: "NÚMERO DE DOCUMENTO DUPLICADO",
                        withdrawaltime: "HORA DE RETIRADA É",
                        minimumwithdrawalamount: "O VALOR MÍNIMO DE RETIRADA ",
                        withdrawalpasswordfault: "SENHA DE RETIRADA INCORRETA",
                        withdrawsuccessfully: "RETIRADA BEM-SUCEDIDA",
                        passwordsetsuccessfully: "SENHA DEFINIDA COM SUCESSO",
                        passwordsetfail: "FALHA AO DEFINIR A SENHA",
                        oldandnewpasswordsarethesame: "AS SENHAS ANTIGAS E NOVAS SÃO AS MESMAS",
                        oldwithdrawalpasswordfault: "ERRO NA SENHA ANTIGA",
                        passwordalreadyexists: "SENHA JÁ EXISTE",
                        changepasswordsuccessful: "SENHA ALTERADA COM SUCESSO",
                        withdrawalisnotopened: "RETIRADA PROIBIDA, ENTRE EM CONTATO COM O ATENDIMENTO AO CLIENTE PARA PROCESSAMENTO",
                        withdrawaladdresshasbeenused: "ENDEREÇO DE RETIRADA JÁ UTILIZADO",
                        pleasecontactcustomerservice: "A NEGOCIAÇÃO FOI DESABILITADA, ENTRE EM CONTATO COM O ATENDIMENTO AO CLIENTE",
                        itemexist: "ITEM NÃO EXISTE",
                        eligiblepurchase: "NÃO ELEGÍVEL PARA COMPRA",
                        outsidelimit: "FORA DO LIMITE",
                        nopurchasetimes: "NENHUMA VEZ DE COMPRA",
                        pleasetryagainlater: "PLEASE TRY AGAIN LATER"
                    },
                    tab: {
                        home: "INÍCIO",
                        market: "MERCADO",
                        trade: "NEGOCIAÇÃO",
                        contract: "FUTUROS",
                        assets: "CARTEIRAS"
                    },
                    home: {
                        login: "ENTRAR",
                        register: "REGISTRAR",
                        coinTopUp: "DEPÓSITO",
                        coinTopDown: "RETIRAR",
                        ieo: "IEO",
                        staking: "STAKING",
                        service: "SERVIÇOS",
                        buyCoin: "COMPRAR MOEDAS",
                        transactionPair: "NOME",
                        recentQuotation: "ÚLTIMO PREÇO",
                        change: "MUDANÇA 24H %",
                        comingsoon: "EM BREVE"
                    },
                    lang: {
                        lang: "GERENCIAMENTO DE IDIOMAS"
                    },
                    notice: {
                        notice: "NOTIFICAÇÕES"
                    },
                    agreement: {
                        agreement: "ACORDOS DE SERVIÇO"
                    },
                    user: {
                        user: "USUÁRIO",
                        login: "ENTRAR",
                        register: "REGISTRAR",
                        email: "E-MAIL",
                        phone: "TELEFONE",
                        phonenumber: "NÚMERO DE TELEFONE",
                        pwd: "SENHA",
                        forgetpwd: "ESQUECI A SENHA",
                        userreg: "REGISTRAR",
                        emailErrMsg: "FORMATO DE E-MAIL INCORRETO",
                        phoneErrMsg: "FORMATO DE TELEFONE INCORRETO",
                        pwdErrMsg1: "APENAS NÚMEROS, LETRAS OU -*/+. ~! @#$%^&*(), ETC.",
                        pwdErrMsg2: "CONTER PELO MENOS UM NÚMERO",
                        pwdErrMsg3: "CONTER PELO MENOS UMA LETRA",
                        pwdErrMsg4: "TER DE 6 A 20 CARACTERES",
                        gvc: "CAPTCHA GRÁFICO",
                        checkCode: "CÓDIGO DE VERIFICAÇÃO",
                        invCode: "CÓDIGO DE CONVITE",
                        getCode: "SEND",
                        regain: "REENVIAR",
                        newPwd: "NOVA SENHA"
                    },
                    userInfo: {
                        userInfo: "INFORMAÇÕES DA CONTA",
                        creditScore: "PONTUAÇÃO DE CRÉDITO",
                        inviteCode: "CÓDIGO DE CONVITE",
                        authentication: "VERIFICAÇÕES",
                        authenticated: "APROVADO",
                        authenticatefail: "FALHA DE AUTENTICAÇÃO",
                        authenticating: "AUTENTICANDO",
                        lang: "IDIOMA",
                        withdrawalAdd: "ENDEREÇO DE RETIRADA",
                        setpwd: "SENHA",
                        support: "CENTRO DE AJUDA",
                        notice: "NOTIFICAÇÕES",
                        newNotice: "NOVA NOTIFICAÇÃO",
                        invite: "MEU CONVITE",
                        aboutUs: "SOBRE NÓS",
                        msb: "APROVAÇÃO MSB",
                        exit: "SAIR",
                        service: "ATENDIMENTO AO CLIENTE ONLINE"
                    },
                    auth: {
                        name: "NOME",
                        IDType: "SELECIONAR TIPO DE ID",
                        cardBack: "CARREGAR O VERSO DOS DOCUMENTOS",
                        cardFront: "CARREGAR A FRENTE DO DOCUMENTO",
                        IDCard: "CARTÃO DE IDENTIDADE",
                        passport: "PASSAPORTE",
                        cardErrMsg: "POR FAVOR, SELECIONE O TIPO DE DOCUMENTO",
                        idnumber: "NÚMERO DO DOCUMENTO",
                        idnumberErrMsg: "POR FAVOR, DIGITE O NÚMERO DO DOCUMENTO CORRETO",
                        overSize: "O TAMANHO DA IMAGEM NÃO PODE EXCEDER",
                        realImage: "POR FAVOR, DIGITE A IMAGEM CORRETA DO SEU DOCUMENTO",
                        uploading: "CARREGANDO",
                        uploadFail: "FALHA NO CARREGAMENTO",
                        waitUpload: "POR FAVOR, AGUARDE O TÉRMINO DO CARREGAMENTO DA IMAGEM",
                        reSub: "RENOVAR",
                        pending: "PENDENTE",
                        approve: "APROVAR",
                        authenticating: "A AUTENTICAÇÃO DO NOME REAL ESTÁ EM REVISÃO",
                        waitauthentication: "AGUARDE A REVISÃO PARA CONCLUSÃO DA OPERAÇÃO",
                        authenticatefail: "FALHA NA AUTENTICAÇÃO DO NOME REAL",
                        reauthentication: "AUTENTICAÇÃO NOVAMENTE.",
                        pleaseauthenticate: "PARA DESFRUTAR DE TODA A GAMA DE NOSSOS PRODUTOS E SERVIÇOS, SOLICITAMOS QUE VOCÊ COMPLETE O PROCESSO DE VERIFICAÇÃO DE IDENTIDADE.",
                        doauthentication: "VERIFICAR IDENTIDADE"
                    },
                    market: {
                        low: "BAIXO 24H",
                        high: "ALTO 24H",
                        vol: "VOLUME 24H",
                        timeStemp: "HORA",
                        price: "PREÇO",
                        amount: "QUANTIDADE",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        listTitle: "MERCADO USDT",
                        mainTitle: "SPOT",
                        fullOrder: "TODOS OS PEDIDOS",
                        history: "HISTÓRICO",
                        orderDetail: "DETALHES DA TRANSAÇÃO",
                        dealPrice: "PREÇO DA TRANSAÇÃO",
                        dealAmount: "NÚMERO DE TRANSAÇÕES",
                        orderAmount: "QUANTIDADE DE TRANSAÇÃO",
                        status: {
                            all: "TODOS",
                            wait: "PENDENTE",
                            done: "CONCLUÍDO",
                            cancel: "CANCELAR"
                        }
                    },
                    trade: {
                        title: "SPOT",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        available: "DISPONÍVEL",
                        orderPrice: "PREÇO DO PEDIDO",
                        orderAmount: "QUANTIDADE DO PEDIDO",
                        dealAmount: "QUANTIDADE DA TRANSAÇÃO",
                        openorders: "PEDIDOS ABERTOS",
                        limitedPrice: "PREÇO LIMITADO",
                        marketPrice: "PREÇO DE MERCADO",
                        placeholderPrice: "PREÇO",
                        placeholderCount: "QUANTIDADE",
                        placeholderAmount: "QUANTIDADE",
                        placeholderToken: "QUANTIDADE",
                        description: "MELHOR PREÇO DE MERCADO",
                        status: {
                            all: "TODOS",
                            wait: "PENDENTE",
                            done: "CONCLUÍDO",
                            cancel: "CANCELAR"
                        },
                        noMore: "SEM MAIS",
                        pleaseinputokamount: "POR FAVOR, DIGITE A QUANTIDADE CORRETA",
                        lessamount: "QUANTIDADE INSUFICIENTE",
                        lasttrades: "Últimas transações",
                        close: "Fechar"
                    },
                    contract: {
                        title: "FUTUROS",
                        listTitle: "PEDIDOS ABERTOS",
                        high: "ALTO",
                        low: "BAIXO",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            }
                        },
                        openTime: "HORA DE ABERTURA DE POSIÇÃO",
                        openPrice: "PREÇO DE ABERTURA DE POSIÇÃO",
                        totalAmount: "QUANTIDADE DE INVESTIMENTO",
                        status: {
                            onGoing: "PENDENTE",
                            closed: "CONCLUÍDO"
                        },
                        detailTitle: "DETALHE DE FUTUROS",
                        contractAmount: "QUANTIDADE DE FUTUROS",
                        contractType: "TIPO DE FUTUROS",
                        contractStatus: "STATUS DE FUTUROS",
                        minutes: "MINUTOS",
                        cycle: "DURAÇÃO DO CONTRATO",
                        closePrice: "PREÇO DE FECHAMENTO DE POSIÇÃO",
                        closeTime: "HORA DE FECHAMENTO DE POSIÇÃO",
                        profitAmount: "QUANTIDADE DE LUCRO E PERDA",
                        selectCycle: "PERÍODO DE SELEÇÃO",
                        orderAmount: "QUANTIDADE DO PEDIDO",
                        availableAmount: "SALDO DA CONTA:",
                        expectedEarnings: "LUCRO PROJETADO:",
                        submitContract: "CONFIRMAR PEDIDO",
                        noEnoughBalance: "O SALDO É INSUFICIENTE.",
                        noTotalAmount: "POR FAVOR, VERIFIQUE AS APOSTAS E OS PERÍODOS",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "VALOR MÍNIMO DE APOSTA",
                        amountcannotbemorethan: "VALOR MÁXIMO DE APOSTA",
                        keepBuying: "Continuar Comprando",
                        countDown: "Contagem regressiva",
                        closing: "Em progresso."
                    },
                    pwd: {
                        changePwd: "ALTERAR SENHA",
                        loginPwd: "SENHA DE LOGIN",
                        withdrawalPwd: "SENHA DE RETIRADA",
                        haveSet: "DEFINIDO",
                        oldPwd: "SENHA ANTIGA",
                        newPwd: "NOVA SENHA",
                        confirmPwd: "CONFIRMAR SENHA",
                        pwdErrMsg: "AS SENHAS NÃO CORRESPONDEM.",
                        tips: "PARA A SEGURANÇA DOS SEUS FUNDOS, AS RETIRADAS NÃO SÃO PERMITIDAS DENTRO DE 24 HORAS APÓS A ALTERAÇÃO DA SENHA DE LOGIN."
                    },
                    invite: {
                        invite: "CONVITE",
                        myInviteCode: "MEU CÓDIGO DE CONVITE",
                        copyUrl: "COPIAR LINK DE CONVITE",
                        firstVip: "MEMBROS DE PRIMEIRA GERAÇÃO",
                        secondVip: "MEMBROS DE SEGUNDA GERAÇÃO",
                        certified: "APROVADO",
                        uncertified: "NÃO APROVADO",
                        unit: "Pessoas"
                    },
                    withdraw: {
                        address: "GERENCIAMENTO DE ENDEREÇOS DE CRIPTO",
                        address1: "ENDEREÇO",
                        addwithdraw: "ADICIONAR ENDEREÇO DE RETIRADA",
                        not: "NENHUM ENDEREÇO SALVO",
                        add: "ADICIONAR ENDEREÇO",
                        btype: "TIPO DE MOEDA",
                        tbtype: "TIPO DE RETIRADA",
                        tbAddress: "ENDEREÇO DE RETIRADA DE CRIPTO",
                        placeholder1: "DIGITE O ENDEREÇO DA CARTEIRA",
                        addressErrMsg: "SOMENTE LETRAS MAIÚSCULAS E MINÚSCULAS E NÚMEROS SÃO PERMITIDOS",
                        remark: "OBSERVAÇÃO",
                        placeholder2: "POR FAVOR, DIGITE UMA OBSERVAÇÃO",
                        tb: "RETIRAR",
                        tbCount: "QUANTIDADE DE RETIRADA",
                        balance: "SALDO",
                        password: "SENHA DE RETIRADA",
                        all: "TUDO",
                        tips1: "VALOR MÍNIMO DE RETIRADA:",
                        tips2: ",AS RETIRADAS MENORES QUE O VALOR MÍNIMO NÃO SERÃO CREDITADAS E NÃO PODEM SER REEMBOLSADAS.",
                        tips3: "PARA PROTEGER A SEGURANÇA DOS FUNDOS, QUANDO A POLÍTICA DE SEGURANÇA DA CONTA MUDAR, ALTERAR SENHAS, VAMOS RETIRAR MOEDAS POR AUDITORIA MANUAL, POR FAVOR, AGUARDE PACIENTEMENTE O CONTATO DA EQUIPE POR TELEFONE OU E-MAIL.",
                        tips4: "A QUANTIDADE DE RETIRADA DEVE ESTAR ENTRE",
                        tips5: "",
                        tips6: "IDENTIFICAR O ENDEREÇO A SER EXCLUÍDO",
                        text: "GERENCIAMENTO DE ENDEREÇOS",
                        tips7: "VOCÊ NÃO CONFIGUROU UMA SENHA DE RETIRADA",
                        tips8: "ADICIONE UM ENDEREÇO DE RETIRADA DE CRIPTO PARA RETIRAR DINHEIRO",
                        tips9: "ADICIONE UMA CARTEIRA",
                        tips10: "TAXA DE SERVIÇO:",
                        tips11: "RECEBER MONTANTE:"
                    },
                    assets: {
                        assets: "CARTEIRAS",
                        text1: "TOTAL DE ATIVOS DA CONTA (USDT)",
                        text2: "DEVIDO AO ATRASO NAS ESTATÍSTICAS DE FUNDOS, O SALDO DA CONTA PODE NÃO SER O SALDO MAIS RECENTE, PARA UM SALDO EXATO, POR FAVOR, VÁ PARA A PÁGINA DE CONTA RELEVANTE PARA CONSULTA",
                        assetsList: "LISTA DE ATIVOS",
                        usable: "DISPONÍVEL",
                        frozen: "CONGELADO",
                        text3: "≈USDT",
                        finance: "HISTÓRICO DE TRANSAÇÕES",
                        time: "HORA",
                        amount: "QUANTIDADE",
                        explain: "EXPLICAR",
                        recharge: "DEPÓSITO",
                        withdraw: "RETIRAR",
                        buy: "COMPRAR"
                    },
                    recharge: {
                        select: "CRYPTO",
                        charge: "CRYPTO POPULAR",
                        amount: "QUANTIDADE",
                        buyCoin: "COMPRAR CRIPTOMOEDA",
                        buy: "COMPRAR",
                        chargeCoin: "DEPÓSITO",
                        chargeNet: "REDE",
                        btype: "TIPO DE MOEDA",
                        chargeAdd: "ENDEREÇO DE DEPÓSITO",
                        tips1: "POR FAVOR, INSIRA A QUANTIDADE DE DEPÓSITO",
                        tips2: "A QUANTIDADE DE DEPÓSITO PRECISA ESTAR ENTRE",
                        tips3: "ENTRE",
                        tips4: "QUANTIDADE MÍNIMA DE DEPÓSITO:",
                        tips5: "RECARREGOS MENORES QUE O VALOR MÍNIMO NÃO SERÃO CREDITADOS E NÃO PODERÃO SER REEMBOLSADOS.",
                        tips6: "POR FAVOR, ESCOLHA A REDE DE DEPÓSITO CORRETA, CASO CONTRÁRIO, OS ATIVOS NÃO SERÃO RECUPERÁVEIS. SEU ENDEREÇO DE DEPÓSITO NÃO SERÁ ALTERADO FREQUENTEMENTE E VOCÊ PODE DEPOSITAR REPETIDAMENTE; SE HOUVER ALGUMA ALTERAÇÃO, IREMOS TENTAR NOTIFICÁ-LO ATRAVÉS DE ANÚNCIO NO SITE OU E-MAIL, POR FAVOR, GARANTA QUE SEU COMPUTADOR E NAVEGADOR ESTEJAM SEGUROS PARA EVITAR QUE AS INFORMAÇÕES SEJAM ALTERADAS OU VAZADAS.",
                        chargeRecord: "REGISTROS DE DEPÓSITO",
                        time: "HORA",
                        count: "CONTAGEM",
                        success: "SUCESSO",
                        fail: "FALHA",
                        confirming: "CONFIRMANDO",
                        charging: "DEPÓSITO EM ANDAMENTO",
                        goon: "DEPÓSITO EM ANDAMENTO"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "A QUANTIDADE ESTÁ SENDO MINERADA (USDT)",
                        todayEarnings: "GANHOS DE HOJE (USDT)",
                        allEarnings: "RENDA ACUMULADA (USDT)",
                        orderEarnings: "ORDEM DE RENDA",
                        limit: "COTA (USDT)",
                        rate: "RENDIMENTO DIÁRIO",
                        cycle: "CICLO DE COMPROMISSO",
                        pledge: "COMPROMISSO",
                        detail: "DETALHE",
                        times: "LIMITE DE COMPRA",
                        yield: "TAXA DE RETORNO ANUAL",
                        balance: "SALDO",
                        amount: "QUANTIDADE COMPROMETIDA",
                        pleaseinputrightamount: "INSIRA A QUANTIDADE DE COMPROMISSO CORRETA",
                        preearnings: "RECEITA TOTAL PROJETADA",
                        pledgeRecord: "REGISTROS DE COMPROMISSO",
                        projectName: "NOME DO PROJETO",
                        pledgeTime: "HORA DO COMPROMISSO",
                        cutOffTime: "HORA DE LIQUIDAÇÃO",
                        investmentAmount: "QUANTIDADE DE INVESTIMENTO",
                        status: "STATUS",
                        incomeRecord: "REGISTROS DE LIBERAÇÃO DE RENDA",
                        earning: "ESTAR GANHANDO",
                        settled: "JÁ LIQUIDADO",
                        day: "DIA"
                    },
                    append: {
                        gotologin: "IR PARA O LOGIN",
                        logining: "LOGANDO..."
                    },
                    data: {
                        recharge: "DEPÓSITO",
                        withdraw: "RETIRAR",
                        withdrawalrefusal: "RECUSA DE RETIRADA",
                        secondcontractorder: "ORDEM FUTURA",
                        secondcontractwin: "LUCRO FUTURO",
                        cointransactioniscancelled: "NEGOCIAÇÃO SPOT CANCELADA",
                        placeanorderforcointrading: "ORDEM DE NEGOCIAÇÃO SPOT",
                        plusdeduction: "AJUSTAR SALDO",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        pending: "PENDENTE",
                        successful: "BEM-SUCEDIDO",
                        fail: "FALHA",
                        defipledge: "COMPROMISSO DEFI",
                        miningincome: "RENDA DE MINERAÇÃO",
                        settleaccount: "LIQUIDAR CONTA",
                        limitordertrading: "Negociação de ordem limite",
                        limitorderwaspurchasedsuccessfully: "Ordem limite foi comprada com sucesso",
                        realnameauthentication: "Identidade verificada com sucesso",
                        realnamesuccess: "Sua autenticação de nome real foi aprovada, desejo-lhe uma transação feliz",
                        realnameauthenticationfailed: "Falha na autenticação de nome real",
                        rechargesuccessfullytips: "Seu depósito foi bem-sucedido, desejo-lhe uma transação feliz",
                        rechargesuccessfully: "Depósito bem-sucedido",
                        rechargefailure: "Falha no depósito",
                        successfulwithdrawal: "Retirada bem-sucedida",
                        withdrawalfailure: "Falha na retirada",
                        successfulwithdrawaltips: "Seu pedido de retirada foi aprovado, por favor, verifique",
                        handlingcharge: "Taxa de serviço",
                        transactionamountisnotsatisfied: "QUANTIDADE MÍNIMA DE TRANSACÇÃO:",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "PENDENTE",
                        closeddata: "CONCLUÍDO"
                    },
                    title: {
                        home: "TROCA DE CRIPTOMOEDAS",
                        market: "MERCADO",
                        trade: "NEGOCIAÇÃO",
                        futures: "FUTUROS",
                        wallets: "CARTEIRAS",
                        userinfo: "INFORMAÇÕES DA CONTA",
                        tradelist: "REGISTROS DE NEGOCIAÇÃO",
                        orderlist: "REGISTROS ABERTOS",
                        futureslist: "REGISTROS DE FUTUROS",
                        walletsdetail: "DETALHE DAS CARTEIRAS",
                        user: "USUÁRIO",
                        language: "IDIOMA",
                        notice: "AVISO",
                        login: "LOGIN",
                        register: "REGISTRO",
                        serviceprotoc: "ACORDO",
                        forgetpassword: "ESQUECI A SENHA",
                        authentication: "VERIFICAÇÕES",
                        modifypassword: "MODIFICAR SENHA",
                        invite: "MEU CONVITE",
                        aboutus: "SOBRE NÓS",
                        onlineservice: "SERVIÇOS",
                        withdrawpassword: "SENHA DE RETIRADA",
                        withdrawaddress: "GERENCIAMENTO DE ENDEREÇO DE CRIPTO",
                        addwithdrawaddress: "ADICIONAR ENDEREÇO",
                        withdraw: "RETIRAR",
                        deposit: "DEPÓSITO",
                        choosecoin: "CRYPTO",
                        depositrecord: "REGISTROS DE DEPÓSITO",
                        recharge: "DEPÓSITO",
                        defilist: "DEFI",
                        defidetail: "DETALHE DE DEFI",
                        pledgerecord: "REGISTROS DE COMPROMISSO",
                        incomerecord: "REGISTROS DE RENDA",
                        msb: "APROVAÇÃO MSB"
                    }
                }
            }
              , D = {
                app: {
                    hello: "Hello World!",
                    common: {
                        input: "Please enter",
                        select: "Please select",
                        upload: "Upload",
                        confirm: "Confirm",
                        cancel: "Cancel",
                        submit: "Submit",
                        save: "Save",
                        paste: "Paste"
                    },
                    msg: {
                        success: "The operation was successful!",
                        wait: "Stay tuned!",
                        keeplogin: "Keep log in ",
                        username: "Username",
                        userid: "User ID",
                        nickname: "Nickname",
                        password: "Password",
                        signup: "Register",
                        signin: "Login",
                        signout: "Sign out",
                        guest: "Guest",
                        welcome: "Hello!",
                        add: "Add",
                        edit: "Edit",
                        delete: "Delete",
                        move: "Move",
                        name: "Name",
                        status: "Status",
                        weight: "Weight",
                        operate: "Operation",
                        warning: "Warning",
                        default: "Default",
                        article: "Article",
                        page: "Page",
                        ok: "Ok",
                        cancel: "Cancel",
                        loading: "Loading",
                        more: "More",
                        normal: "Normal",
                        hidden: "Hidden",
                        submit: "Submit",
                        reset: "Reset",
                        execute: "Execute",
                        close: "Close",
                        search: "Search",
                        refresh: "Refresh",
                        first: "Homepage",
                        previous: "Previous page",
                        next: "Next page",
                        last: "Last page",
                        none: "None",
                        home: "Mainpage",
                        online: "Online",
                        logout: "Exit",
                        profile: "Profile",
                        index: "Homepage",
                        hot: "Hot",
                        recommend: "Recommend",
                        console: "Console",
                        code: "Code",
                        message: "Content",
                        line: "Line",
                        file: "File",
                        menu: "Menu",
                        type: "Type",
                        title: "Title",
                        content: "Content",
                        append: "Add",
                        memo: "Remarks",
                        parent: "Parent",
                        params: "Params",
                        permission: "Permission",
                        advancesearch: "Advanced search",
                        checkall: "Select all",
                        expandall: "Expand all",
                        begintime: "Start time",
                        endtime: "End time",
                        createtime: "Creation time",
                        flag: "Logo",
                        pleaseloginfirst: "Please log in and operate",
                        uploadedsuccessful: "Upload successfully",
                        youcanuploaduptodfiles: "You can upload up to d files",
                        youcanchooseuptodfiles: "You can choose up to d files",
                        chunkfilewriteerror: "Sharding input failed",
                        chunkfileinfoerror: "Sharding file error",
                        chunkfilemergeerror: "Sharding merge error",
                        chunkfiledisabled: "The upload function is not turned on",
                        cancelupload: "Cancel upload",
                        uploadcanceled: "Upload has been cancelled",
                        nofileuploadorserveruploadlimitexceeded: "File not uploaded or server upload limit exceeded",
                        uploadedfileformatislimited: "Upload file format is restricted",
                        uploadedfileisnotavalidimage: "The uploaded file is not a valid image file",
                        areyousureyouwanttocancelthisupload: "Confirm cancel upload",
                        removefile: "Remove file",
                        youcanonlyuploadamaximumofsfiles: "You are allowed to upload up to one file",
                        youcantuploadfilesofthistype: "File types are not allowed to be uploaded",
                        serverrespondedwithscode: "Server response",
                        fileistoobigsmibmaxfilesizesmib: "Currently uploading M, the maximum allowable upload file size M",
                        redirectnow: "Skip",
                        operationcompleted: "The operation was successful!",
                        operationfailed: "Operation failed!",
                        unknowndataformat: "Unknown data format!",
                        networkerror: "Network error!",
                        advancedsearch: "Advanced search",
                        invalidparameters: "Unknown parameter",
                        noresultswerefound: "Record not found",
                        parameterscannotbeempty: "Parameter cannot be empty",
                        youhavenopermission: "You have no permission to access",
                        anunexpectederroroccured: "An unexpected error has occurred, and the program is being processed urgently",
                        thispagewillberedirectedinseconds: "The page will automatically jump in seconds",
                        parametererror: "Parameter error",
                        networdmustbecharacters: "Password must be 630 characters",
                        insufficientbalance: "Insufficient balance"
                    },
                    tab: {
                        home: "Homepage",
                        market: "Market",
                        trade: "Trade",
                        contract: "Contract",
                        assets: "Assets"
                    },
                    home: {
                        login: "Login",
                        register: "Register",
                        coinTopUp: "Deposit",
                        coinTopDown: "Withdraw coins",
                        ieo: "IEO",
                        staking: "Staking",
                        service: "Customer service",
                        buyCoin: "I want to buy coins",
                        transactionPair: "Transaction Pair",
                        recentQuotation: "Latest price",
                        change: "Rise and fall"
                    },
                    lang: {
                        lang: "Language management"
                    },
                    notice: {
                        notice: "notice"
                    },
                    agreement: {
                        agreement: "Service agreement"
                    },
                    user: {
                        user: "User",
                        login: "Login",
                        register: "Register",
                        email: "Email",
                        phone: "Phone number",
                        pwd: "Password",
                        forgetpwd: "Forgot password",
                        userreg: "User registration",
                        emailErrMsg: "The email format is incorrect",
                        pwdErrMsg1: "It can only be numbers, letters or-*/+.~!@#$%^&*() and other symbols",
                        pwdErrMsg2: "Contains at least numbers",
                        pwdErrMsg3: "Contains at least letters",
                        pwdErrMsg4: "Length 6-20",
                        gvc: "Graphic verification Code",
                        checkCode: "Verification Code",
                        invCode: "Invitation Code",
                        getCode: "SEND",
                        regain: "Regain",
                        newPwd: "New password"
                    },
                    userInfo: {
                        userInfo: "Personal Center",
                        creditScore: "Credit Score",
                        inviteCode: "Invitation Code",
                        authentication: "Real-name authentication",
                        authenticated: "Authentication complete",
                        lang: "Language",
                        withdrawalAdd: "Withdrawal address",
                        setpwd: "Password Management",
                        support: "Help Center",
                        notice: "Notice",
                        newNotice: "New Notification",
                        invite: "My invitation",
                        AboutUs: "About us",
                        msb: "MSB Certification",
                        exit: "Exit",
                        service: "Online Customer Service"
                    },
                    auth: {
                        name: "Name",
                        IdType: "ID type",
                        cardBack: "Upload the reverse side of the ID",
                        cardFront: "Upload the front of the ID",
                        IDCard: "ID Card",
                        passport: "Passport",
                        idnumber: "ID number",
                        idnumberErrMsg: "Please enter the correct ID number",
                        over5: "The picture size cannot exceed 5M"
                    },
                    market: {
                        low: "Lowest",
                        high: "Highest",
                        vol: "24H volume",
                        timeStemp: "Time",
                        price: "Price",
                        amount: "Quantity",
                        buy: "Buy",
                        sell: "Sell",
                        Listtle: "USDT Market",
                        Maintain: "Currency Transaction",
                        fullOrder: "All entrusted",
                        history: "Historical record",
                        OrderDetail: "Transaction Details",
                        dealPrice: "Transaction Price",
                        dealAmount: "Number of transactions",
                        orderAmount: "Number of orders",
                        status: {
                            all: "all",
                            wait: "Pending transaction",
                            done: "Complete",
                            cancel: "Cancel"
                        }
                    },
                    trade: {
                        Title: "Currency transaction",
                        buy: "Buy",
                        sell: "Sell",
                        available: "Available",
                        dealPrice: "Commission Price",
                        dealAmount: "Number of Consignments"
                    },
                    pwd: {
                        changePwd: "Change password",
                        loginPwd: "Login password",
                        withdrawalPwd: "Withdrawal password",
                        haveSet: "Already set",
                        oldPwd: "Old password",
                        newPwd: "New password",
                        confirmPwd: "Confirm password",
                        pwdErrMsg: "The password do not match",
                        tips: "For the safety of your funds, withdrawals are not allowed within 24 hours after the login password is modified"
                    },
                    invite: {
                        invite: "Invite",
                        myInviteCode: "My invitation code",
                        copyUrl: "Copy invitation link",
                        firstVip: "First stage member",
                        secondVip: "Second stage member",
                        certified: "Certified",
                        unidentified: "Uncertified",
                        unit: "people"
                    },
                    withdrawAddress: {
                        address: "Withdrawal address management",
                        addwithdraw: "Add withdrawal address",
                        not: "No saved address ",
                        add: "Add address",
                        btype: "Currency type",
                        tbtype: "Withdrawal type",
                        tbAddress: "Withdrawal address",
                        placeholder1: "Please enter or paste the withdrawal address",
                        addressErrMsg: "Only uppercase and lowercase letters and numbers are allowed",
                        remark: "Remarks",
                        placeholder2: "Please enter remarks"
                    }
                }
            }
              , C = {
                app: {
                    hello: "Hello World!",
                    common: {
                        input: "Please enter",
                        select: "Please select",
                        upload: "Upload",
                        confirm: "Confirm",
                        cancel: "Cancel",
                        submit: "Submit",
                        save: "Save",
                        paste: "Paste"
                    },
                    msg: {
                        success: "The operation was successful!",
                        wait: "Stay tuned!",
                        keeplogin: "Keep log in ",
                        username: "Username",
                        userid: "User ID",
                        nickname: "Nickname",
                        password: "Password",
                        signup: "Register",
                        signin: "Login",
                        signout: "Sign out",
                        guest: "Guest",
                        welcome: "Hello!",
                        add: "Add",
                        edit: "Edit",
                        delete: "Delete",
                        move: "Move",
                        name: "Name",
                        status: "Status",
                        weight: "Weight",
                        operate: "Operation",
                        warning: "Warning",
                        default: "Default",
                        article: "Article",
                        page: "Page",
                        ok: "Ok",
                        cancel: "Cancel",
                        loading: "Loading",
                        more: "More",
                        normal: "Normal",
                        hidden: "Hidden",
                        submit: "Submit",
                        reset: "Reset",
                        execute: "Execute",
                        close: "Close",
                        search: "Search",
                        refresh: "Refresh",
                        first: "Homepage",
                        previous: "Previous page",
                        next: "Next page",
                        last: "Last page",
                        none: "None",
                        home: "Mainpage",
                        online: "Online",
                        logout: "Exit",
                        profile: "Profile",
                        index: "Homepage",
                        hot: "Hot",
                        recommend: "Recommend",
                        console: "Console",
                        code: "Code",
                        message: "Content",
                        line: "Line",
                        file: "File",
                        menu: "Menu",
                        type: "Type",
                        title: "Title",
                        content: "Content",
                        append: "Add",
                        memo: "Remarks",
                        parent: "Parent",
                        params: "Params",
                        permission: "Permission",
                        advancesearch: "Advanced search",
                        checkall: "Select all",
                        expandall: "Expand all",
                        begintime: "Start time",
                        endtime: "End time",
                        createtime: "Creation time",
                        flag: "Logo",
                        pleaseloginfirst: "Please log in and operate",
                        uploadedsuccessful: "Upload successfully",
                        youcanuploaduptodfiles: "You can upload up to d files",
                        youcanchooseuptodfiles: "You can choose up to d files",
                        chunkfilewriteerror: "Sharding input failed",
                        chunkfileinfoerror: "Sharding file error",
                        chunkfilemergeerror: "Sharding merge error",
                        chunkfiledisabled: "The upload function is not turned on",
                        cancelupload: "Cancel upload",
                        uploadcanceled: "Upload has been cancelled",
                        nofileuploadorserveruploadlimitexceeded: "File not uploaded or server upload limit exceeded",
                        uploadedfileformatislimited: "Upload file format is restricted",
                        uploadedfileisnotavalidimage: "The uploaded file is not a valid image file",
                        areyousureyouwanttocancelthisupload: "Confirm cancel upload",
                        removefile: "Remove file",
                        youcanonlyuploadamaximumofsfiles: "You are allowed to upload up to one file",
                        youcantuploadfilesofthistype: "File types are not allowed to be uploaded",
                        serverrespondedwithscode: "Server response",
                        fileistoobigsmibmaxfilesizesmib: "Currently uploading M, the maximum allowable upload file size M",
                        redirectnow: "Skip",
                        operationcompleted: "The operation was successful!",
                        operationfailed: "Operation failed!",
                        unknowndataformat: "Unknown data format!",
                        networkerror: "Network error!",
                        advancedsearch: "Advanced search",
                        invalidparameters: "Unknown parameter",
                        noresultswerefound: "Record not found",
                        parameterscannotbeempty: "Parameter cannot be empty",
                        youhavenopermission: "You have no permission to access",
                        anunexpectederroroccured: "An unexpected error has occurred, and the program is being processed urgently",
                        thispagewillberedirectedinseconds: "The page will automatically jump in seconds",
                        parametererror: "Parameter error",
                        networdmustbecharacters: "Password must be 630 characters",
                        insufficientbalance: "Insufficient balance"
                    },
                    tab: {
                        home: "Homepage",
                        market: "Market",
                        trade: "Trade",
                        contract: "Contract",
                        assets: "Assets"
                    },
                    home: {
                        login: "Login",
                        register: "Register",
                        coinTopUp: "Deposit",
                        coinTopDown: "Withdraw coins",
                        ieo: "IEO",
                        staking: "Staking",
                        service: "Customer service",
                        buyCoin: "I want to buy coins",
                        transactionPair: "Transaction Pair",
                        recentQuotation: "Latest price",
                        change: "Rise and fall"
                    },
                    lang: {
                        lang: "Language management"
                    },
                    notice: {
                        notice: "notice"
                    },
                    agreement: {
                        agreement: "Service agreement"
                    },
                    user: {
                        user: "User",
                        login: "Login",
                        register: "Register",
                        email: "Email",
                        phone: "Phone number",
                        pwd: "Password",
                        forgetpwd: "Forgot password",
                        userreg: "User registration",
                        emailErrMsg: "The email format is incorrect",
                        pwdErrMsg1: "It can only be numbers, letters or-*/+.~!@#$%^&*() and other symbols",
                        pwdErrMsg2: "Contains at least numbers",
                        pwdErrMsg3: "Contains at least letters",
                        pwdErrMsg4: "Length 6-20",
                        gvc: "Graphic verification Code",
                        checkCode: "Verification Code",
                        invCode: "Invitation Code",
                        getCode: "SEND",
                        regain: "Regain",
                        newPwd: "New password"
                    },
                    userInfo: {
                        userInfo: "Personal Center",
                        creditScore: "Credit Score",
                        inviteCode: "Invitation Code",
                        authentication: "Real-name authentication",
                        authenticated: "Authentication complete",
                        lang: "Language",
                        withdrawalAdd: "Withdrawal address",
                        setpwd: "Password Management",
                        support: "Help Center",
                        notice: "Notice",
                        newNotice: "New Notification",
                        invite: "My invitation",
                        AboutUs: "About us",
                        msb: "MSB Certification",
                        exit: "Exit",
                        service: "Online Customer Service"
                    },
                    auth: {
                        name: "Name",
                        IdType: "ID type",
                        cardBack: "Upload the reverse side of the ID",
                        cardFront: "Upload the front of the ID",
                        IDCard: "ID Card",
                        passport: "Passport",
                        idnumber: "ID number",
                        idnumberErrMsg: "Please enter the correct ID number",
                        over5: "The picture size cannot exceed 5M"
                    },
                    market: {
                        low: "Lowest",
                        high: "Highest",
                        vol: "24H volume",
                        timeStemp: "Time",
                        price: "Price",
                        amount: "Quantity",
                        buy: "Buy",
                        sell: "Sell",
                        Listtle: "USDT Market",
                        Maintain: "Currency Transaction",
                        fullOrder: "All entrusted",
                        history: "Historical record",
                        OrderDetail: "Transaction Details",
                        dealPrice: "Transaction Price",
                        dealAmount: "Number of transactions",
                        orderAmount: "Number of orders",
                        status: {
                            all: "all",
                            wait: "Pending transaction",
                            done: "Complete",
                            cancel: "Cancel"
                        }
                    },
                    trade: {
                        Title: "Currency transaction",
                        buy: "Buy",
                        sell: "Sell",
                        available: "Available",
                        dealPrice: "Commission Price",
                        dealAmount: "Number of Consignments"
                    },
                    pwd: {
                        changePwd: "Change password",
                        loginPwd: "Login password",
                        withdrawalPwd: "Withdrawal password",
                        haveSet: "Already set",
                        oldPwd: "Old password",
                        newPwd: "New password",
                        confirmPwd: "Confirm password",
                        pwdErrMsg: "The password do not match",
                        tips: "For the safety of your funds, withdrawals are not allowed within 24 hours after the login password is modified"
                    },
                    invite: {
                        invite: "Invite",
                        myInviteCode: "My invitation code",
                        copyUrl: "Copy invitation link",
                        firstVip: "First stage member",
                        secondVip: "Second stage member",
                        certified: "Certified",
                        unidentified: "Uncertified",
                        unit: "people"
                    },
                    withdrawAddress: {
                        address: "Withdrawal address management",
                        addwithdraw: "Add withdrawal address",
                        not: "No saved address ",
                        add: "Add address",
                        btype: "Currency type",
                        tbtype: "Withdrawal type",
                        tbAddress: "Withdrawal address",
                        placeholder1: "Please enter or paste the withdrawal address",
                        addressErrMsg: "Only uppercase and lowercase letters and numbers are allowed",
                        remark: "Remarks",
                        placeholder2: "Please enter remarks"
                    }
                }
            }
              , p = {
                app: {
                    hello: "HALLO, WELT!",
                    download: "App Herunterladen und Öffnen",
                    common: {
                        input: "EINGEBEN ",
                        select: "AUSWÄHLEN",
                        upload: "HOCHLADEN",
                        confirm: "BESTÄTIGEN",
                        cancel: "ABBRECHEN",
                        submit: "SENDEN",
                        save: "SPEICHERN",
                        paste: "EINFÜGEN",
                        noorder: "KEINE BESTELLUNG",
                        noData: "Keine Daten"
                    },
                    msg: {
                        limitsendcode: "Die maximale Anzahl an Versuchen, einen Verifizierungscode zu erhalten, wurde erreicht. Bitte versuchen Sie es morgen erneut.",
                        hint: "HINWEIS",
                        know: "ICH HABE ES.",
                        notShownToday: "NICHT HEUTE.",
                        copy: "KOPIEREN ERFOLGREICH",
                        success: "ERFOLGREICHE OPERATION!",
                        wait: "BITTE FREUEN SIE SICH DARAUF!",
                        keeplogin: "EINGELOGGT BLEIBEN",
                        username: "BENUTZERNAME",
                        userid: "BENUTZERID",
                        nickname: "SPITZNAME",
                        password: "PASSWORT",
                        signup: "REGISTRIERUNGEN",
                        signin: "ANMELDEN",
                        signout: "ABMELDEN",
                        guest: "GAST",
                        welcome: "HALLO!",
                        add: "HINZUFÜGEN",
                        edit: "BEARBEITEN",
                        delete: "LÖSCHEN",
                        move: "BEWEGUNG",
                        name: "NAME",
                        status: "STATUS",
                        weigh: "GEWICHT",
                        operate: "OPERATION",
                        warning: "HINWEIS",
                        default: "STANDARD",
                        article: "ARTIKEL",
                        page: "SEITE",
                        ok: "BESTÄTIGEN",
                        cancel: "ABBRECHEN",
                        loading: "LADEN",
                        more: "MEHR",
                        normal: "NORMAL",
                        hidden: "VERSTECKT",
                        submit: "SENDEN",
                        reset: "ZURÜCKSETZEN",
                        execute: "AUSFÜHREN",
                        close: "SCHLIESSEN",
                        search: "SUCHEN",
                        refresh: "AKTUALISIEREN",
                        first: "STARTSEITE",
                        previous: "VORHERIGE SEITE",
                        next: "NÄCHSTE SEITE",
                        last: "LETZTE SEITE",
                        none: "KEINE",
                        home: "STARTSEITE",
                        online: "ONLINE",
                        logout: "ABMELDEN",
                        profile: "PERSÖNLICHES PROFIL",
                        index: "STARTSEITE",
                        hot: "BELIEBT",
                        recommend: "EMPFEHLEN",
                        console: "KONSOLE",
                        code: "SERIENNUMMER",
                        message: "ELEMENT",
                        line: "ZEILENNUMMER",
                        file: "DATEI",
                        menu: "MENÜ",
                        type: "TYP",
                        title: "TITEL",
                        content: "INHALT",
                        append: "ANHÄNGEN",
                        memo: "MEMO",
                        parent: "ELTERNSTUFE",
                        params: "PARAMETER",
                        permission: "BERECHTIGUNG",
                        advancesearch: "ERWEITERTE SUCHE",
                        checkall: "ALLE AUSWÄHLEN",
                        expandall: "ALLE ERWEITERN",
                        begintime: "STARTZEIT",
                        endtime: "ENDZEIT",
                        createtime: "ERSTELLUNGSZEIT",
                        flag: "LOGOS",
                        pleaseloginfirst: "BITTE MELDEN SIE SICH AN, UM ZU BETÄTIGEN",
                        uploadedsuccessful: "ERFOLGREICH HOCHGELADEN",
                        youcanuploaduptodfiles: "SIE KÖNNEN AUCH BIS ZU MEHRERE DATEIEN HOCHLADEN",
                        youcanchooseuptodfiles: "SIE KÖNNEN AUCH BIS ZU MEHRERE DATEIEN AUSWÄHLEN",
                        chunkfilewriteerror: "SEGMENTIERTES SCHREIBEN FEHLER",
                        chunkfileinfoerror: "SEGMENTDATEI FEHLER",
                        chunkfilemergeerror: "SEGMENTIERTE ZUSAMMENFÜHRUNGSFEHLER",
                        chunkfiledisabled: "GETEILTER UPLOAD IST NICHT AKTIVIERT",
                        cancelupload: "UPLOAD ABBRECHEN",
                        uploadcanceled: "UPLOAD ABBGEBROCHEN",
                        nofileuploadorserveruploadlimitexceeded: "DATEIEN NICHT HOCHGELADEN ODER SERVERUPLOADLIMIT ÜBERSCHRITTEN",
                        uploadedfileformatislimited: "EINGESCHRÄNKTES UPLOAD-FORMAT",
                        uploadedfileisnotavalidimage: "UPLOAD EINER DATEI, DIE KEIN GÜLTIGES BILD IST",
                        areyousureyouwanttocancelthisupload: "BESTÄTIGEN SIE DAS ABBRECHEN DES UPLOADS",
                        removefile: "DATEIEN ENTFERNEN",
                        youcanonlyuploadamaximumofsfiles: "SIE KÖNNEN MAXIMAL DATEIEN HOCHLADEN",
                        youcantuploadfilesofthistype: "DATEITYPEN KÖNNEN NICHT HOCHGELADEN WERDEN",
                        serverrespondedwithscode: "SERVERSEITIGE ANTWORT",
                        fileistoobigsmibmaxfilesizesmib: "AKTUELLES UPLOAD M, MAXIMALE ZULÄSSIGE UPLOAD-DATEIGRÖSSE M",
                        redirectnow: "JETZT WEITERLEITEN",
                        operationcompleted: "ERFOLGREICHE OPERATION!",
                        operationfailed: "FEHLERHAFTE OPERATION!",
                        unknowndataformat: "UNBEKANNTES DATENFORMAT!",
                        networkerror: "NETZWERKFEHLER!",
                        advancedsearch: "ERWEITERTE SUCHE",
                        invalidparameters: "UNBEKANNTE PARAMETER",
                        noresultswerefound: "KEINE DATENSÄTZE GEFUNDEN",
                        parameterscannotbeempty: "PARAMETER DÜRFEN NICHT LEER SEIN",
                        youhavenopermission: "SIE HABEN KEINE ZUGRIFFSBERECHTIGUNG.",
                        anunexpectederroroccurred: "ES IST EIN UNERWARTETER FEHLER AUFGETRETEN. DER PROGRAMMIERER ARBEITET DARAN.",
                        thispagewillberedirectedinsseconds: "DIE SEITE WIRD IN SEKUNDEN AUTOMATISCH WEITERGELEITET",
                        parametererror: "PARAMETERFEHLER",
                        passwordmustbecharacters: "DAS PASSWORT MUSS 6-30 ZEICHEN LANG SEIN",
                        insufficientbalance: "DAS GUTHABEN IST NICHT AUSREICHEND.",
                        recharge: "AUFLADEN",
                        withdraw: "ABHEBEN",
                        cointransaction: "SPOT",
                        withdrawalrefusal: "ABHEBUNG ABGELEHNT",
                        secondcontractorder: "FEATURES-AUFTRÄGE",
                        secondcontractwin: "FEATURES-GEWINNE",
                        cointransactioniscancelled: "SPOT STORNIERT",
                        placeanorderforcointrading: "SPOT-AUFTRAG",
                        plusdeduction: "PLUS ABZUG",
                        orderdoesnotexist: "AUFTRAG EXISTIERT NICHT",
                        typeerror: "TYPFEHLER",
                        cointransactionisnotenabledforthiscurrency: "WÄHRUNG UNTERSTÜTZT KEINEN SPOT-HANDEL",
                        limitunitpricecannotbeempty: "BEGRENZTER EINHEITSPREIS DARF NICHT LEER SEIN",
                        ordersuccessful: "AUFTRAG ERFOLGREICH",
                        pleaseentertheamounttosell: "BITTE GEBEN SIE DIE VERKAUFSMENGE EIN",
                        high: "HOCH",
                        low: "NIEDRIG",
                        ongoing: "AUSSTEHENDE ABRECHNUNG",
                        closed: "ABGEWICKELT",
                        contractdoesnotexist: "FEATURES",
                        pleasecompleterealnameauthenticationfirst: "BITTE FÜHREN SIE ZUERST DIE AUTHENTIFIZIERUNG DES ECHTEN NAMENS DURCH",
                        settlementperioddoesnotexist: "ABRECHNUNGSZYKLUS EXISTIERT NICHT",
                        amountofinvestmentexceedsthelimit: "INVESTITIONEN ÜBERSCHREITEN DAS LIMIT",
                        currencydoesnotexist: "WÄHRUNG NICHT VERFÜGBAR",
                        orderfailure: "AUFTRAGSFEHLER",
                        secondcontractisnotenabledforthiscurrency: "FEATURES IST FÜR DIESE WÄHRUNG NICHT AKTIVIERT",
                        limitordertrading: "SPOT LIMIT ORDER",
                        limitorderwaspurchasedsuccessfully: "SPOT LIMIT ORDER ERFOLGREICH GEKAUFT",
                        minimumtopuplimit: "MINDESTAUFLADELIMIT",
                        maximumtopuplimit: "MAXIMALES AUFLADELIMIT",
                        rechargesuccessfully: "AUFLADEN ERFOLGREICH",
                        pending: "AUSSTEHEND",
                        successful: "ERFOLGREICH",
                        fail: "FEHLER",
                        usercenter: "MITGLIEDERZENTRUM",
                        register: "ANMELDEN",
                        login: "EINLOGGEN",
                        signupsuccessful: "ERFOLGREICHE REGISTRIERUNG",
                        usernamecannotbeempty: "BENUTZERNAME DARF NICHT LEER SEIN",
                        usernamemustbe3to30characters: "BENUTZERNAME MUSS 3-30 ZEICHEN LANG SEIN",
                        usernamemustbe6to30characters: "BENUTZERNAME MUSS 6-30 ZEICHEN LANG SEIN",
                        passwordcannotbeempty: "PASSWORT DARF NICHT LEER SEIN",
                        mobileisincorrect: "FALSCHES TELEFONFORMAT",
                        usernamealreadyexist: "BENUTZERNAME EXISTIERT BEREITS",
                        nicknamealreadyexist: "SPITZNAME EXISTIERT BEREITS",
                        emailalreadyexist: "E-MAIL EXISTIERT BEREITS",
                        mobilealreadyexist: "TELEFONNUMMER EXISTIERT BEREITS",
                        usernameisincorrect: "FALSCHER BENUTZERNAME",
                        emailisincorrect: "FALSCHE E-MAIL-ADRESSE",
                        accountislocked: "DER ACCOUNT WURDE GESPERRT.",
                        passwordisincorrect: "FALSCHE PASSWORT",
                        accountisincorrect: "ACCOUNTS EXISTIEREN NICHT",
                        accountnotexist: "ACCOUNT EXISTIERT NICHT",
                        invitationcodedoesnotexist: "EINLADUNGSCODE EXISTIERT NICHT",
                        accountcannotbeempty: "ACCOUNT DARF NICHT LEER SEIN",
                        usernameorpasswordisincorrect: "FALSCHER BENUTZERNAME ODER PASSWORT",
                        youarenotloggedin: "SIE SIND DERZEIT NICHT EINGELOGGT",
                        youveloggedindonotloginagain: "SIE SIND BEREITS EINGELOGGT, BITTE NICHT ERNEUT EINLOGGEN",
                        verifyemail: "E-MAIL VERIFIZIERUNG",
                        changepassword: "PASSWORT ÄNDERN",
                        captchaisincorrect: "DER VERIFIZIERUNGSCODE IST FALSCH",
                        loggedinsuccessful: "EINLOGGEN ERFOLGREICH",
                        logoutsuccessful: "ABMELDEN ERFOLGREICH",
                        changepasswordfailure: "PASSWORTÄNDERUNG FEHLGESCHLAGEN",
                        resetpasswordsuccessful: "PASSWORT ZURÜCKSETZEN ERFOLGREICH",
                        sendfrequently: "SENDEN HÄUFIG",
                        accountalreadyexist: "DIESER ACCOUNT EXISTIERT BEREITS",
                        unregistered: "NICHT REGISTRIERT",
                        sendsuccessfully: "ERFOLGREICH GESCHICKT",
                        sendfail: "SENDEN FEHLGESCHLAGEN",
                        thegraphicverificationcodeisincorrect: "GRAFISCHER CAPTCHA-FEHLER",
                        documenttypeerror: "FALSCHE DOKUMENTART",
                        datasubmittedsuccessfully: "INFORMATIONEN ERFOLGREICH EINGEREICHT",
                        datasubmissionfailure: "FEHLER BEI DER EINREICHUNG VON INFORMATIONEN",
                        certificationunderreview: "ZERTIFIZIERUNG WIRD ÜBERPRÜFT",
                        duplicatedocumentnumber: "DOPPELTE DOKUMENTNUMMER",
                        withdrawaltime: "ABHEBEZEIT IST",
                        minimumwithdrawalamount: "DER MINDESTABHEBUNGSBETRAG ",
                        withdrawalpasswordfault: "FALSCHES ABHEBEPASSWORT",
                        withdrawsuccessfully: "ABHEBUNG ERFOLGREICH",
                        passwordsetsuccessfully: "PASSWORT ERFOLGREICH EINGESTELLT",
                        passwordsetfail: "PASSWORT ERFOLGREICH EINGESTELLT",
                        oldandnewpasswordsarethesame: "ALTES UND NEUES PASSWORT SIND GLEICH",
                        oldwithdrawalpasswordfault: "ALTES PASSWORT FEHLERHAFT",
                        passwordalreadyexists: "PASSWORT EXISTIERT BEREITS",
                        changepasswordsuccessful: "PASSWORT ÄNDERN ERFOLGREICH",
                        withdrawalisnotopened: "ABHEBUNG NICHT MÖGLICH, BITTE KONTAKTIEREN SIE DEN KUNDENDIENST ZUR BEARBEITUNG",
                        withdrawaladdresshasbeenused: "ABHEBUNGSADRESSE WURDE VERWENDET",
                        pleasecontactcustomerservice: "HANDEL WURDE DEAKTIVIERT, BITTE KONTAKTIEREN SIE DEN KUNDENDIENST",
                        itemexist: "ELEMENT EXISTIERT NICHT",
                        eligiblepurchase: "NICHT ZUM KAUF BERECHTIGT",
                        outsidelimit: "AUSSERHALB DER GRENZE",
                        nopurchasetimes: "KEINE KAUFZEITEN",
                        pleasetryagainlater: "PLEASE TRY AGAIN LATER"
                    },
                    tab: {
                        home: "STARTSEITE",
                        market: "MARKT",
                        trade: "HANDEL",
                        contract: "FEATURES",
                        assets: "WALLETS"
                    },
                    home: {
                        login: "ANMELDEN",
                        register: "REGISTRIEREN",
                        coinTopUp: "EINZAHLUNG",
                        coinTopDown: "ABHEBUNG",
                        ieo: "IEO",
                        staking: "STAKING",
                        service: "DIENSTLEISTUNGEN",
                        buyCoin: "MÜNZEN KAUFEN",
                        transactionPair: "NAME",
                        recentQuotation: "LETZTER PREIS",
                        change: "24H ÄND%",
                        comingsoon: "BALD VERFÜGBAR"
                    },
                    lang: {
                        lang: "SPRACHVERWALTUNG"
                    },
                    notice: {
                        notice: "NACHRICHTEN"
                    },
                    agreement: {
                        agreement: "DIENSTVEREINBARUNGEN"
                    },
                    user: {
                        user: "BENUTZER",
                        login: "ANMELDEN",
                        register: "REGISTRIEREN",
                        email: "E-MAIL",
                        phone: "TELEFON",
                        phonenumber: "TELEFONNUMMER",
                        pwd: "PASSWORT",
                        forgetpwd: "PASSWORT VERGESSEN",
                        userreg: "REGISTRIEREN",
                        emailErrMsg: "FALSCHES E-MAIL-FORMAT",
                        phoneErrMsg: "FALSCHES TELEFONFORMAT",
                        pwdErrMsg1: "NUR ZAHLEN, BUCHSTABEN ODER -*/+. ~! @#$%^&*(), USW.",
                        pwdErrMsg2: "ENTHÄLT MINDESTENS DIE ZAHL",
                        pwdErrMsg3: "ENTHÄLT MINDESTENS DIE BUCHSTABEN",
                        pwdErrMsg4: "LÄNGE 6-20",
                        gvc: "GRAFISCHES CAPTCHA",
                        checkCode: "VERIFIZIERUNGSCODE",
                        invCode: "EINLADUNGSCODE",
                        getCode: "SEND",
                        regain: "NEU SENDEN",
                        newPwd: "NEUES PASSWORT"
                    },
                    userInfo: {
                        userInfo: "KONTODATEN",
                        creditScore: "KREDITBEWERTUNG",
                        inviteCode: "EINLADUNGSCODE",
                        authentication: "VERIFIZIERUNGEN",
                        authenticated: "GENEHMIGT",
                        authenticatefail: "VERIFIZIERUNG FEHLGESCHLAGEN",
                        authenticating: "VERIFIZIERUNG",
                        lang: "SPRACHE",
                        withdrawalAdd: "ABHEBUNGSADRESSE",
                        setpwd: "PASSWORT",
                        support: "HILFEZENTRUM",
                        notice: "NACHRICHTEN",
                        newNotice: "NEUE NACHRICHTEN",
                        invite: "MEINE EINLADUNG",
                        aboutUs: "ÜBER UNS",
                        msb: "MSB-ZUSTIMMUNG",
                        exit: "ABMELDEN",
                        service: "ONLINE-KUNDENDIENST"
                    },
                    auth: {
                        name: "NAME",
                        IDType: "ID-TYP AUSWÄHLEN",
                        cardBack: "RÜCKSEITE DER DOKUMENTE HOCHLADEN",
                        cardFront: "VORDERSEITE DES DOKUMENTS HOCHLADEN",
                        IDCard: "PERSONALAUSWEIS",
                        passport: "PASS",
                        cardErrMsg: "BITTE DOKUMENTENTYP AUSWÄHLEN",
                        idnumber: "ID-NR.",
                        idnumberErrMsg: "BITTE DIE KORREKTE ID-NUMMER EINGEBEN",
                        overSize: "BILDGRÖSSE DARF NICHT ÜBERSCHREITEN",
                        realImage: "BITTE DAS KORREKTE BILD IHRES AUSWEISES EINGEBEN",
                        uploading: "UPLOAD",
                        uploadFail: "UPLOAD FEHLGESCHLAGEN",
                        waitUpload: "BITTE WARTEN SIE, BIS DER BILDUPLOAD ABGESCHLOSSEN IST",
                        reSub: "ERNEUT SENDEN",
                        pending: "AUSSTEHEND",
                        approve: "GENEHMIGT",
                        authenticating: "ECHTZEIT-VERIFIZIERUNG WIRD ÜBERPRÜFT",
                        waitauthentication: "WARTEN SIE, BIS DIE ÜBERPRÜFUNG ABGESCHLOSSEN IST",
                        authenticatefail: "ECHTZEIT-VERIFIZIERUNG FEHLGESCHLAGEN",
                        reauthentication: "ERNEUTE VERIFIZIERUNG",
                        pleaseauthenticate: "UM DAS VOLLE SPEKTRUM UNSERER PRODUKTE UND DIENSTLEISTUNGEN ZU GENIESSEN, BITTEN WIR SIE, DEN IDENTITÄTSVERIFIZIERUNGSPROZESS ABZUSCHLIESSEN.",
                        doauthentication: "IDENTITÄT BESTÄTIGEN"
                    },
                    market: {
                        low: "24H TIEF",
                        high: "24H HOCH",
                        vol: "24H VOLUMEN",
                        timeStemp: "ZEIT",
                        price: "PREIS",
                        amount: "MENGE",
                        buy: "KAUFEN",
                        sell: "VERKAUFEN",
                        listTitle: "USDT-MARKT",
                        mainTitle: "SPOT",
                        fullOrder: "ALLE AUFTRÄGE",
                        history: "VERLAUF",
                        orderDetail: "AUFTRAGSDETAILS",
                        dealPrice: "TRANSAKTIONSPREIS",
                        dealAmount: "ANZAHL DER TRANSAKTIONEN",
                        orderAmount: "TRANSAKTIONSMENGE",
                        status: {
                            all: "ALLE",
                            wait: "AUSSTEHEND",
                            done: "ABGESCHLOSSEN",
                            cancel: "ABBRECHEN"
                        }
                    },
                    trade: {
                        title: "SPOT",
                        buy: "KAUFEN",
                        sell: "VERKAUFEN",
                        available: "VERFÜGBAR",
                        orderPrice: "AUFTRAGSPREIS",
                        orderAmount: "AUFTRAGSMENGE",
                        dealAmount: "ABGESCHLOSSENE MENGE",
                        openorders: "OFFENE AUFTRÄGE",
                        limitedPrice: "LIMITIERTER PREIS",
                        marketPrice: "MARKTPREIS",
                        placeholderPrice: "PREIS",
                        placeholderCount: "MENGE",
                        placeholderAmount: "MENGE",
                        placeholderToken: "MENGE",
                        description: "BESTER MARKTPREIS",
                        status: {
                            all: "ALLE",
                            wait: "AUSSTEHEND",
                            done: "ABGESCHLOSSEN",
                            cancel: "ABBRECHEN"
                        },
                        noMore: "KEINE WEITEREN",
                        pleaseinputokamount: "BITTE GEBEN SIE DIE RICHTIGE MENGE EIN",
                        lessamount: "NICHT GENÜGEND MENGE",
                        lasttrades: "Letzte Trades",
                        close: "Schließen"
                    },
                    contract: {
                        title: "FEATURES",
                        listTitle: "OFFENE AUFTRÄGE",
                        high: "HOCH",
                        low: "TIEF",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "HOCH",
                                low: "TIEF"
                            }
                        },
                        openTime: "ERÖFFNUNGSZEIT",
                        openPrice: "ERÖFFNUNGSPREIS",
                        totalAmount: "INVESTITIONSMENGE",
                        status: {
                            onGoing: "AUSSTEHEND",
                            closed: "ABGESCHLOSSEN"
                        },
                        detailTitle: "FEATURES-DETAILS",
                        contractAmount: "FEATURES-MENGE",
                        contractType: "FEATURES-TYP",
                        contractStatus: "FEATURES-STATUS",
                        minutes: "MINUTEN",
                        cycle: "VERTRAGSLAUFZEIT",
                        closePrice: "SCHLIESSEN PREIS",
                        closeTime: "SCHLIESSEN ZEIT",
                        profitAmount: "GEWINN-/VERLUSTBETRAG",
                        selectCycle: "AUSWAHLZEITRAUM",
                        orderAmount: "AUFTRAGSMENGE",
                        availableAmount: "KONTOSTAND:",
                        expectedEarnings: "PROGNOSE-GEWINN:",
                        submitContract: "AUFTRAG BESTÄTIGEN",
                        noEnoughBalance: "DAS GUTHABEN IST NICHT AUSREICHEND.",
                        noTotalAmount: "BITTE ÜBERPRÜFEN SIE DIE EINSÄTZE UND ZEITRÄUME",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "MINDESTEINSATZBETRAG",
                        amountcannotbemorethan: "HÖCHSTEINSATZBETRAG",
                        keepBuying: "Weiter Kaufen",
                        countDown: "Countdown",
                        closing: "In Bearbeitung"
                    },
                    pwd: {
                        changePwd: "PASSWORT ÄNDERN",
                        loginPwd: "ANMELDEPASSWORT",
                        withdrawalPwd: "ABHEBEPASSWORT",
                        haveSet: "EINGESTELLT",
                        oldPwd: "ALTES PASSWORT",
                        newPwd: "NEUES PASSWORT",
                        confirmPwd: "PASSWORT BESTÄTIGEN",
                        pwdErrMsg: "PASSWÖRTER STIMMEN NICHT ÜBEREIN.",
                        tips: "AUS SICHERHEITSGRÜNDEN KÖNNEN INNERHALB VON 24 STUNDEN NACH DER ÄNDERUNG DES ANMELDEPASSWORTS KEINE AUSZAHLUNGEN VORGENOMMEN WERDEN."
                    },
                    invite: {
                        invite: "EINLADEN",
                        myInviteCode: "MEIN EINLADUNGSCODE",
                        copyUrl: "EINLADUNGSLINK KOPIEREN",
                        firstVip: "MITGLIEDER DER ERSTEN GENERATION",
                        secondVip: "MITGLIEDER DER ZWEITEN GENERATION",
                        certified: "GENEHMIGT",
                        uncertified: "NICHT GENEHMIGT",
                        unit: "PERSONEN"
                    },
                    withdraw: {
                        address: "CRYPTO-ADRESSVERWALTUNG",
                        address1: "ADRESSE",
                        addwithdraw: "ABHEBUNGSADRESSE HINZUFÜGEN",
                        not: "KEINE GESPEICHERTE ADRESSE",
                        add: "ADRESSE HINZUFÜGEN",
                        btype: "WÄHRUNGSTYP",
                        tbtype: "ABHEBUNGSTYP",
                        tbAddress: "CRYPTO-ABHEBUNGSADRESSE",
                        placeholder1: "WALLET-ADRESSE EINGEBEN",
                        addressErrMsg: "NUR GROSS- UND KLEINSCHREIBUNG, ZAHLEN SIND ZULÄSSIG",
                        remark: "HINWEIS",
                        placeholder2: "BITTE EINE NOTIZ EINGEBEN",
                        tb: "ABHEBEN",
                        tbCount: "ABHEBUNGSMENGE",
                        balance: "GUTHABEN",
                        password: "ABHEBEPASSWORT",
                        all: "ALLE NEHMEN",
                        tips1: "MINDESTABHEBEBETRAG:",
                        tips2: ", ABHEBUNGEN UNTER DEM MINDESTBETRAG WERDEN NICHT GUTGESCHRIEBEN UND KÖNNEN NICHT ERSTATTET WERDEN.",
                        tips3: "UM DIE SICHERHEIT DER GELDER ZU SCHÜTZEN, WENN SICH IHRE KONTOSICHERHEITSPOLITIK ÄNDERT, PASSWORTÄNDERUNGEN, WERDEN WIR DIE AUSZAHLUNGSMÜNZEN MANUELL PRÜFEN, BITTE WARTEN SIE GEDULDIG AUF DEN KONTAKT DES PERSONALS PER TELEFON ODER E-MAIL BITTE STELLEN SIE SICHER, DASS COMPUTER UND BROWSER SICHER SIND, UM INFORMATIONEN VOR MANIPULATION ODER LECKAGE ZU SCHÜTZEN!",
                        tips4: "ABHEBEBETRAG MUSS INNERHALB VON",
                        tips5: "LIEGEN",
                        tips6: "ZU LÖSCHEN ADRESSE IDENTIFIZIEREN",
                        text: "ADRESSENVERWALTUNG",
                        tips7: "SIE HABEN KEIN ABHEBEPASSWORT EINGESTELLT",
                        tips8: "FÜGEN SIE EINE CRYPTO-ABHEBUNGSADRESSE HINZU, UM GELD ABZUHEBEN",
                        tips9: "WALLET HINZUFÜGEN",
                        tips10: "SERVICEGEBÜHR:",
                        tips11: "ERHALTENE MENGE:"
                    },
                    assets: {
                        assets: "WALLETS",
                        text1: "GESAMTVERMÖGEN DES KONTOS (USDT)",
                        text2: "AUFGRUND DER VERZÖGERUNG BEI DER STATISTIK DER GELDER KANN DER KONTOSTAND NICHT DER AKTUELLSTE STAND SEIN. FÜR GENAUE ANGABEN GEHEN SIE BITTE AUF DIE JEWEILIGE KONTOSEITE.",
                        assetsList: "VERMÖGENSLISTE",
                        usable: "VERFÜGBAR",
                        frozen: "GESPERRT",
                        text3: "≈USDT",
                        finance: "TRANSAKTIONSHISTORIE",
                        time: "ZEIT",
                        amount: "MENGE",
                        explain: "ERKLÄRUNG",
                        recharge: "EINZAHLUNG",
                        withdraw: "ABHEBUNG",
                        buy: "KAUFEN"
                    },
                    recharge: {
                        select: "CRYPTO",
                        charge: "POPULÄRE CRYPTO",
                        amount: "MENGE",
                        buyCoin: "KRYPTOWÄHRUNG KAUFEN",
                        buy: "KAUFEN",
                        chargeCoin: "EINZAHLUNG",
                        chargeNet: "NETZWERK",
                        btype: "WÄHRUNGSTYP",
                        chargeAdd: "EINZAHLUNGSADRESSE",
                        tips1: "BITTE DIE EINZAHLUNGSMENGE EINGEBEN",
                        tips2: "DIE EINZAHLUNGSMENGE MUSS INNERHALB VON",
                        tips3: "LIEGEN",
                        tips4: "MINDESTEINZAHLUNGSBETRAG:",
                        tips5: ", EINZAHLUNGEN UNTER DEM MINDESTBETRAG WERDEN NICHT GUTGESCHRIEBEN UND KÖNNEN NICHT ERSTATTET WERDEN.",
                        tips6: "BITTE WÄHLEN SIE DAS RICHTIGE EINZAHLUNGSNETZWERK, ANDERNFALLS KÖNNEN DIE GELDER NICHT WIEDERHERGESTELLT WERDEN. IHRE EINZAHLUNGSADRESSE WIRD NICHT HÄUFIG GEÄNDERT UND SIE KÖNNEN WIEDERHOLT EINZAHLUNGEN VORNEHMEN. WENN ES ÄNDERUNGEN GIBT, WERDEN WIR SIE VERSUCHEN, ÜBER WEBSITE-ANKÜNDIGUNG ODER E-MAIL ZU INFORMIEREN. BITTE STELLEN SIE SICHER, DASS IHR COMPUTER UND BROWSER SICHER SIND, UM INFORMATIONEN VOR MANIPULATION ODER LECKAGE ZU SCHÜTZEN.",
                        chargeRecord: "EINZAHLUNGSAUFZEICHNUNGEN",
                        time: "ZEIT",
                        count: "MENGE",
                        success: "ERFOLGREICH",
                        fail: "FEHLGESCHLAGEN",
                        confirming: "BESTÄTIGUNG",
                        charging: "EINZAHLUNG WIRD DURCHGEFÜHRT",
                        goon: "EINZAHLUNG WIRD DURCHGEFÜHRT"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "DER BETRAG WIRD ABGEBAUT (USDT)",
                        todayEarnings: "HEUTIGE ERTRÄGE (USDT)",
                        allEarnings: "KUMULATIVE ERTRÄGE (USDT)",
                        orderEarnings: "ERTRAGSBESTELLUNG",
                        limit: "QUOTE (USDT)",
                        rate: "TAGESRENDITE",
                        cycle: "VERPFLICHTUNGSZYKLUS",
                        pledge: "VERPFLICHTUNG",
                        detail: "DETAILS",
                        times: "KAUFLIMIT",
                        yield: "JÄHRLICHE RENDITE",
                        balance: "GUTHABEN",
                        amount: "VERPFLICHTUNGSMENGE",
                        pleaseinputrightamount: "GEBEN SIE DIE RICHTIGE VERPFLICHTUNGSMENGE EIN",
                        preearnings: "PROGNOSE GESAMTERTRAG",
                        pledgeRecord: "VERPFLICHTUNGSAUFZEICHNUNGEN",
                        projectName: "PROJEKTNAME",
                        pledgeTime: "VERPFLICHTUNGSZEIT",
                        cutOffTime: "ABRECHNUNGSZEIT",
                        investmentAmount: "INVESTITIONSMENGE",
                        status: "STATUS",
                        incomeRecord: "ERTRAGSFREIGABEAUFZEICHNUNGEN",
                        earning: "WIRD VERDIENT",
                        settled: "BEREITS ABGERECHNET",
                        day: "TAG"
                    },
                    append: {
                        gotologin: "ZUM LOGIN GEHEN",
                        logining: "ANMELDEN..."
                    },
                    data: {
                        recharge: "EINZAHLUNG",
                        withdraw: "ABHEBUNG",
                        withdrawalrefusal: "ABHEBUNG ABGELEHNT",
                        secondcontractorder: "FUTURE-AUFTRAG",
                        secondcontractwin: "FUTURE-PROFIT",
                        cointransactioniscancelled: "SPOT-HANDEL STORNIERT",
                        placeanorderforcointrading: "SPOT-HANDEL-AUFTRAG",
                        plusdeduction: "GUTHABEN ANPASSEN",
                        buy: "KAUFEN",
                        sell: "VERKAUFEN",
                        pending: "AUSSTEHEND",
                        successful: "ERFOLGREICH",
                        fail: "FEHLGESCHLAGEN",
                        defipledge: "DEFI-VERPFLICHTUNG",
                        miningincome: "MINING-EINKOMMEN",
                        settleaccount: "ABRECHNUNGSKONTO",
                        limitordertrading: "Limit-Order-Handel",
                        limitorderwaspurchasedsuccessfully: "Limit-Order wurde erfolgreich gekauft",
                        realnameauthentication: "Identität erfolgreich verifiziert",
                        realnamesuccess: "Ihre Echtzeit-Verifizierung wurde genehmigt, ich wünsche Ihnen viel Spaß beim Handeln",
                        realnameauthenticationfailed: "Echtzeit-Verifizierung fehlgeschlagen",
                        rechargesuccessfullytips: "Ihre Einzahlung war erfolgreich, wünschen Ihnen viel Spaß beim Handeln",
                        rechargesuccessfully: "Einzahlung erfolgreich",
                        rechargefailure: "Einzahlung fehlgeschlagen",
                        successfulwithdrawal: "Erfolgreiche Abhebung",
                        withdrawalfailure: "Abhebung fehlgeschlagen",
                        successfulwithdrawaltips: "Ihr Abhebungsantrag wurde genehmigt, bitte überprüfen Sie",
                        handlingcharge: "Servicegebühr",
                        transactionamountisnotsatisfied: "MINDESTTRANSAKTIONSMENGE:",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "AUSSTEHEND",
                        closeddata: "ABGESCHLOSSEN"
                    },
                    title: {
                        home: "KRYPTOWÄHRUNGSBÖRSE",
                        market: "MARKT",
                        trade: "HANDEL",
                        futures: "FEATURES",
                        wallets: "WALLETS",
                        userinfo: "KONTODATEN",
                        tradelist: "HANDELSAUFZEICHNUNGEN",
                        orderlist: "OFFENE AUFZEICHNUNGEN",
                        futureslist: "FUTURE-AUFZEICHNUNGEN",
                        walletsdetail: "WALLETS-DETAILS",
                        user: "BENUTZER",
                        language: "SPRACHE",
                        notice: "BENACHRICHTIGUNG",
                        login: "ANMELDEN",
                        register: "REGISTRIEREN",
                        serviceprotoc: "VEREINBARUNG",
                        forgetpassword: "PASSWORT VERGESSEN",
                        authentication: "VERIFIZIERUNGEN",
                        modifypassword: "PASSWORT ÄNDERN",
                        invite: "MEINE EINLADUNG",
                        aboutus: "ÜBER UNS",
                        onlineservice: "DIENSTLEISTUNGEN",
                        withdrawpassword: "ABHEBEPASSWORT",
                        withdrawaddress: "CRYPTO-ADRESSVERWALTUNG",
                        addwithdrawaddress: "ADRESSE HINZUFÜGEN",
                        withdraw: "ABHEBEN",
                        deposit: "EINZAHLUNG",
                        choosecoin: "CRYPTO",
                        depositrecord: "EINZAHLUNGSAUFZEICHNUNGEN",
                        recharge: "EINZAHLUNG",
                        defilist: "DEFI",
                        defidetail: "DEFI-DETAILS",
                        pledgerecord: "VERPFLICHTUNGSAUFZEICHNUNGEN",
                        incomerecord: "ERTRAGSAUFZEICHNUNGEN",
                        msb: "MSB-ZUSTIMMUNG"
                    }
                }
            }
              , m = {
                app: {
                    hello: "¡HOLA, MUNDO!",
                    download: "Descargar y Abrir la App",
                    common: {
                        input: "INGRESAR ",
                        select: "SELECCIONAR",
                        upload: "CARGAR",
                        confirm: "CONFIRMAR",
                        cancel: "CANCELAR",
                        submit: "ENVIAR",
                        save: "GUARDAR",
                        paste: "PEGAR",
                        noorder: "SIN ORDEN",
                        noData: "Sin datos"
                    },
                    msg: {
                        limitsendcode: "Se ha alcanzado el número máximo de intentos para obtener un código de verificación. Por favor, intente de nuevo mañana.",
                        hint: "PROMPT",
                        know: "ENTENDIDO.",
                        notShownToday: "No más consejos hoy.",
                        copy: "COPIA EXITOSA",
                        success: "¡OPERACIÓN EXITOSA!",
                        wait: "¡ESPERA POR FAVOR!",
                        keeplogin: "MANTENER SESIÓN",
                        username: "NOMBRE DE USUARIO",
                        userid: "ID DE USUARIO",
                        nickname: "NOMBRE DE USUARIO",
                        password: "CONTRASEÑA",
                        signup: "REGISTRARSE",
                        signin: "INICIAR SESIÓN",
                        signout: "CERRAR SESIÓN",
                        guest: "INVITADO",
                        welcome: "¡HOLA!",
                        add: "AGREGAR",
                        edit: "EDITAR",
                        delete: "ELIMINAR",
                        move: "MOVER",
                        name: "NOMBRE",
                        status: "ESTADO",
                        weigh: "PESO",
                        operate: "OPERACIÓN",
                        warning: "ADVERTENCIA",
                        default: "PREDETERMINADO",
                        article: "ARTÍCULO",
                        page: "PÁGINA",
                        ok: "CONFIRMAR",
                        cancel: "CANCELAR",
                        loading: "CARGANDO",
                        more: "MÁS",
                        normal: "NORMAL",
                        hidden: "OCULTO",
                        submit: "ENVIAR",
                        reset: "RESTABLECER",
                        execute: "EJECUTAR",
                        close: "CERRAR",
                        search: "BUSCAR",
                        refresh: "REFRESCAR",
                        first: "PÁGINA DE INICIO",
                        previous: "PÁGINA ANTERIOR",
                        next: "PÁGINA SIGUIENTE",
                        last: "ÚLTIMA PÁGINA",
                        none: "NINGUNO",
                        home: "INICIO",
                        online: "EN LÍNEA",
                        logout: "CERRAR SESIÓN",
                        profile: "PERFIL PERSONAL",
                        index: "PÁGINA DE INICIO",
                        hot: "POPULAR",
                        recommend: "RECOMENDADO",
                        console: "CONSOLA",
                        code: "NÚMERO DE SERIE",
                        message: "ELEMENTO",
                        line: "NÚMERO DE LÍNEA",
                        file: "ARCHIVO",
                        menu: "MENÚ",
                        type: "TIPO",
                        title: "TÍTULO",
                        content: "CONTENIDO",
                        append: "AGREGAR",
                        memo: "MEMO",
                        parent: "NIVEL SUPERIOR",
                        params: "PARÁMETROS",
                        permission: "PERMISO",
                        advancesearch: "BÚSQUEDA AVANZADA",
                        checkall: "MARCAR TODO",
                        expandall: "EXPANDIR TODO",
                        begintime: "HORA DE INICIO",
                        endtime: "HORA DE FINALIZACIÓN",
                        createtime: "HORA DE CREACIÓN",
                        flag: "LOGOS",
                        pleaseloginfirst: "POR FAVOR INICIA SESIÓN PARA OPERAR",
                        uploadedsuccessful: "CARGADO EXITOSAMENTE",
                        youcanuploaduptodfiles: "TAMBIÉN PUEDES CARGAR HASTA ARCHIVOS",
                        youcanchooseuptodfiles: "TAMBIÉN PUEDES SELECCIONAR HASTA ARCHIVOS",
                        chunkfilewriteerror: "ERROR DE ESCRITURA DE ARCHIVO FRAGMENTADO",
                        chunkfileinfoerror: "ERROR DE INFORMACIÓN DE ARCHIVO FRAGMENTADO",
                        chunkfilemergeerror: "ERROR DE FUSIÓN DE ARCHIVO FRAGMENTADO",
                        chunkfiledisabled: "CARGA FRAGMENTADA NO HABILITADA",
                        cancelupload: "CANCELAR CARGA",
                        uploadcanceled: "CARGA CANCELADA",
                        nofileuploadorserveruploadlimitexceeded: "ARCHIVOS NO CARGADOS O LÍMITE DE CARGA DEL SERVIDOR SUPERADO",
                        uploadedfileformatislimited: "FORMATO DE ARCHIVO CARGADO LIMITADO",
                        uploadedfileisnotavalidimage: "CARGANDO UN ARCHIVO QUE NO ES UN ARCHIVO DE IMAGEN VÁLIDO",
                        areyousureyouwanttocancelthisupload: "CONFIRMAR CANCELAR CARGA",
                        removefile: "ELIMINAR ARCHIVOS",
                        youcanonlyuploadamaximumofsfiles: "SOLO PUEDES CARGAR UN MÁXIMO DE ARCHIVOS",
                        youcantuploadfilesofthistype: "NO PUEDES CARGAR ARCHIVOS DE ESTE TIPO",
                        serverrespondedwithscode: "RESPUESTA DEL SERVIDOR",
                        fileistoobigsmibmaxfilesizesmib: "EL ARCHIVO ES DEMASIADO GRANDE, TAMAÑO MÁXIMO DE ARCHIVO PERMITIDO MIB",
                        redirectnow: "REDIRIGIR AHORA",
                        operationcompleted: "¡OPERACIÓN EXITOSA!",
                        operationfailed: "¡FALLO DE OPERACIÓN!",
                        unknowndataformat: "¡FORMATO DE DATOS DESCONOCIDO!",
                        networkerror: "¡ERRORES DE RED!",
                        advancedsearch: "BÚSQUEDA AVANZADA",
                        invalidparameters: "PARÁMETROS DESCONOCIDOS",
                        noresultswerefound: "NO SE ENCONTRARON REGISTROS",
                        parameterscannotbeempty: "LOS PARÁMETROS NO PUEDEN ESTAR VACÍOS",
                        youhavenopermission: "NO TIENES PERMISO",
                        anunexpectederroroccurred: "HA OCURRIDO UN ERROR INESPERADO. EL PROGRAMADOR ESTÁ TRABAJANDO EN ELLO.",
                        thispagewillberedirectedinsseconds: "LA PÁGINA SE REDIRIGIRÁ AUTOMÁTICAMENTE EN SEGUNDOS",
                        parametererror: "ERROR DE PARÁMETRO",
                        passwordmustbecharacters: "LA CONTRASEÑA DEBE TENER DE 6 A 30 CARACTERES",
                        insufficientbalance: "EL SALDO ES INSUFICIENTE",
                        recharge: "RECARGAR",
                        withdraw: "RETIRAR",
                        cointransaction: "SPOT",
                        withdrawalrefusal: "RECHAZO DE RETIRO",
                        secondcontractorder: "ÓRDENES DE FUTUROS",
                        secondcontractwin: "GANANCIAS DE FUTUROS",
                        cointransactioniscancelled: "SPOT CANCELADO",
                        placeanorderforcointrading: "ÓRDENES DE SPOT",
                        plusdeduction: "DEDUCCIÓN MÁS",
                        orderdoesnotexist: "LA ORDEN NO EXISTE",
                        typeerror: "ERROR DE TIPO",
                        cointransactionisnotenabledforthiscurrency: "LA TRANSACCIÓN DE MONEDA NO ESTÁ HABILITADA PARA ESTA MONEDA",
                        limitunitpricecannotbeempty: "EL PRECIO UNITARIO LÍMITE NO PUEDE ESTAR VACÍO",
                        ordersuccessful: "ÓRDEN EXITOSA",
                        pleaseentertheamounttosell: "POR FAVOR INGRESE LA CANTIDAD A VENDER",
                        high: "ALTO",
                        low: "BAJO",
                        ongoing: "PENDIENTE DE LIQUIDACIÓN",
                        closed: "LIQUIDADO",
                        contractdoesnotexist: "FUTUROS",
                        pleasecompleterealnameauthenticationfirst: "POR FAVOR COMPLETE LA AUTENTICACIÓN DE NOMBRE REAL PRIMERO",
                        settlementperioddoesnotexist: "EL PERÍODO DE LIQUIDACIÓN NO EXISTE",
                        amountofinvestmentexceedsthelimit: "LA CANTIDAD DE INVERSIÓN SUPERA EL LÍMITE",
                        currencydoesnotexist: "LA MONEDA NO ESTÁ DISPONIBLE",
                        orderfailure: "FALLO DE ORDEN",
                        secondcontractisnotenabledforthiscurrency: "LOS FUTUROS NO ESTÁN HABILITADOS PARA ESTA MONEDA",
                        limitordertrading: "ÓRDENES DE SPOT LIMIT",
                        limitorderwaspurchasedsuccessfully: "LA ORDEN DE SPOT LIMIT SE COMPRÓ CON ÉXITO",
                        minimumtopuplimit: "LÍMITE MÍNIMO DE RECARGA",
                        maximumtopuplimit: "LÍMITE MÁXIMO DE RECARGA",
                        rechargesuccessfully: "RECARGA EXITOSA",
                        pending: "PENDIENTE",
                        successful: "EXITOSO",
                        fail: "FALLIDO",
                        usercenter: "CENTRO DE USUARIOS",
                        register: "REGISTRARSE",
                        login: "INICIAR SESIÓN",
                        signupsuccessful: "REGISTRO EXITOSO",
                        usernamecannotbeempty: "EL NOMBRE DE USUARIO NO PUEDE ESTAR VACÍO",
                        usernamemustbe3to30characters: "EL NOMBRE DE USUARIO DEBE TENER DE 3 A 30 CARACTERES",
                        usernamemustbe6to30characters: "EL NOMBRE DE USUARIO DEBE TENER DE 6 A 30 CARACTERES",
                        passwordcannotbeempty: "LA CONTRASEÑA NO PUEDE ESTAR VACÍA",
                        mobileisincorrect: "FORMATO DE TELÉFONO INCORRECTO",
                        usernamealreadyexist: "EL NOMBRE DE USUARIO YA EXISTE",
                        nicknamealreadyexist: "EL NOMBRE DE USUARIO YA EXISTE",
                        emailalreadyexist: "EL CORREO ELECTRÓNICO YA EXISTE",
                        mobilealreadyexist: "EL NÚMERO DE TELÉFONO YA EXISTE",
                        usernameisincorrect: "NOMBRE DE USUARIO INCORRECTO",
                        emailisincorrect: "DIRECCIÓN DE CORREO ELECTRÓNICO INCORRECTA",
                        accountislocked: "LA CUENTA HA SIDO BLOQUEADA",
                        passwordisincorrect: "CONTRASEÑA INCORRECTA",
                        accountisincorrect: "LAS CUENTAS NO EXISTEN",
                        accountnotexist: "LA CUENTA NO EXISTE",
                        invitationcodedoesnotexist: "EL CÓDIGO DE INVITACIÓN NO EXISTE",
                        accountcannotbeempty: "LA CUENTA NO PUEDE ESTAR VACÍA",
                        usernameorpasswordisincorrect: "NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS",
                        youarenotloggedin: "NO HAS INICIADO SESIÓN",
                        youveloggedindonotloginagain: "YA HAS INICIADO SESIÓN, NO INICIES SESIÓN DE NUEVO",
                        verifyemail: "VERIFICACIÓN DE CORREO ELECTRÓNICO",
                        changepassword: "CAMBIAR CONTRASEÑA",
                        captchaisincorrect: "EL CÓDIGO DE VERIFICACIÓN ES INCORRECTO",
                        loggedinsuccessful: "INICIO DE SESIÓN EXITOSO",
                        logoutsuccessful: "CERRAR SESIÓN EXITOSO",
                        changepasswordfailure: "FALLO DE CAMBIO DE CONTRASEÑA",
                        resetpasswordsuccessful: "RESTABLECER CONTRASEÑA EXITOSO",
                        sendfrequently: "ENVÍO FRECUENTE",
                        accountalreadyexist: "ESTA CUENTA YA EXISTE",
                        unregistered: "NO REGISTRADO",
                        sendsuccessfully: "ENVÍO EXITOSO",
                        sendfail: "ENVÍO FALLIDO",
                        thegraphicverificationcodeisincorrect: "ERROR DE CAPTCHA GRÁFICO",
                        documenttypeerror: "TIPO DE DOCUMENTO INCORRECTO",
                        datasubmittedsuccessfully: "INFORMACIÓN ENVIADA EXITOSAMENTE",
                        datasubmissionfailure: "FALLO DE ENVÍO DE INFORMACIÓN",
                        certificationunderreview: "LA CERTIFICACIÓN ESTÁ EN REVISIÓN",
                        duplicatedocumentnumber: "NÚMERO DE DOCUMENTO DUPLICADO",
                        withdrawaltime: "HORA DE RETIRO ES",
                        minimumwithdrawalamount: "LA CANTIDAD MÍNIMA DE RETIRO ",
                        withdrawalpasswordfault: "CONTRASEÑA DE RETIRO INCORRECTA",
                        withdrawsuccessfully: "RETIRADA EXITOSA",
                        passwordsetsuccessfully: "CONTRASEÑA CONFIGURADA EXITOSAMENTE",
                        passwordsetfail: "CONFIGURACIÓN DE CONTRASEÑA EXITOSA",
                        oldandnewpasswordsarethesame: "LA CONTRASEÑA ANTIGUA Y LA NUEVA SON LAS MISMAS",
                        oldwithdrawalpasswordfault: "ERROR DE CONTRASEÑA ANTIGUA",
                        passwordalreadyexists: "LA CONTRASEÑA YA EXISTE",
                        changepasswordsuccessful: "CAMBIO DE CONTRASEÑA EXITOSO",
                        withdrawalisnotopened: "RETIRADA PROHIBIDA, POR FAVOR CONTACTE AL SERVICIO AL CLIENTE PARA EL PROCESAMIENTO",
                        withdrawaladdresshasbeenused: "LA DIRECCIÓN DE RETIRO HA SIDO UTILIZADA",
                        pleasecontactcustomerservice: "EL TRADING HA SIDO DESHABILITADO, POR FAVOR CONTACTE AL SERVICIO AL CLIENTE",
                        itemexist: "EL ELEMENTO NO EXISTE",
                        eligiblepurchase: "NO ES ELEGIBLE PARA COMPRA",
                        outsidelimit: "FUERA DEL LÍMITE",
                        nopurchasetimes: "NO HAY VECES DE COMPRA"
                    },
                    tab: {
                        home: "INICIO",
                        market: "MERCADO",
                        trade: "NEGOCIAR",
                        contract: "FUTUROS",
                        assets: "CARTERAS"
                    },
                    home: {
                        login: "INICIAR SESIÓN",
                        register: "REGISTRARSE",
                        coinTopUp: "DEPÓSITO",
                        coinTopDown: "RETIRAR",
                        ieo: "IEO",
                        staking: "STAKING",
                        service: "SERVICIOS",
                        buyCoin: "COMPRAR CRIPTOMONEDAS",
                        transactionPair: "NOMBRE",
                        recentQuotation: "PRECIO ACTUAL",
                        change: "CAMBIO 24H%",
                        comingsoon: "PRÓXIMAMENTE"
                    },
                    lang: {
                        lang: "GESTIÓN DE IDIOMA"
                    },
                    notice: {
                        notice: "NOTIFICACIONES"
                    },
                    agreement: {
                        agreement: "ACUERDOS DE SERVICIO"
                    },
                    user: {
                        user: "USUARIO",
                        login: "INICIAR SESIÓN",
                        register: "REGISTRARSE",
                        email: "CORREO ELECTRÓNICO",
                        phone: "TELÉFONO",
                        phonenumber: "NÚMERO DE TELÉFONO",
                        pwd: "CONTRASEÑA",
                        forgetpwd: "OLVIDÉ MI CONTRASEÑA",
                        userreg: "REGISTRARSE",
                        emailErrMsg: "FORMATO DE CORREO ELECTRÓNICO INCORRECTO",
                        phoneErrMsg: "FORMATO DE TELÉFONO INCORRECTO",
                        pwdErrMsg1: "SOLO SE PERMITEN NÚMEROS, LETRAS O -/+. ~! @#$%^&(), ETC.",
                        pwdErrMsg2: "CONTIENE AL MENOS UN NÚMERO",
                        pwdErrMsg3: "CONTIENE AL MENOS UNA LETRA",
                        pwdErrMsg4: "LONGITUD DE 6-20",
                        gvc: "CAPTCHA GRÁFICO",
                        checkCode: "CÓDIGO DE VERIFICACIÓN",
                        invCode: "CÓDIGO DE INVITACIÓN",
                        getCode: "SEND",
                        regain: "REENVIAR",
                        newPwd: "NUEVA CONTRASEÑA"
                    },
                    userInfo: {
                        userInfo: "INFORMACIÓN DE LA CUENTA",
                        creditScore: "PUNTUACIÓN DE CRÉDITO",
                        inviteCode: "CÓDIGO DE INVITACIÓN",
                        authentication: "VERIFICACIONES",
                        authenticated: "APROBADO",
                        authenticatefail: "FALLOS DE AUTENTICACIÓN",
                        authenticating: "AUTENTICANDO",
                        lang: "IDIOMA",
                        withdrawalAdd: "DIRECCIÓN DE RETIRO",
                        setpwd: "CONTRASEÑA",
                        support: "CENTRO DE AYUDA",
                        notice: "NOTIFICACIONES",
                        newNotice: "NUEVA NOTIFICACIÓN",
                        invite: "MI INVITACIÓN",
                        aboutUs: "SOBRE NOSOTROS",
                        msb: "APROBACIÓN DE MSB",
                        exit: "CERRAR SESIÓN",
                        service: "SERVICIO AL CLIENTE EN LÍNEA"
                    },
                    auth: {
                        name: "NOMBRE",
                        IDType: "SELECCIONE EL TIPO DE IDENTIFICACIÓN",
                        cardBack: "CARGUE EL REVERSO DE SUS DOCUMENTOS",
                        cardFront: "CARGUE EL FRENTE DEL DOCUMENTO",
                        IDCard: "CÉDULA DE IDENTIDAD",
                        passport: "PASAPORTE",
                        cardErrMsg: "POR FAVOR, SELECCIONE EL TIPO DE DOCUMENTO",
                        idnumber: "NÚMERO DE IDENTIFICACIÓN",
                        idnumberErrMsg: "POR FAVOR, INGRESE EL NÚMERO DE IDENTIFICACIÓN CORRECTO",
                        overSize: "EL TAMAÑO DE LA IMAGEN NO PUEDE EXCEDER",
                        realImage: "POR FAVOR, INGRESE LA IMAGEN CORRECTA DE SU IDENTIFICACIÓN",
                        uploading: "SUBIENDO",
                        uploadFail: "FALLO AL SUBIR",
                        waitUpload: "POR FAVOR, ESPERE A QUE LA IMAGEN SE CARGUE COMPLETAMENTE",
                        reSub: "VOLVER A ENVIAR",
                        pending: "PENDIENTE",
                        approve: "APROBAR",
                        authenticating: "LA AUTENTICACIÓN DE NOMBRE REAL ESTÁ EN REVISIÓN",
                        waitauthentication: "ESPERE A QUE SE COMPLETE LA REVISIÓN Y OPERE",
                        authenticatefail: "FALLO EN LA AUTENTICACIÓN DE NOMBRE REAL",
                        reauthentication: "REAUTENTICACIÓN",
                        pleaseauthenticate: "PARA DISFRUTAR DE TODA LA GAMA DE NUESTROS PRODUCTOS Y SERVICIOS, LE SOLICITAMOS AMABLEMENTE QUE COMPLETE EL PROCESO DE VERIFICACIÓN DE IDENTIDAD.",
                        doauthentication: "VERIFICAR IDENTIDAD"
                    },
                    market: {
                        low: "BAJO 24H",
                        high: "ALTO 24H",
                        vol: "VOLUMEN 24H",
                        timeStemp: "HORA",
                        price: "PRECIO",
                        amount: "CANTIDAD",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        listTitle: "MERCADO USDT",
                        mainTitle: "SPOT",
                        fullOrder: "TODAS LAS ÓRDENES",
                        history: "HISTORIAL",
                        orderDetail: "DETALLES DE LA TRANSACCIÓN",
                        dealPrice: "PRECIO DE LA TRANSACCIÓN",
                        dealAmount: "NÚMERO DE TRANSACCIONES",
                        orderAmount: "CANTIDAD DE TRANSACCIÓN",
                        status: {
                            all: "TODAS",
                            wait: "PENDIENTE",
                            done: "COMPLETADA",
                            cancel: "CANCELADA"
                        }
                    },
                    trade: {
                        title: "SPOT",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        available: "DISPONIBLE",
                        orderPrice: "PRECIO DE LA ORDEN",
                        orderAmount: "CANTIDAD DE LA ORDEN",
                        dealAmount: "CANTIDAD DE LA TRANSACCIÓN",
                        openorders: "ÓRDENES ABIERTAS",
                        limitedPrice: "PRECIO LIMITADO",
                        marketPrice: "PRECIO DE MERCADO",
                        placeholderPrice: "PRECIO",
                        placeholderCount: "CANTIDAD",
                        placeholderAmount: "CANTIDAD",
                        placeholderToken: "CANTIDAD",
                        description: "MEJOR PRECIO DE MERCADO",
                        status: {
                            all: "TODAS",
                            wait: "PENDIENTE",
                            done: "COMPLETADA",
                            cancel: "CANCELADA"
                        },
                        noMore: "NO HAY MÁS",
                        pleaseinputokamount: "POR FAVOR, INGRESE LA CANTIDAD CORRECTA",
                        lessamount: "CANTIDAD INSUFICIENTE",
                        lasttrades: "Últimas Transacciones",
                        close: "Cerrar"
                    },
                    contract: {
                        title: "FUTUROS",
                        listTitle: "ÓRDENES ABIERTAS",
                        high: "ALTO",
                        low: "BAJO",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "ALTO",
                                low: "BAJO"
                            }
                        },
                        openTime: "HORA DE APERTURA",
                        openPrice: "PRECIO DE APERTURA",
                        totalAmount: "CANTIDAD DE INVERSIÓN",
                        status: {
                            onGoing: "PENDIENTE",
                            closed: "COMPLETADA"
                        },
                        detailTitle: "DETALLES DE FUTUROS",
                        contractAmount: "CANTIDAD DE FUTUROS",
                        contractType: "TIPO DE FUTUROS",
                        contractStatus: "ESTADO DE FUTUROS",
                        minutes: "MINUTOS",
                        cycle: "DURACIÓN DEL CONTRATO",
                        closePrice: "PRECIO DE CIERRE",
                        closeTime: "HORA DE CIERRE",
                        profitAmount: "CANTIDAD DE GANANCIAS Y PÉRDIDAS",
                        selectCycle: "PERIODO DE SELECCIÓN",
                        orderAmount: "CANTIDAD DE LA ORDEN",
                        availableAmount: "SALDO DE LA CUENTA:",
                        expectedEarnings: "GANANCIAS PROYECTADAS:",
                        submitContract: "CONFIRMAR ORDEN",
                        noEnoughBalance: "EL SALDO ES INSUFICIENTE.",
                        noTotalAmount: "POR FAVOR, VERIFIQUE LAS APUESTAS Y LOS PERIODOS",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "MONTO MÍNIMO DE APUESTA",
                        amountcannotbemorethan: "MONTO MÁXIMO DE APUESTA",
                        keepBuying: "Continuar Comprando",
                        countDown: "Cuenta atrás",
                        closing: "En progreso"
                    },
                    pwd: {
                        changePwd: "CAMBIAR CONTRASEÑA",
                        loginPwd: "CONTRASEÑA DE INICIO DE SESIÓN",
                        withdrawalPwd: "CONTRASEÑA DE RETIRO",
                        haveSet: "ESTABLECIDO",
                        oldPwd: "CONTRASEÑA ANTIGUA",
                        newPwd: "CONTRASEÑA NUEVA",
                        confirmPwd: "CONFIRMAR CONTRASEÑA",
                        pwdErrMsg: "LAS CONTRASEÑAS NO COINCIDEN.",
                        tips: "PARA LA SEGURIDAD DE SUS FONDOS, NO SE PERMITEN RETIROS DENTRO DE LAS 24 HORAS DESPUÉS DE CAMBIAR LA CONTRASEÑA DE INICIO DE SESIÓN."
                    },
                    invite: {
                        invite: "INVITAR",
                        myInviteCode: "CÓDIGO DE INVITACIÓN",
                        copyUrl: "COPIAR ENLACE DE INVITACIÓN",
                        firstVip: "MIEMBROS DE PRIMERA GENERACIÓN",
                        secondVip: "MIEMBROS DE SEGUNDA GENERACIÓN",
                        certified: "APROBADO",
                        uncertified: "NO APROBADO",
                        unit: "personas"
                    },
                    withdraw: {
                        address: "GESTIÓN DE DIRECCIÓN DE CRIPTO",
                        address1: "DIRECCIÓN",
                        addwithdraw: "AGREGAR UNA DIRECCIÓN DE RETIRO",
                        not: "NO HAY DIRECCIÓN GUARDADA",
                        add: "AGREGAR DIRECCIÓN",
                        btype: "TIPO DE MONEDA",
                        tbtype: "TIPO DE RETIRO",
                        tbAddress: "DIRECCIÓN DE RETIRO DE CRIPTO",
                        placeholder1: "INGRESE LA DIRECCIÓN DE LA BILLETERA",
                        addressErrMsg: "SOLO SE PERMITEN LETRAS MAYÚSCULAS Y MINÚSCULAS Y NÚMEROS",
                        remark: "OBSERVACIÓN",
                        placeholder2: "INGRESE UNA NOTA",
                        tb: "RETIRAR",
                        tbCount: "CANTIDAD A RETIRAR",
                        balance: "SALDO",
                        password: "CONTRASEÑA DE RETIRO",
                        all: "TOMAR TODO",
                        tips1: "CANTIDAD MÍNIMA DE RETIRO:",
                        tips2: "，LOS RETIROS MENORES A LA CANTIDAD MÍNIMA NO SERÁN ACREDITADOS Y NO SE PUEDEN REEMBOLSAR.",
                        tips3: "PARA PROTEGER LA SEGURIDAD DE LOS FONDOS, CUANDO CAMBIE LA POLÍTICA DE SEGURIDAD DE SU CUENTA, CAMBIE LAS CONTRASEÑAS, RETIRAREMOS LAS MONEDAS MANUALMENTE, POR FAVOR ESPERE PACIENTEMENTE A QUE EL PERSONAL SE COMUNIQUE POR TELÉFONO O CORREO ELECTRÓNICO. ASEGÚRESE DE CONFIRMAR LA SEGURIDAD DE LA COMPUTADORA Y EL NAVEGADOR PARA EVITAR LA MANIPULACIÓN O DIVULGACIÓN DE INFORMACIÓN.",
                        tips4: "LA CANTIDAD A RETIRAR DEBE ESTAR ENTRE",
                        tips5: "Y",
                        tips6: "IDENTIFICAR LA DIRECCIÓN A ELIMINAR",
                        text: "GESTIÓN DE DIRECCIONES",
                        tips7: "NO HA ESTABLECIDO UNA CONTRASEÑA DE RETIRO",
                        tips8: "AGREGUE UNA DIRECCIÓN DE RETIRO DE CRIPTO PARA RETIRAR DINERO",
                        tips9: "AGREGAR BILLETERA",
                        tips10: "TARIFA DE SERVICIO:",
                        tips11: "CANTIDAD RECIBIDA:"
                    },
                    assets: {
                        assets: "CARTERAS",
                        text1: "ACTIVOS TOTALES DE LA CUENTA (USDT)",
                        text2: "DEBIDO AL RETRASO EN LA ESTADÍSTICA DE FONDOS, EL SALDO DE LA CUENTA PUEDE NO SER EL SALDO MÁS RECIENTE, PARA UN SALDO EXACTO, POR FAVOR VAYA A LA PÁGINA DE CUENTA CORRESPONDIENTE PARA CONSULTAR",
                        assetsList: "LISTA DE ACTIVOS",
                        usable: "DISPONIBLE",
                        frozen: "CONGELADO",
                        text3: "≈USDT",
                        finance: "HISTORIAL DE TRANSACCIONES",
                        time: "HORA",
                        amount: "CANTIDAD",
                        explain: "EXPLICACIÓN",
                        recharge: "DEPÓSITO",
                        withdraw: "RETIRAR",
                        buy: "COMPRAR"
                    },
                    recharge: {
                        select: "CRIPTO",
                        charge: "CRIPTOMONEDAS POPULARES",
                        amount: "CANTIDAD",
                        buyCoin: "COMPRAR CRIPTOMONEDAS",
                        buy: "COMPRAR",
                        chargeCoin: "DEPÓSITO",
                        chargeNet: "RED",
                        btype: "TIPO DE MONEDA",
                        chargeAdd: "DIRECCIÓN DE DEPÓSITO",
                        tips1: "POR FAVOR, INGRESE LA CANTIDAD DE DEPÓSITO",
                        tips2: "LA CANTIDAD DE DEPÓSITO DEBE ESTAR ENTRE",
                        tips3: "Y",
                        tips4: "CANTIDAD MÍNIMA DE DEPÓSITO:",
                        tips5: "，LOS DEPÓSITOS MENORES A LA CANTIDAD MÍNIMA NO SERÁN ACREDITADOS Y NO SE PUEDEN REEMBOLSAR.",
                        tips6: "POR FAVOR, ELIJA LA RED DE DEPÓSITO CORRECTA, DE LO CONTRARIO LOS ACTIVOS NO SE PODRÁN RECUPERAR. SU DIRECCIÓN DE DEPÓSITO NO CAMBIARÁ CON FRECUENCIA Y PUEDE DEPOSITAR REPETIDAMENTE; SI HAY ALGÚN CAMBIO, TRATAREMOS DE NOTIFICARLE A TRAVÉS DE UN ANUNCIO EN EL SITIO WEB O CORREO ELECTRÓNICO, POR FAVOR ASEGÚRESE DE QUE SU COMPUTADORA Y NAVEGADOR SEAN SEGUROS PARA EVITAR LA MANIPULACIÓN O DIVULGACIÓN DE INFORMACIÓN.",
                        chargeRecord: "REGISTROS DE DEPÓSITO",
                        time: "HORA",
                        count: "CANTIDAD",
                        success: "ÉXITO",
                        fail: "FALLO",
                        confirming: "CONFIRMANDO",
                        charging: "EL DEPÓSITO ESTÁ EN PROGRESO",
                        goon: "EL DEPÓSITO ESTÁ EN PROGRESO"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "CANTIDAD EN MINERÍA (USDT)",
                        todayEarnings: "GANANCIAS HOY (USDT)",
                        allEarnings: "GANANCIAS ACUMULADAS (USDT)",
                        orderEarnings: "ORDEN DE GANANCIAS",
                        limit: "CUOTA (USDT)",
                        rate: "RENDIMIENTO DIARIO",
                        cycle: "PERIODO DE APUESTA",
                        pledge: "APUESTA",
                        detail: "DETALLE",
                        times: "LÍMITE DE COMPRA",
                        yield: "TASA DE RENDIMIENTO ANUAL",
                        balance: "SALDO",
                        amount: "CANTIDAD APUESTA",
                        pleaseinputrightamount: "INGRESE LA CANTIDAD DE APUESTA CORRECTA",
                        preearnings: "GANANCIAS TOTALES PROYECTADAS",
                        pledgeRecord: "REGISTROS DE APUESTA",
                        projectName: "NOMBRE DEL PROYECTO",
                        pledgeTime: "HORA DE APUESTA",
                        cutOffTime: "HORA DE LIQUIDACIÓN",
                        investmentAmount: "CANTIDAD DE INVERSIÓN",
                        status: "ESTADO",
                        incomeRecord: "REGISTROS DE LIBERACIÓN DE INGRESOS",
                        earning: "GANANCIAS",
                        settled: "YA LIQUIDADAS",
                        day: "DÍA"
                    },
                    append: {
                        gotologin: "IR A INICIAR SESIÓN",
                        logining: "INICIANDO SESIÓN..."
                    },
                    data: {
                        recharge: "DEPÓSITO",
                        withdraw: "RETIRAR",
                        withdrawalrefusal: "RETIRO RECHAZADO",
                        secondcontractorder: "ORDEN DE FUTUROS",
                        secondcontractwin: "GANANCIA DE FUTUROS",
                        cointransactioniscancelled: "COMERCIO DE SPOT CANCELADO",
                        placeanorderforcointrading: "ORDEN DE COMERCIO DE SPOT",
                        plusdeduction: "AJUSTE DE SALDO",
                        buy: "COMPRAR",
                        sell: "VENDER",
                        pending: "PENDIENTE",
                        successful: "EXITOSO",
                        fail: "FALLIDO",
                        defipledge: "APUESTA DE DEFI",
                        miningincome: "INGRESOS DE MINERÍA",
                        settleaccount: "LIQUIDAR CUENTA",
                        limitordertrading: "Comercio de orden límite",
                        limitorderwaspurchasedsuccessfully: "La orden límite se compró con éxito",
                        realnameauthentication: "Identidad verificada con éxito",
                        realnamesuccess: "Su autenticación de nombre real ha sido aprobada, le deseo una feliz transacción",
                        realnameauthenticationfailed: "La autenticación de nombre real falló",
                        rechargesuccessfullytips: "Su depósito ha sido exitoso, le deseo una feliz transacción",
                        rechargesuccessfully: "Depósito exitoso",
                        rechargefailure: "Fallo en el depósito",
                        successfulwithdrawal: "Retiro exitoso",
                        withdrawalfailure: "Fallo en el retiro",
                        successfulwithdrawaltips: "Su solicitud de retiro ha sido aprobada, por favor verifique",
                        handlingcharge: "Tarifa de servicio",
                        transactionamountisnotsatisfied: "CANTIDAD MÍNIMA DE TRANSACCIÓN:",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "PENDIENTE",
                        closeddata: "COMPLETADA"
                    },
                    title: {
                        home: "INTERCAMBIO DE CRIPTOMONEDAS",
                        market: "MERCADO",
                        trade: "NEGOCIAR",
                        futures: "FUTUROS",
                        wallets: "CARTERAS",
                        userinfo: "INFORMACIÓN DE LA CUENTA",
                        tradelist: "REGISTROS DE TRANSACCIONES",
                        orderlist: "REGISTROS ABIERTOS",
                        futureslist: "REGISTROS DE FUTUROS",
                        walletsdetail: "DETALLE DE LAS CARTERAS",
                        user: "USUARIO",
                        language: "IDIOMA",
                        notice: "NOTIFICACIONES",
                        login: "INICIAR SESIÓN",
                        register: "REGISTRARSE",
                        serviceprotoc: "ACUERDO",
                        forgetpassword: "OLVIDÉ MI CONTRASEÑA",
                        authentication: "VERIFICACIONES",
                        modifypassword: "MODIFICAR CONTRASEÑA",
                        invite: "MI INVITACIÓN",
                        aboutus: "SOBRE NOSOTROS",
                        onlineservice: "SERVICIOS",
                        withdrawpassword: "CONTRASEÑA DE RETIRO",
                        withdrawaddress: "GESTIÓN DE DIRECCIÓN DE CRIPTO",
                        addwithdrawaddress: "AGREGAR DIRECCIÓN",
                        withdraw: "RETIRAR",
                        deposit: "DEPOSITAR",
                        choosecoin: "CRIPTO",
                        depositrecord: "REGISTROS DE DEPÓSITO",
                        recharge: "DEPÓSITO",
                        defilist: "DEFI",
                        defidetail: "DETALLE DE DEFI",
                        pledgerecord: "REGISTROS DE APUESTA",
                        incomerecord: "REGISTROS DE INGRESOS",
                        msb: "APROBACIÓN DE MSB"
                    }
                }
            }
              , U = {
                app: {
                    hello: "BONJOUR, MONDE !",
                    download: "Télécharger et Ouvrir l'App",
                    common: {
                        input: "ENTRER",
                        select: "SÉLECTIONNER",
                        upload: "TÉLÉCHARGER",
                        confirm: "CONFIRMER",
                        cancel: "ANNULER",
                        submit: "SOUMETTRE",
                        save: "ENREGISTRER",
                        paste: "COLLER",
                        noorder: "PAS DE COMMANDE",
                        noData: "Aucune donnée"
                    },
                    msg: {
                        hint: "CONSEILS",
                        limitsendcode: "Le nombre maximum de tentatives pour obtenir un code de vérification a été atteint. Veuillez réessayer demain.",
                        know: "J'AI COMPRIS",
                        notShownToday: "PLUS DE CONSEILS AUJOURD’HUI",
                        copy: "COPIE RÉUSSIE",
                        success: "OPÉRATION RÉUSSIE !",
                        wait: "VEUILLEZ ATTENDRE AVEC IMPATIENCE !",
                        keeplogin: "GARDER LA CONNEXION",
                        username: "NOM D'UTILISATEUR",
                        userid: "ID UTILISATEUR",
                        nickname: "PSEUDONYME",
                        password: "MOT DE PASSE",
                        signup: "INSCRIPTION",
                        signin: "CONNEXION",
                        signout: "DÉCONNEXION",
                        guest: "INVITÉ",
                        welcome: "BONJOUR !",
                        add: "AJOUTER",
                        edit: "MODIFIER",
                        delete: "SUPPRIMER",
                        move: "DÉPLACER",
                        name: "NOM",
                        status: "STATUT",
                        weigh: "POIDS",
                        operate: "OPÉRATION",
                        warning: "AVERTISSEMENT",
                        default: "DÉFAUT",
                        article: "ARTICLE",
                        page: "PAGE",
                        ok: "CONFIRMER",
                        cancel: "ANNULER",
                        loading: "CHARGEMENT",
                        more: "PLUS",
                        normal: "NORMAL",
                        hidden: "MASQUÉ",
                        submit: "SOUMETTRE",
                        reset: "RÉINITIALISER",
                        execute: "EXÉCUTER",
                        close: "FERMER",
                        search: "RECHERCHER",
                        refresh: "RAFRAÎCHIR",
                        first: "PREMIÈRE PAGE",
                        previous: "PAGE PRÉCÉDENTE",
                        next: "PAGE SUIVANTE",
                        last: "DERNIÈRE PAGE",
                        none: "AUCUN",
                        home: "ACCUEIL",
                        online: "EN LIGNE",
                        logout: "DÉCONNEXION",
                        profile: "PROFIL PERSONNEL",
                        index: "ACCUEIL",
                        hot: "POPULAIRE",
                        recommend: "RECOMMANDER",
                        console: "CONSOLE",
                        code: "NUMÉRO DE SÉRIE",
                        message: "ÉLÉMENT",
                        line: "NUMÉRO DE LIGNE",
                        file: "FICHIER",
                        menu: "MENU",
                        type: "TYPE",
                        title: "TITRE",
                        content: "CONTENU",
                        append: "AJOUTER",
                        memo: "NOTE",
                        parent: "NIVEAU PARENT",
                        params: "PARAMÈTRES",
                        permission: "AUTORISATION",
                        advancesearch: "RECHERCHE AVANCÉE",
                        checkall: "TOUT SÉLECTIONNER",
                        expandall: "TOUT DÉVELOPPER",
                        begintime: "HEURE DE DÉBUT",
                        endtime: "HEURE DE FIN",
                        createtime: "HEURE DE CRÉATION",
                        flag: "LOGO",
                        pleaseloginfirst: "VEUILLEZ VOUS CONNECTER POUR OPÉRER",
                        uploadedsuccessful: "TÉLÉCHARGEMENT RÉUSSI",
                        youcanuploaduptodfiles: "VOUS POUVEZ ÉGALEMENT TÉLÉCHARGER JUSQU'À FICHIERS",
                        youcanchooseuptodfiles: "VOUS POUVEZ ÉGALEMENT SÉLECTIONNER JUSQU'À FICHIERS",
                        chunkfilewriteerror: "ÉCHEC DE L'ÉCRITURE DU FICHIER SEGMENTÉ",
                        chunkfileinfoerror: "ERREUR DE FICHIER SEGMENTÉ",
                        chunkfilemergeerror: "ERREUR DE FUSION DE FICHIER SEGMENTÉ",
                        chunkfiledisabled: "LE TÉLÉCHARGEMENT SEGMENTÉ N'EST PAS ACTIVÉ",
                        cancelupload: "ANNULER LE TÉLÉCHARGEMENT",
                        uploadcanceled: "TÉLÉCHARGEMENT ANNULÉ",
                        nofileuploadorserveruploadlimitexceeded: "FICHIERS NON TÉLÉCHARGÉS OU LIMITE DE TÉLÉCHARGEMENT DU SERVEUR DÉPASSÉE",
                        uploadedfileformatislimited: "FORMAT DE FICHIER TÉLÉCHARGÉ LIMITÉ",
                        uploadedfileisnotavalidimage: "TÉLÉCHARGEMENT D'UN FICHIER QUI N'EST PAS UNE IMAGE VALIDE",
                        areyousureyouwanttocancelthisupload: "CONFIRMER L'ANNULATION DU TÉLÉCHARGEMENT",
                        removefile: "SUPPRIMER LES FICHIERS",
                        youcanonlyuploadamaximumofsfiles: "VOUS POUVEZ TÉLÉCHARGER UN MAXIMUM DE FICHIERS",
                        youcantuploadfilesofthistype: "TYPES DE FICHIERS NON AUTORISÉS À ÊTRE TÉLÉCHARGÉS",
                        serverrespondedwithscode: "RÉPONSE CÔTÉ SERVEUR",
                        fileistoobigsmibmaxfilesizesmib: "FICHIER TROP VOLUMINEUX, TAILLE MAXIMALE AUTORISÉE DE FICHIER TAILLE MAXIMALE AUTORISÉE DE FICHIER",
                        redirectnow: "REDIRECTION MAINTENANT",
                        operationcompleted: "OPÉRATION RÉUSSIE !",
                        operationfailed: "ÉCHEC DE L'OPÉRATION !",
                        unknowndataformat: "FORMAT DE DONNÉES INCONNU !",
                        networkerror: "ERREUR DE RÉSEAU !",
                        advancedsearch: "RECHERCHE AVANCÉE",
                        invalidparameters: "PARAMÈTRES INVALIDES",
                        noresultswerefound: "AUCUN RÉSULTAT TROUVÉ",
                        parameterscannotbeempty: "LES PARAMÈTRES NE PEUVENT PAS ÊTRE VIDES",
                        youhavenopermission: "VOUS N'AVEZ PAS L'AUTORISATION.",
                        anunexpectederroroccurred: "UNE ERREUR INATTENDUE S'EST PRODUITE. LE PROGRAMMEUR TRAVAILLE DESSUS.",
                        thispagewillberedirectedinsseconds: "LA PAGE SERA REDIRIGÉE AUTOMATIQUEMENT DANS SECONDES",
                        parametererror: "ERREUR DE PARAMÈTRE",
                        passwordmustbecharacters: "LE MOT DE PASSE DOIT CONTENIR 6 À 30 CARACTÈRES",
                        insufficientbalance: "LE SOLDE EST INSUFFISANT.",
                        recharge: "DÉPÔT",
                        withdraw: "RETRAIT",
                        cointransaction: "ÉCHANGE SPOT",
                        withdrawalrefusal: "RETRAIT REFUSÉ",
                        secondcontractorder: "ORDRES FEATURES",
                        secondcontractwin: "GAINS FEATURES",
                        cointransactioniscancelled: "ÉCHANGE SPOT ANNULÉ",
                        placeanorderforcointrading: "PASSER UNE COMMANDE D'ÉCHANGE SPOT",
                        plusdeduction: "PLUS DÉDUCTION",
                        orderdoesnotexist: "LA COMMANDE N'EXISTE PAS",
                        typeerror: "ERREUR DE TYPE",
                        cointransactionisnotenabledforthiscurrency: "L'ÉCHANGE SPOT N'EST PAS ACTIVÉ POUR CETTE DEVISE",
                        limitunitpricecannotbeempty: "LE PRIX UNITAIRE LIMITÉ NE PEUT PAS ÊTRE VIDE",
                        ordersuccessful: "COMMANDE RÉUSSIE",
                        pleaseentertheamounttosell: "VEUILLEZ SAISIR LA QUANTITÉ À VENDRE",
                        high: "HAUT",
                        low: "BAS",
                        ongoing: "EN ATTENTE DE RÈGLEMENT",
                        closed: "RÉGLÉ",
                        contractdoesnotexist: "FEATURES N'EXISTE PAS",
                        pleasecompleterealnameauthenticationfirst: "VEUILLEZ COMPLÉTER L'AUTHENTIFICATION DE NOM RÉEL D'ABORD",
                        settlementperioddoesnotexist: "LA PÉRIODE DE RÈGLEMENT N'EXISTE PAS",
                        amountofinvestmentexceedsthelimit: "LE MONTANT DE L'INVESTISSEMENT DÉPASSE LA LIMITE",
                        currencydoesnotexist: "LA DEVISE N'EST PAS DISPONIBLE",
                        orderfailure: "ÉCHEC DE LA COMMANDE",
                        secondcontractisnotenabledforthiscurrency: "LES FEATURES NE SONT PAS ACTIVÉS POUR CETTE DEVISE",
                        limitordertrading: "ÉCHANGE SPOT LIMITÉ",
                        limitorderwaspurchasedsuccessfully: "L'ORDRE LIMITÉ A ÉTÉ ACHETÉ AVEC SUCCÈS",
                        minimumtopuplimit: "LIMITE DE DÉPÔT MINIMUM",
                        maximumtopuplimit: "LIMITE DE DÉPÔT MAXIMUM",
                        rechargesuccessfully: "DÉPÔT RÉUSSI",
                        pending: "EN ATTENTE",
                        successful: "RÉUSSI",
                        fail: "ÉCHEC",
                        usercenter: "CENTRE D'UTILISATEUR",
                        register: "INSCRIPTION",
                        login: "CONNEXION",
                        signupsuccessful: "INSCRIPTION RÉUSSIE",
                        usernamecannotbeempty: "LE NOM D'UTILISATEUR NE PEUT PAS ÊTRE VIDE",
                        usernamemustbe3to30characters: "LE NOM D'UTILISATEUR DOIT CONTENIR 3 À 30 CARACTÈRES",
                        usernamemustbe6to30characters: "LE NOM D'UTILISATEUR DOIT CONTENIR 6 À 30 CARACTÈRES",
                        passwordcannotbeempty: "LE MOT DE PASSE NE PEUT PAS ÊTRE VIDE",
                        mobileisincorrect: "FORMAT DE TÉLÉPHONE INCORRECT",
                        usernamealreadyexist: "LE NOM D'UTILISATEUR EXISTE DÉJÀ",
                        nicknamealreadyexist: "LE PSEUDONYME EXISTE DÉJÀ",
                        emailalreadyexist: "L'EMAIL EXISTE DÉJÀ",
                        mobilealreadyexist: "LE NUMÉRO DE TÉLÉPHONE EXISTE DÉJÀ",
                        usernameisincorrect: "NOM D'UTILISATEUR INCORRECT",
                        emailisincorrect: "ADRESSE EMAIL INCORRECTE",
                        accountislocked: "LE COMPTE A ÉTÉ VERROUILLÉ.",
                        passwordisincorrect: "MOT DE PASSE INCORRECT",
                        accountisincorrect: "LE COMPTE N'EXISTE PAS",
                        accountnotexist: "LE COMPTE N'EXISTE PAS",
                        invitationcodedoesnotexist: "LE CODE D'INVITATION N'EXISTE PAS",
                        accountcannotbeempty: "LE COMPTE NE PEUT PAS ÊTRE VIDE",
                        usernameorpasswordisincorrect: "NOM D'UTILISATEUR OU MOT DE PASSE INCORRECT",
                        youarenotloggedin: "VOUS N'ÊTES PAS CONNECTÉ ACTUELLEMENT",
                        youveloggedindonotloginagain: "VOUS ÊTES DÉJÀ CONNECTÉ, VEUILLEZ NE PAS VOUS CONNECTER À NOUVEAU",
                        verifyemail: "VÉRIFICATION EMAIL",
                        changepassword: "MODIFIER LE MOT DE PASSE",
                        captchaisincorrect: "LE CODE DE VÉRIFICATION EST INCORRECT",
                        loggedinsuccessful: "CONNEXION RÉUSSIE",
                        logoutsuccessful: "DÉCONNEXION RÉUSSIE",
                        changepasswordfailure: "ÉCHEC DE LA MODIFICATION DU MOT DE PASSE",
                        resetpasswordsuccessful: "RÉINITIALISATION DU MOT DE PASSE RÉUSSIE",
                        sendfrequently: "ENVOI FRÉQUENT",
                        accountalreadyexist: "CE COMPTE EXISTE DÉJÀ",
                        unregistered: "NON ENREGISTRÉ",
                        sendsuccessfully: "ENVOYÉ AVEC SUCCÈS",
                        sendfail: "ÉCHEC DE L'ENVOI",
                        thegraphicverificationcodeisincorrect: "ERREUR DE CAPTCHA GRAPHIQUE",
                        documenttypeerror: "TYPE DE DOCUMENT INCORRECT",
                        datasubmittedsuccessfully: "DONNÉES SOUMISES AVEC SUCCÈS",
                        datasubmissionfailure: "ÉCHEC DE LA SOUMISSION DES DONNÉES",
                        certificationunderreview: "CERTIFICATION EN COURS D'EXAMEN",
                        duplicatedocumentnumber: "NUMÉRO DE DOCUMENT EN DOUBLE",
                        withdrawaltime: "HEURE DE RETRAIT",
                        minimumwithdrawalamount: "LE MONTANT DE RETRAIT MINIMUM",
                        withdrawalpasswordfault: "MOT DE PASSE DE RETRAIT INCORRECT",
                        withdrawsuccessfully: "RETRAIT RÉUSSI",
                        passwordsetsuccessfully: "MOT DE PASSE DÉFINI AVEC SUCCÈS",
                        passwordsetfail: "ÉCHEC DE LA DÉFINITION DU MOT DE PASSE",
                        oldandnewpasswordsarethesame: "LES ANCIENS ET NOUVEAUX MOTS DE PASSE SONT IDENTIQUES",
                        oldwithdrawalpasswordfault: "ANCIEN MOT DE PASSE INCORRECT",
                        passwordalreadyexists: "LE MOT DE PASSE EXISTE DÉJÀ",
                        changepasswordsuccessful: "CHANGEMENT DE MOT DE PASSE RÉUSSI",
                        withdrawalisnotopened: "RETRAIT INTERDIT, VEUILLEZ CONTACTER LE SERVICE CLIENT POUR LE TRAITEMENT",
                        withdrawaladdresshasbeenused: "ADRESSE DE RETRAIT UTILISÉE",
                        pleasecontactcustomerservice: "LE TRADING A ÉTÉ DÉSACTIVÉ, VEUILLEZ CONTACTER LE SERVICE CLIENT",
                        itemexist: "L'ÉLÉMENT N'EXISTE PAS",
                        eligiblepurchase: "NON ÉLIGIBLE À L'ACHAT",
                        outsidelimit: "EN DEHORS DE LA LIMITE",
                        nopurchasetimes: "AUCUN ACHAT",
                        pleasetryagainlater: "PLEASE TRY AGAIN LATER"
                    },
                    tab: {
                        home: "ACCUEIL",
                        market: "MARCHÉ",
                        trade: "ÉCHANGER",
                        contract: "FEATURES",
                        assets: "PORTEFEUILLES"
                    },
                    home: {
                        login: "CONNEXION",
                        register: "INSCRIPTION",
                        coinTopUp: "DÉPÔT",
                        coinTopDown: "RETRAIT",
                        ieo: "IEO",
                        staking: "STAKING",
                        service: "SERVICES",
                        buyCoin: "ACHETER DES COINS",
                        transactionPair: "NOM",
                        recentQuotation: "DERNIER PRIX",
                        change: "CHG% 24H",
                        comingsoon: "PROCHAINEMENT"
                    },
                    lang: {
                        lang: "GESTION DE LA LANGUE"
                    },
                    notice: {
                        notice: "NOTIFICATIONS"
                    },
                    agreement: {
                        agreement: "ACCORDS DE SERVICE"
                    },
                    user: {
                        user: "UTILISATEUR",
                        login: "CONNEXION",
                        register: "INSCRIPTION",
                        email: "EMAIL",
                        phone: "TÉLÉPHONE",
                        phonenumber: "NUMÉRO DE TÉLÉPHONE",
                        pwd: "MOT DE PASSE",
                        forgetpwd: "MOT DE PASSE OUBLIÉ",
                        userreg: "S'INSCRIRE",
                        emailErrMsg: "FORMAT D'EMAIL INCORRECT",
                        phoneErrMsg: "FORMAT DE TÉLÉPHONE INCORRECT",
                        pwdErrMsg1: "UNIQUEMENT DES CHIFFRES, DES LETTRES OU -/+. ~! @#$%^&(), ETC.",
                        pwdErrMsg2: "CONTIENT AU MOINS UN CHIFFRE",
                        pwdErrMsg3: "CONTIENT AU MOINS UNE LETTRE",
                        pwdErrMsg4: "LONGUEUR DE 6-20",
                        gvc: "CAPTCHA GRAPHIQUE",
                        checkCode: "CODE DE VÉRIFICATION",
                        invCode: "CODE D'INVITATION",
                        getCode: "SEND",
                        regain: "RENVOYER",
                        newPwd: "NOUVEAU MOT DE PASSE"
                    },
                    userInfo: {
                        userInfo: "INFO COMPTE",
                        creditScore: "SCORE DE CRÉDIT",
                        inviteCode: "CODE D'INVITATION",
                        authentication: "VÉRIFICATIONS",
                        authenticated: "APPROUVÉ",
                        authenticatefail: "ÉCHEC DE L'AUTHENTIFICATION",
                        authenticating: "AUTHENTIFICATION",
                        lang: "LANGUE",
                        withdrawalAdd: "ADRESSE DE RETRAIT",
                        setpwd: "MOT DE PASSE",
                        support: "CENTRE D'AIDE",
                        notice: "NOTIFICATIONS",
                        newNotice: "NOUVELLE NOTIFICATION",
                        invite: "MON INVITATION",
                        aboutUs: "À PROPOS DE NOUS",
                        msb: "APPROBATION MSB",
                        exit: "SE DÉCONNECTER",
                        service: "SERVICE CLIENT EN LIGNE"
                    },
                    auth: {
                        name: "NOM",
                        IDType: "SÉLECTIONNER LE TYPE DE PIÈCE D'IDENTITÉ",
                        cardBack: "TÉLÉCHARGER LE VERSO DE VOS DOCUMENTS",
                        cardFront: "TÉLÉCHARGER L'AVANT DU DOCUMENT",
                        IDCard: "CARTE D'IDENTITÉ",
                        passport: "PASSEPORT",
                        cardErrMsg: "VEUILLEZ SÉLECTIONNER LE TYPE DE DOCUMENT",
                        idnumber: "N° D'IDENTITÉ",
                        idnumberErrMsg: "VEUILLEZ SAISIR LE NUMÉRO D'IDENTITÉ CORRECT",
                        overSize: "LA TAILLE DE L'IMAGE NE PEUT PAS DÉPASSER",
                        realImage: "VEUILLEZ SAISIR LA PHOTO CORRECTE DE VOTRE PIÈCE D'IDENTITÉ",
                        uploading: "TÉLÉCHARGEMENT",
                        uploadFail: "ÉCHEC DU TÉLÉCHARGEMENT",
                        waitUpload: "VEUILLEZ ATTENDRE LA FIN DU TÉLÉCHARGEMENT DE L'IMAGE",
                        reSub: "RÉSOUMETTRE",
                        pending: "EN ATTENTE",
                        approve: "APPROUVER",
                        authenticating: "L'AUTHENTIFICATION DE NOM RÉEL EST EN COURS D'EXAMEN",
                        waitauthentication: "ATTENDEZ QUE L'AUDIT SOIT TERMINÉ ET OPÉREZ",
                        authenticatefail: "ÉCHEC DE L'AUTHENTIFICATION DE NOM RÉEL",
                        reauthentication: "REAUTHENTIFICATION.",
                        pleaseauthenticate: "POUR PROFITER DE TOUTE NOTRE GAMME DE PRODUITS ET SERVICES, NOUS VOUS DEMANDONS DE BIEN VOULOIR COMPLÉTER LE PROCESSUS DE VÉRIFICATION D'IDENTITÉ.",
                        doauthentication: "VÉRIFIER L'IDENTITÉ"
                    },
                    market: {
                        low: "PLUS BAS 24H",
                        high: "PLUS HAUT 24H",
                        vol: "VOLUME 24H",
                        timeStemp: "HEURE",
                        price: "PRIX",
                        amount: "QUANTITÉ",
                        buy: "ACHETER",
                        sell: "VENDRE",
                        listTitle: "MARCHÉ USDT",
                        mainTitle: "SPOT",
                        fullOrder: "TOUTES LES COMMANDES",
                        history: "HISTORIQUE",
                        orderDetail: "DÉTAILS DE LA TRANSACTION",
                        dealPrice: "PRIX DE LA TRANSACTION",
                        dealAmount: "NOMBRE DE TRANSACTIONS",
                        orderAmount: "MONTANT DE LA TRANSACTION",
                        status: {
                            all: "TOUS",
                            wait: "EN ATTENTE",
                            done: "TERMINÉ",
                            cancel: "ANNULÉ"
                        }
                    },
                    trade: {
                        title: "SPOT",
                        buy: "ACHETER",
                        sell: "VENDRE",
                        available: "DISPONIBLE",
                        orderPrice: "PRIX DE LA COMMANDE",
                        orderAmount: "MONTANT DE LA COMMANDE",
                        dealAmount: "QUANTITÉ DE LA TRANSACTION",
                        openorders: "COMMANDES OUVERTES",
                        limitedPrice: "PRIX LIMITÉ",
                        marketPrice: "PRIX DU MARCHÉ",
                        placeholderPrice: "PRIX",
                        placeholderCount: "QUANTITÉ",
                        placeholderAmount: "MONTANT",
                        placeholderToken: "QUANTITÉ",
                        description: "MEILLEUR PRIX DU MARCHÉ",
                        status: {
                            all: "TOUS",
                            wait: "EN ATTENTE",
                            done: "TERMINÉ",
                            cancel: "ANNULÉ"
                        },
                        noMore: "PLUS DE RÉSULTATS",
                        pleaseinputokamount: "VEUILLEZ SAISIR UNE QUANTITÉ CORRECTE",
                        lessamount: "QUANTITÉ INSUFFISANTE",
                        lasttrades: "Dernières transactions",
                        close: "Fermer"
                    },
                    contract: {
                        title: "FEATURES",
                        listTitle: "ORDRES OUVERTS",
                        high: "PLUS HAUT",
                        low: "PLUS BAS",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "PLUS HAUT",
                                low: "PLUS BAS"
                            }
                        },
                        openTime: "HEURE D'OUVERTURE DE LA POSITION",
                        openPrice: "PRIX D'OUVERTURE DE LA POSITION",
                        totalAmount: "MONTANT DE L'INVESTISSEMENT",
                        status: {
                            onGoing: "EN ATTENTE",
                            closed: "TERMINÉ"
                        },
                        detailTitle: "DÉTAILS DES FEATURES",
                        contractAmount: "MONTANT DES FEATURES",
                        contractType: "TYPE DE FEATURES",
                        contractStatus: "STATUT DES FEATURES",
                        minutes: "MINUTES",
                        cycle: "DURÉE DU CONTRAT",
                        closePrice: "PRIX DE FERMETURE DE LA POSITION",
                        closeTime: "HEURE DE FERMETURE DE LA POSITION",
                        profitAmount: "MONTANT DES PROFITS ET PERTES",
                        selectCycle: "PÉRIODE DE SÉLECTION",
                        orderAmount: "MONTANT DE LA COMMANDE",
                        availableAmount: "SOLDE DU COMPTE :",
                        expectedEarnings: "BÉNÉFICES PRÉVUS :",
                        submitContract: "CONFIRMER LA COMMANDE",
                        noEnoughBalance: "LE SOLDE EST INSUFFISANT.",
                        noTotalAmount: "VEUILLEZ VÉRIFIER LES PARIS ET LES PÉRIODES",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "MONTANT MINIMUM DE PARI",
                        amountcannotbemorethan: "MONTANT MAXIMUM DE PARI",
                        keepBuying: "Continuer l'Achat",
                        countDown: "Compte à rebours",
                        closing: "En cours"
                    },
                    pwd: {
                        changePwd: "CHANGER DE MOT DE PASSE",
                        loginPwd: "MOT DE PASSE DE CONNEXION",
                        withdrawalPwd: "MOT DE PASSE DE RETRAIT",
                        haveSet: "CONFIGURÉ",
                        oldPwd: "ANCIEN MOT DE PASSE",
                        newPwd: "NOUVEAU MOT DE PASSE",
                        confirmPwd: "CONFIRMER LE MOT DE PASSE",
                        pwdErrMsg: "LES MOTS DE PASSE NE CORRESPONDENT PAS.",
                        tips: "POUR LA SÉCURITÉ DE VOS FONDS, LES RETRAITS NE SONT PAS AUTORISÉS DANS LES 24 HEURES SUIVANT LE CHANGEMENT DU MOT DE PASSE DE CONNEXION."
                    },
                    invite: {
                        invite: "INVITER",
                        myInviteCode: "MON CODE D'INVITATION",
                        copyUrl: "COPIER LE LIEN D'INVITATION",
                        firstVip: "MEMBRES DE LA PREMIÈRE GÉNÉRATION",
                        secondVip: "MEMBRES DE LA DEUXIÈME GÉNÉRATION",
                        certified: "APPROUVÉ",
                        uncertified: "NON APPROUVÉ",
                        unit: "personnes"
                    },
                    withdraw: {
                        address: "GESTION DES ADRESSES CRYPTO",
                        address1: "ADRESSE",
                        addwithdraw: "AJOUTER UNE ADRESSE DE RETRAIT",
                        not: "AUCUNE ADRESSE ENREGISTRÉE",
                        add: "AJOUTER UNE ADRESSE",
                        btype: "TYPE DE DEVISE",
                        tbtype: "TYPE DE RETRAIT",
                        tbAddress: "ADRESSE DE RETRAIT CRYPTO",
                        placeholder1: "ENTRER L'ADRESSE DU PORTEFEUILLE",
                        addressErrMsg: "SEULES LES LETTRES MAJUSCULES ET MINUSCULES ET LES CHIFFRES SONT AUTORISÉS",
                        remark: "REMARQUE",
                        placeholder2: "VEUILLEZ SAISIR UNE NOTE",
                        tb: "RETRAIT",
                        tbCount: "MONTANT DU RETRAIT",
                        balance: "SOLDE",
                        password: "MOT DE PASSE DE RETRAIT",
                        all: "TOUT RETIRER",
                        tips1: "MONTANT MINIMUM DE RETRAIT :",
                        tips2: "，LES RETRAITS INFÉRIEURS AU MONTANT MINIMUM NE SERONT PAS CRÉDITÉS ET NE PEUVENT PAS ÊTRE REMBOURSÉS.",
                        tips3: "POUR PROTÉGER LA SÉCURITÉ DES FONDS, LORSQUE VOTRE POLITIQUE DE SÉCURITÉ DU COMPTE CHANGE, LES CHANGEMENTS DE MOT DE PASSE, NOUS RETIRONS LES PIÈCES MANUELLEMENT, VEUILLEZ ATTENDRE PATIEMMENT QUE LE PERSONNEL VOUS CONTACTE PAR TÉLÉPHONE OU PAR E-MAIL VEUILLEZ VOUS ASSURER DE CONFIRMER LA SÉCURITÉ DE L'ORDINATEUR ET DU NAVIGATEUR, POUR ÉVITER LA MANIPULATION OU LA DIVULGATION DES INFORMATIONS !",
                        tips4: "LE MONTANT DU RETRAIT DOIT ÊTRE COMPRIS ENTRE",
                        tips5: " ET",
                        tips6: "IDENTIFIER L'ADRESSE À SUPPRIMER",
                        text: "GESTION DES ADRESSES",
                        tips7: "VOUS N'AVEZ PAS DÉFINI DE MOT DE PASSE DE RETRAIT",
                        tips8: "AJOUTEZ UNE ADRESSE DE RETRAIT CRYPTO POUR RETIRER DE L'ARGENT",
                        tips9: "AJOUTER UN PORTEFEUILLE",
                        tips10: "FRAIS DE SERVICE :",
                        tips11: "MONTANT REÇU :"
                    },
                    assets: {
                        assets: "PORTEFEUILLES",
                        text1: "ACTIFS TOTAUX DU COMPTE (USDT)",
                        text2: "EN RAISON DU DÉLAI DE STATISTIQUES DES FONDS, LE SOLDE DU COMPTE PEUT NE PAS ÊTRE LE DERNIER SOLDE, POUR UN SOLDE PRÉCIS, VEUILLEZ CONSULTER LA PAGE DE COMPTE CORRESPONDANTE",
                        assetsList: "LISTE DES ACTIFS",
                        usable: "DISPONIBLE",
                        frozen: "BLOQUÉ",
                        text3: "≈ USDT",
                        finance: "HISTORIQUE DES TRANSACTIONS",
                        time: "HEURE",
                        amount: "MONTANT",
                        explain: "EXPLICATION",
                        recharge: "DÉPÔT",
                        withdraw: "RETRAIT",
                        buy: "ACHETER"
                    },
                    recharge: {
                        select: "CRYPTO",
                        charge: "CRYPTO POPULAIRE",
                        amount: "MONTANT",
                        buyCoin: "ACHETER DES CRYPTOS",
                        buy: "ACHETER",
                        chargeCoin: "DÉPÔT",
                        chargeNet: "RÉSEAU",
                        btype: "TYPE DE DEVISE",
                        chargeAdd: "ADRESSE DE DÉPÔT",
                        tips1: "VEUILLEZ SAISIR LE MONTANT DU DÉPÔT",
                        tips2: "LE MONTANT DU DÉPÔT DOIT ÊTRE COMPRIS ENTRE",
                        tips3: " ET",
                        tips4: "MONTANT MINIMUM DE DÉPÔT :",
                        tips5: "，LES DÉPÔTS INFÉRIEURS AU MONTANT MINIMUM NE SERONT PAS CRÉDITÉS ET NE PEUVENT PAS ÊTRE REMBOURSÉS.",
                        tips6: "VEUILLEZ CHOISIR LE BON RÉSEAU DE DÉPÔT CRYPTO, SINON LES ACTIFS NE SERONT PAS RÉCUPÉRABLES. VOTRE ADRESSE DE DÉPÔT NE CHANGERA PAS FRÉQUEMMENT ET VOUS POUVEZ DÉPOSER PLUSIEURS FOIS ; EN CAS DE CHANGEMENT, NOUS ESSAYERONS DE VOUS AVERTIR VIA UNE ANNONCE SUR LE SITE WEB OU PAR E-MAIL, VEUILLEZ VOUS ASSURER QUE VOTRE ORDINATEUR ET VOTRE NAVIGATEUR SONT SÉCURISÉS POUR ÉVITER LA MANIPULATION OU LA DIVULGATION DES INFORMATIONS.",
                        chargeRecord: "HISTORIQUE DES DÉPÔTS",
                        time: "HEURE",
                        count: "QUANTITÉ",
                        success: "SUCCÈS",
                        fail: "ÉCHEC",
                        confirming: "EN COURS DE CONFIRMATION",
                        charging: "LE DÉPÔT EST EN COURS",
                        goon: "LE DÉPÔT EST EN COURS"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "LE MONTANT EST EN COURS DE MINAGE (USDT)",
                        todayEarnings: "BÉNÉFICES DU JOUR (USDT)",
                        allEarnings: "REVENUS ACCUMULÉS (USDT)",
                        orderEarnings: "ORDRE DE REVENUS",
                        limit: "QUOTA (USDT)",
                        rate: "RENDEMENT QUOTIDIEN",
                        cycle: "DURÉE DE MISE EN GAGE",
                        pledge: "MISE EN GAGE",
                        detail: "DÉTAIL",
                        times: "LIMITE D'ACHAT",
                        yield: "TAUX DE RENDEMENT ANNUEL",
                        balance: "SOLDE",
                        amount: "MONTANT MISE EN GAGE",
                        pleaseinputrightamount: "VEUILLEZ SAISIR UN MONTANT DE MISE EN GAGE CORRECT",
                        preearnings: "REVENUS TOTAUX PRÉVUS",
                        pledgeRecord: "HISTORIQUE DES MISES EN GAGE",
                        projectName: "NOM DU PROJET",
                        pledgeTime: "HEURE DE MISE EN GAGE",
                        cutOffTime: "HEURE DE RÈGLEMENT",
                        investmentAmount: "MONTANT DE L'INVESTISSEMENT",
                        status: "STATUT",
                        incomeRecord: "HISTORIQUE DE LIBÉRATION DES REVENUS",
                        earning: "EN COURS DE GÉNÉRATION",
                        settled: "DÉJÀ RÉGLÉ",
                        day: "JOUR"
                    },
                    append: {
                        gotologin: "ALLER À LA CONNEXION",
                        logining: "CONNEXION EN COURS..."
                    },
                    data: {
                        recharge: "DÉPÔT",
                        withdraw: "RETRAIT",
                        withdrawalrefusal: "RETRAIT REFUSÉ",
                        secondcontractorder: "ORDRE FEATURES",
                        secondcontractwin: "PROFIT FEATURES",
                        cointransactioniscancelled: "ÉCHANGE SPOT ANNULÉ",
                        placeanorderforcointrading: "PASSER UNE COMMANDE D'ÉCHANGE SPOT",
                        plusdeduction: "AJUSTER LE SOLDE",
                        buy: "ACHETER",
                        sell: "VENDRE",
                        pending: "EN ATTENTE",
                        successful: "SUCCÈS",
                        fail: "ÉCHEC",
                        defipledge: "MISE EN GAGE DEFI",
                        miningincome: "REVENUS DE MINAGE",
                        settleaccount: "COMPTE DE RÈGLEMENT",
                        limitordertrading: "ÉCHANGE D'ORDRE LIMITÉ",
                        limitorderwaspurchasedsuccessfully: "L'ORDRE LIMITÉ A ÉTÉ ACHETÉ AVEC SUCCÈS",
                        realnameauthentication: "Identité vérifiée avec succès",
                        realnamesuccess: "Votre authentification de nom réel a été approuvée, je vous souhaite une bonne transaction",
                        realnameauthenticationfailed: "Échec de l'authentification de nom réel",
                        rechargesuccessfullytips: "Votre dépôt a été réussi, je vous souhaite une bonne transaction",
                        rechargesuccessfully: "Dépôt réussi",
                        rechargefailure: "Échec du dépôt",
                        successfulwithdrawal: "Retrait réussi",
                        withdrawalfailure: "Échec du retrait",
                        successfulwithdrawaltips: "Votre demande de retrait a été approuvée, veuillez vérifier",
                        handlingcharge: "Frais de service",
                        transactionamountisnotsatisfied: "MONTANT DE TRANSACTION MINIMUM :",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "EN ATTENTE",
                        closeddata: "TERMINÉ"
                    },
                    title: {
                        home: "ÉCHANGE DE CRYPTOMONNAIES",
                        market: "MARCHÉ",
                        trade: "ÉCHANGER",
                        futures: "FEATURES",
                        wallets: "PORTEFEUILLES",
                        userinfo: "INFO COMPTE",
                        tradelist: "HISTORIQUE DES TRANSACTIONS",
                        orderlist: "HISTORIQUE DES ORDRES",
                        futureslist: "HISTORIQUE DES FEATURES",
                        walletsdetail: "DÉTAILS DES PORTEFEUILLES",
                        user: "UTILISATEUR",
                        language: "LANGUE",
                        notice: "NOTICE",
                        login: "CONNEXION",
                        register: "INSCRIPTION",
                        serviceprotoc: "ACCORD",
                        forgetpassword: "MOT DE PASSE OUBLIÉ",
                        authentication: "VÉRIFICATIONS",
                        modifypassword: "MODIFIER LE MOT DE PASSE",
                        invite: "MON INVITATION",
                        aboutus: "À PROPOS DE NOUS",
                        onlineservice: "SERVICES",
                        withdrawpassword: "MOT DE PASSE DE RETRAIT",
                        withdrawaddress: "GESTION DES ADRESSES CRYPTO",
                        addwithdrawaddress: "AJOUTER UNE ADRESSE",
                        withdraw: "RETRAIT",
                        deposit: "DÉPÔT",
                        choosecoin: "CRYPTO",
                        depositrecord: "HISTORIQUE DES DÉPÔTS",
                        recharge: "DÉPÔT",
                        defilist: "DEFI",
                        defidetail: "DÉTAIL DEFI",
                        pledgerecord: "HISTORIQUE DES MISES EN GAGE",
                        incomerecord: "HISTORIQUE DES REVENUS",
                        msb: "APPROBATION MSB"
                    }
                }
            }
              , L = {
                app: {
                    hello: "ПРИВЕТ, МИР!",
                    download: "Скачать и Открыть Приложение",
                    common: {
                        input: "ВВЕДИТЕ ",
                        select: "ВЫБРАТЬ",
                        upload: "ЗАГРУЗИТЬ",
                        confirm: "ПОДТВЕРДИТЬ",
                        cancel: "ОТМЕНА",
                        submit: "ОТПРАВИТЬ",
                        save: "СОХРАНИТЬ",
                        paste: "ВСТАВИТЬ",
                        noorder: "НЕТ ЗАКАЗА",
                        noData: "Нет данных"
                    },
                    msg: {
                        limitsendcode: "Достигнуто максимальное количество попыток получения проверочного кода. Пожалуйста, попробуйте снова завтра.",
                        hint: "ПОДСКАЗКИ",
                        know: "ПОНЯЛ.",
                        notShownToday: "НЕ СЕГОДНЯ.",
                        copy: "КОПИРОВАНИЕ УСПЕШНО",
                        success: "УСПЕШНАЯ ОПЕРАЦИЯ!",
                        wait: "ПОЖАЛУЙСТА, ДОЖДИТЕСЬ!",
                        keeplogin: "СОХРАНИТЬ ВХОД",
                        username: "ИМЯ ПОЛЬЗОВАТЕЛЯ",
                        userid: "ИДЕНТИФИКАТОР ПОЛЬЗОВАТЕЛЯ",
                        nickname: "ПСЕВДОНИМ",
                        password: "ПАРОЛЬ",
                        signup: "РЕГИСТРАЦИЯ",
                        signin: "ВХОД",
                        signout: "ВЫХОД",
                        guest: "ГОСТЬ",
                        welcome: "ПРИВЕТ!",
                        add: "ДОБАВИТЬ",
                        edit: "РЕДАКТИРОВАТЬ",
                        delete: "УДАЛИТЬ",
                        move: "ПЕРЕМЕСТИТЬ",
                        name: "ИМЯ",
                        status: "СТАТУС",
                        weigh: "ВЕС",
                        operate: "ОПЕРАЦИЯ",
                        warning: "ПРЕДУПРЕЖДЕНИЕ",
                        default: "ПО УМОЛЧАНИЮ",
                        article: "СТАТЬЯ",
                        page: "СТРАНИЦА",
                        ok: "ПОДТВЕРДИТЬ",
                        cancel: "ОТМЕНА",
                        loading: "ЗАГРУЗКА",
                        more: "БОЛЬШЕ",
                        normal: "НОРМАЛЬНЫЙ",
                        hidden: "СКРЫТЫЙ",
                        submit: "ОТПРАВИТЬ",
                        reset: "СБРОСИТЬ",
                        execute: "ВЫПОЛНИТЬ",
                        close: "ЗАКРЫТЬ",
                        search: "ПОИСК",
                        refresh: "ОБНОВИТЬ",
                        first: "ГЛАВНАЯ СТРАНИЦА",
                        previous: "ПРЕДЫДУЩАЯ СТРАНИЦА",
                        next: "СЛЕДУЮЩАЯ СТРАНИЦА",
                        last: "ПОСЛЕДНЯЯ СТРАНИЦА",
                        none: "НЕТ",
                        home: "ГЛАВНАЯ",
                        online: "ОНЛАЙН",
                        logout: "ВЫЙТИ",
                        profile: "ПРОФИЛЬ",
                        index: "ГЛАВНАЯ СТРАНИЦА",
                        hot: "ПОПУЛЯРНЫЙ",
                        recommend: "РЕКОМЕНДОВАТЬ",
                        console: "КОНСОЛЬ",
                        code: "СЕРИЙНЫЙ НОМЕР",
                        message: "ЭЛЕМЕНТ",
                        line: "НОМЕР СТРОКИ",
                        file: "ФАЙЛ",
                        menu: "МЕНЮ",
                        type: "ТИП",
                        title: "ЗАГОЛОВОК",
                        content: "СОДЕРЖИМОЕ",
                        append: "ДОБАВИТЬ",
                        memo: "ПАМЯТКА",
                        parent: "РОДИТЕЛЬСКИЙ УРОВЕНЬ",
                        params: "ПАРАМЕТРЫ",
                        permission: "РАЗРЕШЕНИЕ",
                        advancesearch: "РАСШИРЕННЫЙ ПОИСК",
                        checkall: "ВЫБРАТЬ ВСЕ",
                        expandall: "РАЗВЕРНУТЬ ВСЕ",
                        begintime: "ВРЕМЯ НАЧАЛА",
                        endtime: "ВРЕМЯ ОКОНЧАНИЯ",
                        createtime: "ВРЕМЯ СОЗДАНИЯ",
                        flag: "ЛОГОТИПЫ",
                        pleaseloginfirst: "ПОЖАЛУЙСТА, ВОЙДИТЕ, ЧТОБЫ ВЫПОЛНИТЬ",
                        uploadedsuccessful: "ЗАГРУЗКА УСПЕШНО",
                        youcanuploaduptodfiles: "ВЫ МОЖЕТЕ ЗАГРУЗИТЬ ДО ФАЙЛОВ",
                        youcanchooseuptodfiles: "ВЫ МОЖЕТЕ ВЫБРАТЬ ДО ФАЙЛОВ",
                        chunkfilewriteerror: "ОШИБКА ЗАПИСИ ФАЙЛА",
                        chunkfileinfoerror: "ОШИБКА ФАЙЛА СЕГМЕНТА",
                        chunkfilemergeerror: "ОШИБКА СЛИЯНИЯ ФАЙЛА",
                        chunkfiledisabled: "СЕГМЕНТИРОВАННАЯ ЗАГРУЗКА НЕ ВКЛЮЧЕНА",
                        cancelupload: "ОТМЕНИТЬ ЗАГРУЗКУ",
                        uploadcanceled: "ЗАГРУЗКА ОТМЕНЕНА",
                        nofileuploadorserveruploadlimitexceeded: "ФАЙЛЫ НЕ ЗАГРУЖЕНЫ ИЛИ ПРЕВЫШЕН ЛИМИТ ЗАГРУЗКИ СЕРВЕРА",
                        uploadedfileformatislimited: "ОГРАНИЧЕННЫЙ ФОРМАТ ЗАГРУЖЕННОГО ФАЙЛА",
                        uploadedfileisnotavalidimage: "ЗАГРУЖЕННЫЙ ФАЙЛ НЕ ЯВЛЯЕТСЯ ДОПУСТИМЫМ ИЗОБРАЖЕНИЕМ",
                        areyousureyouwanttocancelthisupload: "ПОДТВЕРДИТЬ ОТМЕНУ ЗАГРУЗКИ",
                        removefile: "УДАЛИТЬ ФАЙЛЫ",
                        youcanonlyuploadamaximumofsfiles: "ВЫ МОЖЕТЕ ЗАГРУЗИТЬ МАКСИМУМ ФАЙЛОВ",
                        youcantuploadfilesofthistype: "ТИПЫ ФАЙЛОВ, КОТОРЫЕ НЕЛЬЗЯ ЗАГРУЖАТЬ",
                        serverrespondedwithscode: "ОТВЕТ С СЕРВЕРА",
                        fileistoobigsmibmaxfilesizesmib: "ФАЙЛ СЛИШКОМ БОЛЬШОЙ, МАКСИМАЛЬНЫЙ РАЗМЕР ФАЙЛА",
                        redirectnow: "ПЕРЕНАПРАВЛЕНИЕ СЕЙЧАС",
                        operationcompleted: "ОПЕРАЦИЯ ЗАВЕРШЕНА!",
                        operationfailed: "ОПЕРАЦИЯ НЕ УДАЛАСЬ!",
                        unknowndataformat: "НЕИЗВЕСТНЫЙ ФОРМАТ ДАННЫХ!",
                        networkerror: "ОШИБКИ СЕТИ!",
                        advancedsearch: "РАСШИРЕННЫЙ ПОИСК",
                        invalidparameters: "НЕВЕРНЫЕ ПАРАМЕТРЫ",
                        noresultswerefound: "ЗАПИСИ НЕ НАЙДЕНЫ",
                        parameterscannotbeempty: "ПАРАМЕТРЫ НЕ МОГУТ БЫТЬ ПУСТЫМИ",
                        youhavenopermission: "У ВАС НЕТ ДОСТУПА.",
                        anunexpectederroroccurred: "ПРОИЗОШЛА НЕОЖИДАННАЯ ОШИБКА. ПРОГРАММИСТ РАБОТАЕТ НА НЕЙ.",
                        thispagewillberedirectedinsseconds: "СТРАНИЦА БУДЕТ АВТОМАТИЧЕСКИ ПЕРЕНАПРАВЛЕНА ЧЕРЕЗ СЕКУНДЫ",
                        parametererror: "ОШИБКА ПАРАМЕТРА",
                        passwordmustbecharacters: "ПАРОЛЬ ДОЛЖЕН СОСТОЯТЬ ИЗ 6-30 СИМВОЛОВ",
                        insufficientbalance: "НЕДОСТАТОЧНЫЙ БАЛАНС.",
                        recharge: "ПОПОЛНИТЬ",
                        withdraw: "ВЫВЕСТИ",
                        cointransaction: "СПОТ",
                        withdrawalrefusal: "ОТКАЗ В ВЫВОДЕ",
                        secondcontractorder: "ФЬЮЧЕРСНЫЕ ЗАКАЗЫ",
                        secondcontractwin: "ФЬЮЧЕРСНЫЕ ВЫИГРЫШИ",
                        cointransactioniscancelled: "СПОТ ОТМЕНЕН",
                        placeanorderforcointrading: "ЗАКАЗ НА СПОТ",
                        plusdeduction: "ПЛЮС УДЕРЖАНИЕ",
                        orderdoesnotexist: "ЗАКАЗ НЕ СУЩЕСТВУЕТ",
                        typeerror: "ОШИБКА ТИПА",
                        cointransactionisnotenabledforthiscurrency: "ДАННАЯ ВАЛЮТА НЕ ПОДДЕРЖИВАЕТ СПОТ",
                        limitunitpricecannotbeempty: "ЛИМИТ ЦЕНЫ НЕ МОЖЕТ БЫТЬ ПУСТЫМ",
                        ordersuccessful: "ЗАКАЗ УСПЕШНО",
                        pleaseentertheamounttosell: "ПОЖАЛУЙСТА, ВВЕДИТЕ СУММУ ПРОДАЖИ",
                        high: "ВЫСОКИЙ",
                        low: "НИЗКИЙ",
                        ongoing: "ОЖИДАЕТ РАСЧЕТА",
                        closed: "РАСЧЕТ СОВЕРШЕН",
                        contractdoesnotexist: "ФЬЮЧЕРС НЕ СУЩЕСТВУЕТ",
                        pleasecompleterealnameauthenticationfirst: "ПОЖАЛУЙСТА, СНАЧАЛА ЗАВЕРШИТЕ АУТЕНТИФИКАЦИЮ ПО РЕАЛЬНОМУ ИМЕНИ",
                        settlementperioddoesnotexist: "СРОК РАСЧЕТА НЕ СУЩЕСТВУЕТ",
                        amountofinvestmentexceedsthelimit: "СУММА ИНВЕСТИЦИЙ ПРЕВЫШАЕТ ЛИМИТ",
                        currencydoesnotexist: "ВАЛЮТА НЕ ДОСТУПНА",
                        orderfailure: "ОШИБКА ЗАКАЗА",
                        secondcontractisnotenabledforthiscurrency: "ФЬЮЧЕРС НЕ ВКЛЮЧЕН ДЛЯ ЭТОЙ ВАЛЮТЫ",
                        limitordertrading: "СПОТ ЛИМИТ ЗАКАЗ",
                        limitorderwaspurchasedsuccessfully: "СПОТ ЛИМИТ ЗАКАЗ УСПЕШНО КУПЛЕН",
                        minimumtopuplimit: "МИНИМАЛЬНЫЙ ЛИМИТ ПОПОЛНЕНИЯ",
                        maximumtopuplimit: "МАКСИМАЛЬНЫЙ ЛИМИТ ПОПОЛНЕНИЯ",
                        rechargesuccessfully: "ПОПОЛНЕНИЕ УСПЕШНО",
                        pending: "ОЖИДАНИЕ",
                        successful: "УСПЕШНО",
                        fail: "ОШИБКА",
                        usercenter: "ПЕРСОНАЛЬНЫЙ КАБИНЕТ",
                        register: "РЕГИСТРАЦИЯ",
                        login: "ВХОД",
                        signupsuccessful: "УСПЕШНАЯ РЕГИСТРАЦИЯ",
                        usernamecannotbeempty: "ИМЯ ПОЛЬЗОВАТЕЛЯ НЕ МОЖЕТ БЫТЬ ПУСТЫМ",
                        usernamemustbe3to30characters: "ИМЯ ПОЛЬЗОВАТЕЛЯ ДОЛЖНО БЫТЬ ОТ 3 ДО 30 СИМВОЛОВ",
                        usernamemustbe6to30characters: "ИМЯ ПОЛЬЗОВАТЕЛЯ ДОЛЖНО БЫТЬ ОТ 6 ДО 30 СИМВОЛОВ",
                        passwordcannotbeempty: "ПАРОЛЬ НЕ МОЖЕТ БЫТЬ ПУСТЫМ",
                        mobileisincorrect: "НЕВЕРНЫЙ ФОРМАТ ТЕЛЕФОНА",
                        usernamealreadyexist: "ИМЯ ПОЛЬЗОВАТЕЛЯ УЖЕ СУЩЕСТВУЕТ",
                        nicknamealreadyexist: "ПСЕВДОНИМ УЖЕ СУЩЕСТВУЕТ",
                        emailalreadyexist: "ЭЛЕКТРОННАЯ ПОЧТА УЖЕ СУЩЕСТВУЕТ",
                        mobilealreadyexist: "ТЕЛЕФОН УЖЕ СУЩЕСТВУЕТ",
                        usernameisincorrect: "НЕВЕРНОЕ ИМЯ ПОЛЬЗОВАТЕЛЯ",
                        emailisincorrect: "НЕВЕРНЫЙ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ",
                        accountislocked: "АККАУНТ ЗАБЛОКИРОВАН.",
                        passwordisincorrect: "НЕВЕРНЫЙ ПАРОЛЬ",
                        accountisincorrect: "АККАУНТ НЕ СУЩЕСТВУЕТ",
                        accountnotexist: "АККАУНТ НЕ СУЩЕСТВУЕТ",
                        invitationcodedoesnotexist: "ПРИГЛАСИТЕЛЬНЫЙ КОД НЕ СУЩЕСТВУЕТ",
                        accountcannotbeempty: "АККАУНТ НЕ МОЖЕТ БЫТЬ ПУСТЫМ",
                        usernameorpasswordisincorrect: "НЕВЕРНОЕ ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ ПАРОЛЬ",
                        youarenotloggedin: "ВЫ НЕ ВОШЛИ В СИСТЕМУ",
                        youveloggedindonotloginagain: "ВЫ УЖЕ ВОШЛИ, НЕ ВХОДИТЕ СНОВА",
                        verifyemail: "ПРОВЕРЬТЕ ПОЧТУ",
                        changepassword: "ИЗМЕНИТЬ ПАРОЛЬ",
                        captchaisincorrect: "НЕВЕРНЫЙ КОД ПОДТВЕРЖДЕНИЯ",
                        loggedinsuccessful: "ВХОД В СИСТЕМУ УСПЕШНО",
                        logoutsuccessful: "ВЫХОД ИЗ СИСТЕМЫ УСПЕШНО",
                        changepasswordfailure: "СБОЙ ИЗМЕНЕНИЯ ПАРОЛЯ",
                        resetpasswordsuccessful: "СБРОС ПАРОЛЯ УСПЕШНО",
                        sendfrequently: "ЧАСТАЯ ОТПРАВКА",
                        accountalreadyexist: "ЭТОТ АККАУНТ УЖЕ СУЩЕСТВУЕТ",
                        unregistered: "НЕ ЗАРЕГИСТРИРОВАН",
                        sendsuccessfully: "ОТПРАВЛЕНО УСПЕШНО",
                        sendfail: "ОШИБКА ОТПРАВКИ",
                        thegraphicverificationcodeisincorrect: "ОШИБКА ГРАФИЧЕСКОГО КОДА ПОДТВЕРЖДЕНИЯ",
                        documenttypeerror: "НЕВЕРНЫЙ ТИП ДОКУМЕНТА",
                        datasubmittedsuccessfully: "ДАННЫЕ УСПЕШНО ОТПРАВЛЕНЫ",
                        datasubmissionfailure: "ОШИБКА ОТПРАВКИ ДАННЫХ",
                        certificationunderreview: "ПРОВЕРКА СЕРТИФИКАЦИИ",
                        duplicatedocumentnumber: "ДУБЛИКАТ НОМЕРА ДОКУМЕНТА",
                        withdrawaltime: "ВРЕМЯ ВЫВОДА",
                        minimumwithdrawalamount: "МИНИМАЛЬНАЯ СУММА ВЫВОДА",
                        withdrawalpasswordfault: "НЕВЕРНЫЙ ПАРОЛЬ ВЫВОДА",
                        withdrawsuccessfully: "ВЫВОД УСПЕШНО",
                        passwordsetsuccessfully: "ПАРОЛЬ УСТАНОВЛЕН УСПЕШНО",
                        passwordsetfail: "ПАРОЛЬ УСТАНОВЛЕН УСПЕШНО",
                        oldandnewpasswordsarethesame: "СТАРЫЙ И НОВЫЙ ПАРОЛИ ОДИНАКОВЫ",
                        oldwithdrawalpasswordfault: "ОШИБКА СТАРОГО ПАРОЛЯ",
                        passwordalreadyexists: "ПАРОЛЬ УЖЕ СУЩЕСТВУЕТ",
                        changepasswordsuccessful: "ПАРОЛЬ ИЗМЕНЕН УСПЕШНО",
                        withdrawalisnotopened: "ВЫВОД ЗАПРЕЩЕН, ПОЖАЛУЙСТА, СВЯЖИТЕСЬ С ОБСЛУЖИВАНИЕМ КЛИЕНТОВ ДЛЯ ОБРАБОТКИ",
                        withdrawaladdresshasbeenused: "АДРЕС ВЫВОДА ИСПОЛЬЗОВАЛСЯ",
                        pleasecontactcustomerservice: "ТОРГОВЛЯ ОТКЛЮЧЕНА, ПОЖАЛУЙСТА, СВЯЖИТЕСЬ С ОБСЛУЖИВАНИЕМ КЛИЕНТОВ",
                        itemexist: "ЭЛЕМЕНТ НЕ СУЩЕСТВУЕТ",
                        eligiblepurchase: "НЕДОСТУПНО ДЛЯ ПОКУПКИ",
                        outsidelimit: "ВНЕ ЛИМИТА",
                        nopurchasetimes: "НЕТ ВРЕМЕНИ ПОКУПКИ",
                        pleasetryagainlater: "PLEASE TRY AGAIN LATER"
                    },
                    tab: {
                        home: "ГЛАВНАЯ",
                        market: "РЫНОК",
                        trade: "ТОРГОВЛЯ",
                        contract: "ФЬЮЧЕРСЫ",
                        assets: "КОШЕЛЬКИ"
                    },
                    home: {
                        login: "ВОЙТИ",
                        register: "ЗАРЕГИСТРИРОВАТЬСЯ",
                        coinTopUp: "ПОПОЛНИТЬ",
                        coinTopDown: "ВЫВЕСТИ",
                        ieo: "IEO",
                        staking: "СТЕЙКИНГ",
                        service: "СЕРВИСЫ",
                        buyCoin: "КУПИТЬ МОНЕТЫ",
                        transactionPair: "НАЗВАНИЕ",
                        recentQuotation: "ПОСЛЕДНЯЯ ЦЕНА",
                        change: "ИЗМЕНЕНИЕ 24 ЧАСА",
                        comingsoon: "СКОРО"
                    },
                    lang: {
                        lang: "УПРАВЛЕНИЕ ЯЗЫКОМ"
                    },
                    notice: {
                        notice: "УВЕДОМЛЕНИЯ"
                    },
                    agreement: {
                        agreement: "СОГЛАШЕНИЯ О ПОЛЬЗОВАТЕЛЬСКОМ СЕРВИСЕ"
                    },
                    user: {
                        user: "ПОЛЬЗОВАТЕЛЬ",
                        login: "ВОЙТИ",
                        register: "ЗАРЕГИСТРИРОВАТЬСЯ",
                        email: "E-MAIL",
                        phone: "ТЕЛЕФОН",
                        phonenumber: "НОМЕР ТЕЛЕФОНА",
                        pwd: "ПАРОЛЬ",
                        forgetpwd: "ЗАБЫЛИ ПАРОЛЬ",
                        userreg: "ЗАРЕГИСТРИРОВАТЬСЯ",
                        emailErrMsg: "НЕПРАВИЛЬНЫЙ ФОРМАТ E-MAIL",
                        phoneErrMsg: "НЕПРАВИЛЬНЫЙ ФОРМАТ ТЕЛЕФОНА",
                        pwdErrMsg1: "ТОЛЬКО ЦИФРЫ, БУКВЫ И -/+. ~! @#$%^&(), И Т. Д.",
                        pwdErrMsg2: "СОДЕРЖИТ КАК МИНИМУМ ЦИФРУ",
                        pwdErrMsg3: "СОДЕРЖИТ КАК МИНИМУМ БУКВЫ",
                        pwdErrMsg4: "ДЛИНА 6-20",
                        gvc: "ГРАФИЧЕСКАЯ CAPTCHA ",
                        checkCode: "ПРОВЕРОЧНЫЙ КОД",
                        invCode: "ПРИГЛАСИТЕЛЬНЫЙ КОД",
                        getCode: "SEND",
                        regain: "ОТПРАВИТЬ ПОВТОРНО",
                        newPwd: "НОВЫЙ ПАРОЛЬ"
                    },
                    userInfo: {
                        userInfo: "ИНФОРМАЦИЯ ОБ АККАУНТЕ",
                        creditScore: "КРЕДИТНЫЙ РЕЙТИНГ",
                        inviteCode: "ПРИГЛАСИТЕЛЬНЫЙ КОД",
                        authentication: "ВЕРИФИКАЦИЯ",
                        authenticated: "ПРОВЕРЕНО",
                        authenticatefail: "ОШИБКИ ВЕРИФИКАЦИИ",
                        authenticating: "ПРОВЕРКА",
                        lang: "ЯЗЫК",
                        withdrawalAdd: "АДРЕС ВЫВОДА",
                        setpwd: "ПАРОЛЬ",
                        support: "ЦЕНТР ПОМОЩИ",
                        notice: "УВЕДОМЛЕНИЯ",
                        newNotice: "НОВОЕ УВЕДОМЛЕНИЕ",
                        invite: "МОИ ПРИГЛАШЕНИЯ",
                        aboutUs: "О НАС",
                        msb: "ПОДТВЕРЖДЕНИЕ MSB",
                        exit: "ВЫЙТИ",
                        service: "ОНЛАЙН-СЛУЖБА ПОДДЕРЖКИ"
                    },
                    auth: {
                        name: "ИМЯ",
                        IDType: "ВЫБЕРИТЕ ТИП ДОКУМЕНТА",
                        cardBack: "ЗАГРУЗИТЬ ОБРАТНУЮ СТОРОНУ ДОКУМЕНТА",
                        cardFront: "ЗАГРУЗИТЬ ПЕРЕДНЮЮ СТОРОНУ ДОКУМЕНТА",
                        IDCard: "ПАСПОРТ",
                        passport: "ПАСПОРТ",
                        cardErrMsg: "ВЫБЕРИТЕ ТИП ДОКУМЕНТА",
                        idnumber: "НОМЕР ДОКУМЕНТА",
                        idnumberErrMsg: "ВВЕДИТЕ ПРАВИЛЬНЫЙ НОМЕР ДОКУМЕНТА",
                        overSize: "РАЗМЕР ИЗОБРАЖЕНИЯ НЕ ДОЛЖЕН ПРЕВЫШАТЬ",
                        realImage: "ВВЕДИТЕ ПРАВИЛЬНОЕ ИЗОБРАЖЕНИЕ ВАШЕГО ДОКУМЕНТА",
                        uploading: "ЗАГРУЗКА",
                        uploadFail: "ЗАГРУЗКА НЕ УДАЛАСЬ",
                        waitUpload: "ПОЖАЛУЙСТА, ДОЖДИТЕСЬ ЗАВЕРШЕНИЯ ЗАГРУЗКИ ИЗОБРАЖЕНИЯ",
                        reSub: "ПЕРЕЗАГРУЗИТЬ",
                        pending: "В ОЖИДАНИИ",
                        approve: "ПРИНЯТО",
                        authenticating: "ПРОВЕРКА РЕАЛЬНОГО ИМЕНИ В ПРОЦЕССЕ РАССМОТРЕНИЯ",
                        waitauthentication: "ОЖИДАЙТЕ ЗАВЕРШЕНИЯ ПРОВЕРКИ И ОПЕРИРУЙТЕ",
                        authenticatefail: "ПРОВЕРКА РЕАЛЬНОГО ИМЕНИ НЕ ПРОЙДЕНА",
                        reauthentication: "ПОВТОРНАЯ ПРОВЕРКА",
                        pleaseauthenticate: "ДЛЯ ПОЛЬЗОВАНИЯ ВСЕМИ НАШИМИ ПРОДУКТАМИ И УСЛУГАМИ МЫ ПРОСИМ ВАС ПРОЙТИ ПРОЦЕСС ПРОВЕРКИ ЛИЧНОСТИ.",
                        doauthentication: "ПРОВЕРИТЬ ЛИЧНОСТЬ"
                    },
                    market: {
                        low: "НИЗКАЯ ЗА Х",
                        high: "ВЫСОКАЯ ЗА Х",
                        vol: "ОБЪЕМ ЗА Х",
                        timeStemp: "ВРЕМЯ",
                        price: "ЦЕНА",
                        amount: "КОЛИЧЕСТВО",
                        buy: "КУПИТЬ",
                        sell: "ПРОДАТЬ",
                        listTitle: "РЫНОК USDT",
                        mainTitle: "СПОТ",
                        fullOrder: "ВСЕ ЗАКАЗЫ",
                        history: "ИСТОРИЯ",
                        orderDetail: "ДЕТАЛИ СДЕЛКИ",
                        dealPrice: "ЦЕНА СДЕЛКИ",
                        dealAmount: "КОЛИЧЕСТВО СДЕЛОК",
                        orderAmount: "СУММА СДЕЛКИ",
                        status: {
                            all: "ВСЕ",
                            wait: "В ОЖИДАНИИ",
                            done: "ВЫПОЛНЕНО",
                            cancel: "ОТМЕНЕНО"
                        }
                    },
                    trade: {
                        title: "СПОТ",
                        buy: "КУПИТЬ",
                        sell: "ПРОДАТЬ",
                        available: "ДОСТУПНО",
                        orderPrice: "ЦЕНА ЗАКАЗА",
                        orderAmount: "КОЛИЧЕСТВО ЗАКАЗА",
                        dealAmount: "СДЕЛАНО",
                        openorders: "ОТКРЫТЫЕ ЗАКАЗЫ",
                        limitedPrice: "ЛИМИТИРОВАННАЯ ЦЕНА",
                        marketPrice: "РЫНОЧНАЯ ЦЕНА",
                        placeholderPrice: "ЦЕНА",
                        placeholderCount: "КОЛИЧЕСТВО",
                        placeholderAmount: "СУММА",
                        placeholderToken: "КОЛИЧЕСТВО",
                        description: "ЛУЧШАЯ РЫНОЧНАЯ ЦЕНА",
                        status: {
                            all: "ВСЕ",
                            wait: "В ОЖИДАНИИ",
                            done: "ВЫПОЛНЕНО",
                            cancel: "ОТМЕНЕНО"
                        },
                        noMore: "НЕТ БОЛЬШЕ",
                        pleaseinputokamount: "ПОЖАЛУЙСТА, ВВЕДИТЕ ПРАВИЛЬНУЮ СУММУ",
                        lessamount: "НЕДОСТАТОЧНО СРЕДСТВ",
                        lasttrades: "Последние сделки",
                        close: "Закрыть"
                    },
                    contract: {
                        title: "ФЬЮЧЕРСЫ",
                        listTitle: "ОТКРЫТЫЕ ЗАКАЗЫ",
                        high: "ВЫСОКАЯ",
                        low: "НИЗКАЯ",
                        custom: {
                            bitgetnb: {
                                high: "BUY UP",
                                low: "BUY FALL"
                            },
                            bexio: {
                                high: "ВЫСОКАЯ",
                                low: "НИЗКАЯ"
                            }
                        },
                        openTime: "ВРЕМЯ ОТКРЫТИЯ",
                        openPrice: "ЦЕНА ОТКРЫТИЯ",
                        totalAmount: "СУММА ИНВЕСТИЦИИ",
                        status: {
                            onGoing: "В ОЖИДАНИИ",
                            closed: "ВЫПОЛНЕНО"
                        },
                        detailTitle: "ДЕТАЛИ ФЬЮЧЕРСОВ",
                        contractAmount: "СУММА ФЬЮЧЕРСОВ",
                        contractType: "ТИП ФЬЮЧЕРСОВ",
                        contractStatus: "СТАТУС ФЬЮЧЕРСОВ",
                        minutes: "МИНУТЫ",
                        cycle: "ПЕРИОД ДЕЙСТВИЯ КОНТРАКТА",
                        closePrice: "ЦЕНА ЗАКРЫТИЯ",
                        closeTime: "ВРЕМЯ ЗАКРЫТИЯ",
                        profitAmount: "СУММА ПРИБЫЛИ И УБЫТКА",
                        selectCycle: "ВЫБЕРИТЕ ПЕРИОД",
                        orderAmount: "СУММА ЗАКАЗА",
                        availableAmount: "БАЛАНС:",
                        expectedEarnings: "ОЖИДАЕМАЯ ПРИБЫЛЬ:",
                        submitContract: "ПОДТВЕРДИТЬ ЗАКАЗ",
                        noEnoughBalance: "НЕДОСТАТОЧНО СРЕДСТВ.",
                        noTotalAmount: "ПРОВЕРЬТЕ СТАВКИ И ПЕРИОДЫ",
                        orderpricezero: "PRICE ABNORMAL, PLEASE TRY AGAIN LATER",
                        amountcannotbelessthan: "Минимальная сумма ставки",
                        amountcannotbemorethan: "Максимальная сумма ставки",
                        keepBuying: "Продолжить покупку",
                        countDown: "Обратный отсчет",
                        closing: "В процессе"
                    },
                    pwd: {
                        changePwd: "ИЗМЕНИТЬ ПАРОЛЬ",
                        loginPwd: "ПАРОЛЬ ДЛЯ ВХОДА",
                        withdrawalPwd: "ПАРОЛЬ ДЛЯ ВЫВОДА",
                        haveSet: "УСТАНОВЛЕН",
                        oldPwd: "СТАРЫЙ ПАРОЛЬ",
                        newPwd: "НОВЫЙ ПАРОЛЬ",
                        confirmPwd: "ПОДТВЕРДИТЬ ПАРОЛЬ",
                        pwdErrMsg: "ПАРОЛИ НЕ СОВПАДАЮТ.",
                        tips: "ДЛЯ БЕЗОПАСНОСТИ ВАШИХ СРЕДСТВ ВЫВОДЫ НЕ РАЗРЕШЕНЫ В ТЕЧЕНИЕ 24 ЧАСОВ ПОСЛЕ ИЗМЕНЕНИЯ ПАРОЛЯ ДЛЯ ВХОДА."
                    },
                    invite: {
                        invite: "ПРИГЛАСИТЬ",
                        myInviteCode: "МОЙ ПРИГЛАСИТЕЛЬНЫЙ КОД",
                        copyUrl: "СКОПИРОВАТЬ ССЫЛКУ ПРИГЛАШЕНИЯ",
                        firstVip: "УЧАСТНИКИ ПЕРВОГО ПОКОЛЕНИЯ",
                        secondVip: "УЧАСТНИКИ ВТОРОГО ПОКОЛЕНИЯ",
                        certified: "ПРОВЕРЕНО",
                        uncertified: "НЕ ПРОВЕРЕНО",
                        unit: "чел."
                    },
                    withdraw: {
                        address: "УПРАВЛЕНИЕ АДРЕСАМИ КРИПТОВАЛЮТ",
                        address1: "АДРЕС",
                        addwithdraw: "ДОБАВИТЬ АДРЕС ВЫВОДА",
                        not: "НЕТ СОХРАНЕННЫХ АДРЕСОВ",
                        add: "ДОБАВИТЬ АДРЕС",
                        btype: "ТИП ВАЛЮТЫ",
                        tbtype: "ТИП ВЫВОДА",
                        tbAddress: "АДРЕС ВЫВОДА КРИПТОВАЛЮТЫ",
                        placeholder1: "ВВЕДИТЕ АДРЕС КОШЕЛЬКА",
                        addressErrMsg: "РАЗРЕШЕНЫ ТОЛЬКО БУКВЫ В ВЕРХНЕМ И НИЖНЕМ РЕГИСТРЕ И ЦИФРЫ",
                        remark: "ПРИМЕЧАНИЕ",
                        placeholder2: "ВВЕДИТЕ ПРИМЕЧАНИЕ",
                        tb: "ВЫВЕСТИ",
                        tbCount: "СУММА ВЫВОДА",
                        balance: "БАЛАНС",
                        password: "ПАРОЛЬ ВЫВОДА",
                        all: "СНЯТЬ ВСЕ",
                        tips1: "МИНИМАЛЬНАЯ СУММА ВЫВОДА:",
                        tips2: "ВЫВОДЫ МЕНЬШЕ МИНИМАЛЬНОЙ СУММЫ НЕ БУДУТ ЗАЧИСЛЕНЫ И НЕ МОГУТ БЫТЬ ВОЗВРАЩЕНЫ.",
                        tips3: "ДЛЯ ЗАЩИТЫ БЕЗОПАСНОСТИ СРЕДСТВ, ПРИ ИЗМЕНЕНИИ ПОЛИТИКИ БЕЗОПАСНОСТИ АККАУНТА, ИЗМЕНЕНИИ ПАРОЛЯ ВЫВОДА МЫ БУДЕМ ВЫВОДИТЬ МОНЕТЫ ВРУЧНУЮ, ПОЖАЛУЙСТА, ДОЖДИТЕСЬ, КОГДА СОТРУДНИКИ СВЯЖУТСЯ ПО ТЕЛЕФОНУ ИЛИ ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ПОЖАЛУЙСТА, УБЕДИТЕСЬ, ЧТО КОМПЬЮТЕР И БРАУЗЕР БЕЗОПАСНЫ, ЧТОБЫ ПРЕДОТВРАТИТЬ ИЗМЕНЕНИЕ ИЛИ РАССЕЙВАНИЕ ИНФОРМАЦИИ!",
                        tips4: "СУММА ВЫВОДА ДОЛЖНА БЫТЬ В ПРЕДЕЛАХ",
                        tips5: " ОТ",
                        tips6: "ВЫБЕРИТЕ АДРЕС, КОТОРЫЙ НУЖНО УДАЛИТЬ",
                        text: "УПРАВЛЕНИЕ АДРЕСАМИ",
                        tips7: "ВЫ НЕ УСТАНОВИЛИ ПАРОЛЬ ВЫВОДА",
                        tips8: "ДОБАВЬТЕ АДРЕС ВЫВОДА КРИПТОВАЛЮТЫ, ЧТОБЫ ВЫВЕСТИ ДЕНЬГИ",
                        tips9: "ДОБАВИТЬ КОШЕЛЕК",
                        tips10: "КОМИССИЯ ЗА ОБСЛУЖИВАНИЕ:",
                        tips11: "СУММА ПОЛУЧЕНИЯ:"
                    },
                    assets: {
                        assets: "КОШЕЛЬКИ",
                        text1: "ОБЩАЯ СУММА АКТИВОВ (USDT)",
                        text2: "ИЗ-ЗА ЗАДЕРЖКИ В СТАТИСТИКЕ СРЕДСТВ БАЛАНС АККАУНТА МОЖЕТ НЕ БЫТЬ АКТУАЛЬНЫМ, ДЛЯ ПОЛУЧЕНИЯ ТОЧНОГО БАЛАНСА ПЕРЕЙДИТЕ НА СООТВЕТСТВУЮЩУЮ СТРАНИЦУ АККАУНТА",
                        assetsList: "СПИСОК АКТИВОВ",
                        usable: "ДОСТУПНО",
                        frozen: "ЗАМОРОЖЕНО",
                        text3: "≈USDT",
                        finance: "ИСТОРИЯ ТРАНЗАКЦИЙ",
                        time: "ВРЕМЯ",
                        amount: "СУММА",
                        explain: "ОБЪЯСНЕНИЕ",
                        recharge: "ПОПОЛНИТЬ",
                        withdraw: "ВЫВЕСТИ",
                        buy: "КУПИТЬ"
                    },
                    recharge: {
                        select: "КРИПТО",
                        charge: "ПОПУЛЯРНАЯ КРИПТОВАЛЮТА",
                        amount: "СУММА",
                        buyCoin: "КУПИТЬ КРИПТОВАЛЮТУ",
                        buy: "КУПИТЬ",
                        chargeCoin: "ПОПОЛНИТЬ",
                        chargeNet: "СЕТЬ",
                        btype: "ТИП ВАЛЮТЫ",
                        chargeAdd: "АДРЕС ПОПОЛНЕНИЯ",
                        tips1: "ПОЖАЛУЙСТА, ВВЕДИТЕ СУММУ ПОПОЛНЕНИЯ",
                        tips2: "СУММА ПОПОЛНЕНИЯ ДОЛЖНА БЫТЬ В ПРЕДЕЛАХ",
                        tips3: "ОТ",
                        tips4: "МИНИМАЛЬНАЯ СУММА ПОПОЛНЕНИЯ: ",
                        tips5: "，ПОПОЛНЕНИЯ МЕНЬШЕ МИНИМАЛЬНОЙ СУММЫ НЕ БУДУТ ЗАЧИСЛЕНЫ И НЕ МОГУТ БЫТЬ ВОЗВРАЩЕНЫ.",
                        tips6: "ПОЖАЛУЙСТА, ВЫБЕРИТЕ ПРАВИЛЬНУЮ СЕТЬ ДЛЯ ПОПОЛНЕНИЯ, ИНАЧЕ АКТИВЫ НЕ БУДУТ ВОЗВРАЩЕНЫ. ВАШ АДРЕС ПОПОЛНЕНИЯ НЕ БУДЕТ ЧАСТО ИЗМЕНЯТЬСЯ И ВЫ МОЖЕТЕ ПРОВОДИТЬ ПОПОЛНЕНИЕ ПОВТОРНО; ЕСЛИ ПРОИЗОШЛИ КАКИЕ-ЛИБО ИЗМЕНЕНИЯ, МЫ ПОПЫТАЕМСЯ СООБЩИТЬ ВАМ ЧЕРЕЗ ОБЪЯВЛЕНИЕ НА САЙТЕ ИЛИ ПО ЭЛЕКТРОННОЙ ПОЧТЕ, ПОЖАЛУЙСТА, УБЕДИТЕСЬ, ЧТО ВАШ КОМПЬЮТЕР И БРАУЗЕР ЗАЩИЩЕНЫ, ЧТОБЫ ПРЕДОТВРАТИТЬ ВОЗМОЖНОСТЬ ВМЕШАТЕЛЬСТВА ИЛИ РАССЕЯНИЯ ИНФОРМАЦИИ.",
                        chargeRecord: "ЗАПИСИ ПОПОЛНЕНИЯ",
                        time: "ВРЕМЯ",
                        count: "КОЛИЧЕСТВО",
                        success: "УСПЕШНО",
                        fail: "ОШИБКА",
                        confirming: "ПОДТВЕРЖДЕНИЕ",
                        charging: "ИДЕТ ПОПОЛНЕНИЕ",
                        goon: "ИДЕТ ПОПОЛНЕНИЕ"
                    },
                    defi: {
                        defi: "DEFI",
                        doingAmount: "СУММА В ДОБЫЧЕ (USDT)",
                        todayEarnings: "ДОХОД СЕГОДНЯ (USDT)",
                        allEarnings: "НАКОПИТЕЛЬНЫЙ ДОХОД (USDT)",
                        orderEarnings: "ЗАКАЗ ДОХОДА",
                        limit: "КВОТА (USDT)",
                        rate: "ЕЖЕДНЕВНЫЙ ДОХОД",
                        cycle: "СРОК ЗАЛОГА",
                        pledge: "ЗАЛОГ",
                        detail: "ДЕТАЛИ",
                        times: "ЛИМИТ ПОКУПКИ",
                        yield: "ГОДОВАЯ ПРОЦЕНТНАЯ СТАВКА",
                        balance: "БАЛАНС",
                        amount: "СУММА ЗАЛОГА",
                        pleaseinputrightamount: "ВВЕДИТЕ ПРАВИЛЬНУЮ СУММУ ЗАЛОГА",
                        preearnings: "ПРОГНОЗИРУЕМЫЙ ОБЩИЙ ДОХОД",
                        pledgeRecord: "ЗАПИСИ ЗАЛОГА",
                        projectName: "НАЗВАНИЕ ПРОЕКТА",
                        pledgeTime: "ВРЕМЯ ЗАЛОГА",
                        cutOffTime: "ВРЕМЯ РАСЧЕТА",
                        investmentAmount: "СУММА ИНВЕСТИЦИЙ",
                        status: "СТАТУС",
                        incomeRecord: "ЗАПИСИ ВЫПУСКА ДОХОДА",
                        earning: "НАКОПЛЕНИЕ",
                        settled: "УЖЕ РАСЧИТАНО",
                        day: "ДЕНЬ"
                    },
                    append: {
                        gotologin: "ПЕРЕЙТИ К ВХОДУ",
                        logining: "ВХОД..."
                    },
                    data: {
                        recharge: "ПОПОЛНЕНИЕ",
                        withdraw: "ВЫВОД",
                        withdrawalrefusal: "ОТКАЗ В ВЫВОДЕ",
                        secondcontractorder: "ЗАКАЗ ФЬЮЧЕРСОВ",
                        secondcontractwin: "ПРИБЫЛЬ ФЬЮЧЕРСОВ",
                        cointransactioniscancelled: "СПОТ-ТОРГОВЛЯ ОТМЕНЕНА",
                        placeanorderforcointrading: "ЗАКАЗ СПОТ-ТОРГОВЛИ",
                        plusdeduction: "КОРРЕКЦИЯ БАЛАНСА",
                        buy: "КУПИТЬ",
                        sell: "ПРОДАТЬ",
                        pending: "В ОЖИДАНИИ",
                        successful: "УСПЕШНО",
                        fail: "ОШИБКА",
                        defipledge: "ЗАЛОГ DEFI",
                        miningincome: "ДОХОД ОТ ДОБЫЧИ",
                        settleaccount: "РАСЧЕТ СЧЕТА",
                        limitordertrading: "Торговля по лимитным ордерам",
                        limitorderwaspurchasedsuccessfully: "Лимитный ордер был успешно куплен",
                        realnameauthentication: "АУТЕНТИФИКАЦИЯ ПО РЕАЛЬНОМУ ИМЕНИ",
                        realnamesuccess: "Ваша аутентификация по реальному имени прошла, желаем вам успешной торговли",
                        realnameauthenticationfailed: "Аутентификация по реальному имени не удалась",
                        rechargesuccessfullytips: "Ваше пополнение прошло успешно, желаем вам успешной торговли",
                        rechargesuccessfully: "Пополнение успешно",
                        rechargefailure: "Ошибка пополнения",
                        successfulwithdrawal: "Успешный вывод",
                        withdrawalfailure: "Ошибка вывода",
                        successfulwithdrawaltips: "Ваш запрос на вывод был одобрен, пожалуйста, проверьте",
                        handlingcharge: "Сбор за обработку",
                        transactionamountisnotsatisfied: "МИНИМАЛЬНАЯ СУММА ТРАНЗАКЦИИ:",
                        high: "BUY UP",
                        low: "BUY FALL",
                        ongoingdata: "В ОЖИДАНИИ",
                        closeddata: "ВЫПОЛНЕНО"
                    },
                    title: {
                        home: "ОБМЕН КРИПТОВАЛЮТ",
                        market: "РЫНОК",
                        trade: "ТОРГОВЛЯ",
                        futures: "ФЬЮЧЕРСЫ",
                        wallets: "КОШЕЛЬКИ",
                        userinfo: "ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ",
                        tradelist: "ЗАПИСИ О ТОРГОВЛЕ",
                        orderlist: "ОТКРЫТЫЕ ЗАПИСИ",
                        futureslist: "ЗАПИСИ О ФЬЮЧЕРСАХ",
                        walletsdetail: "ДЕТАЛИ КОШЕЛЬКОВ",
                        user: "ПОЛЬЗОВАТЕЛЬ",
                        language: "ЯЗЫК",
                        notice: "ОБЪЯВЛЕНИЕ",
                        login: "ВХОД",
                        register: "РЕГИСТРАЦИЯ",
                        serviceprotoc: "СОГЛАШЕНИЕ",
                        forgetpassword: "ЗАБЫЛИ ПАРОЛЬ",
                        authentication: "ВЕРИФИКАЦИИ",
                        modifypassword: "ИЗМЕНИТЬ ПАРОЛЬ",
                        invite: "МОЙ ПРИГЛАСИТЕЛЬ",
                        aboutus: "О НАС",
                        onlineservice: "ОНЛАЙН-СЕРВИС",
                        withdrawpassword: "ПАРОЛЬ ВЫВОДА",
                        withdrawaddress: "УПРАВЛЕНИЕ АДРЕСАМИ КРИПТОВАЛЮТ",
                        addwithdrawaddress: "ДОБАВИТЬ АДРЕС",
                        withdraw: "ВЫВОД",
                        deposit: "ПОПОЛНЕНИЕ",
                        choosecoin: "КРИПТОВАЛЮТА",
                        depositrecord: "ЗАПИСИ ПОПОЛНЕНИЯ",
                        recharge: "ПОПОЛНЕНИЕ",
                        defilist: "DEFI",
                        defidetail: "ДЕТАЛИ DEFI",
                        pledgerecord: "ЗАПИСИ ЗАЛОГА",
                        incomerecord: "ЗАПИСИ ВЫПУСКА ДОХОДА",
                        msb: "МСБ-ОДОБРЕНИЕ"
                    }
                }
            }
              , P = t(5574);
            a.Z.use(i.Z);
            const M = {
                us: {
                    ...o.Z,
                    ...d
                },
                cn: {
                    ...r.Z,
                    ...O
                },
                tw: {
                    ...s.Z,
                    ...S
                },
                br: {
                    ...I,
                    ...u
                },
                jp: {
                    ...A.Z,
                    ...D
                },
                kr: {
                    ...l,
                    ...C
                },
                de: {
                    ...R.Z,
                    ...p
                },
                es: {
                    ...c.Z,
                    ...m
                },
                fr: {
                    ...T.Z,
                    ...U
                },
                ru: {
                    ...N,
                    ...L
                }
            }
              , h = function() {
                const e = navigator.language ? navigator.language : navigator.browserLanguage;
                let E = "";
                return E = "cn" === e.toLowerCase() || "zh" === e.toLowerCase() || "zh-cn" === e.toLowerCase() ? "cn" : "us",
                E
            }
              , g = new i.Z({
                locale: P.Z.local.get("lang") || h(),
                messages: M,
                silentTranslationWarn: !0
            });
            function f(e) {
                n.Z.use(e, o.Z),
                "us" === e && n.Z.use(e, o.Z),
                "cn" === e && n.Z.use(e, r.Z),
                "tw" === e && n.Z.use(e, s.Z),
                "jp" === e && n.Z.use(e, A.Z),
                "kr" === e && n.Z.use(e, l),
                "br" === e && n.Z.use(e, I),
                "de" === e && n.Z.use(e, R.Z),
                "es" === e && n.Z.use(e, c.Z),
                "fr" === e && n.Z.use(e, T.Z),
                "ru" === e && n.Z.use(e, N)
            }
        },
        4938: function(e, E, t) {
            var a = t(2810)
              , i = t(4539)
              , n = (t(5110),
            t(8099))
              , o = function() {
                var e = this
                  , E = e.$createElement
                  , t = e._self._c || E;
                return t("div", [t("vue-particles", {
                    staticClass: "lizi",
                    attrs: {
                        color: "#fff",
                        "particle-opacity": .7,
                        "particles-number": 60,
                        "shape-type": "circle",
                        "particle-size": 4,
                        "lines-color": "#fff",
                        "lines-width": 1,
                        "line-linked": !0,
                        "line-opacity": .4,
                        "lines-distance": 150,
                        "move-speed": 2,
                        "hover-effect": !0,
                        "hover-mode": "grab",
                        "click-effect": !0,
                        "click-mode": "push"
                    }
                }), t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("router-view"), e.isTab ? t("BaseTabbarPage") : e._e(), t("NoticeBox", {
                    attrs: {
                        title: e.notice.title,
                        content: e.notice.content
                    },
                    model: {
                        value: e.notice.show,
                        callback: function(E) {
                            e.$set(e.notice, "show", E)
                        },
                        expression: "notice.show"
                    }
                }), e.show ? t("div", {
                    staticClass: "download-container"
                }, [t("div", {
                    staticClass: "download"
                }, [t("div", {
                    staticClass: "logo"
                }, [t("img", {
                    attrs: {
                        src: e.logo,
                        alt: "",
                        height: "32px"
                    }
                })]), t("div", {
                    staticClass: "content",
                    on: {
                        click: e.handleAPPDownload
                    }
                }, [e._v(e._s(e.$t("app.download")))]), t("div", {
                    staticClass: "close",
                    on: {
                        click: e.onCloseDownloadContainer
                    }
                }, [t("van-icon", {
                    attrs: {
                        name: "cross"
                    }
                })], 1)])]) : e._e()], 1)], 1)
            }
              , r = []
              , s = t(4302)
              , A = function() {
                var e = this
                  , E = e.$createElement
                  , t = e._self._c || E;
                return t("div", {
                    staticClass: "tab"
                }, [t("van-tabbar", {
                    attrs: {
                        "active-color": "#07C160"
                    },
                    model: {
                        value: e.active,
                        callback: function(E) {
                            e.active = E
                        },
                        expression: "active"
                    }
                }, e._l(e.tabList, (function(E) {
                    return t("van-tabbar-item", {
                        key: E.name,
                        attrs: {
                            name: E.name,
                            to: E.to
                        },
                        scopedSlots: e._u([{
                            key: "icon",
                            fn: function(e) {
                                return [t("img", {
                                    attrs: {
                                        src: e.active ? E.icon.active : E.icon.inactive
                                    }
                                })]
                            }
                        }], null, !0)
                    }, [t("span", [e._v(e._s(E.title))])])
                }
                )), 1)], 1)
            }
              , R = []
              , c = {
                name: "BaseTabbar",
                components: {},
                data() {
                    return {}
                },
                computed: {
                    active: {
                        get() {
                            const {path: e} = this.$route;
                            return e.replace("/", "")
                        },
                        set() {}
                    },
                    tabList: {
                        get() {
                            return [{
                                name: "home",
                                to: "/home",
                                title: this.$t("app.tab.home"),
                                icon: {
                                    active: t(7485),
                                    inactive: t(5904)
                                }
                            }, {
                                name: "market",
                                to: "/market",
                                title: this.$t("app.tab.market"),
                                icon: {
                                    active: t(1453),
                                    inactive: t(6702)
                                }
                            }, {
                                name: "trade",
                                to: "/trade",
                                title: this.$t("app.tab.trade"),
                                icon: {
                                    active: t(4375),
                                    inactive: t(3014)
                                }
                            }, {
                                name: "contract",
                                to: "/contract",
                                title: this.$t("app.tab.contract"),
                                icon: {
                                    active: t(7879),
                                    inactive: t(4262)
                                }
                            }, {
                                name: "assets",
                                to: "/assets",
                                title: this.$t("app.tab.assets"),
                                icon: {
                                    active: t(3361),
                                    inactive: t(4886)
                                }
                            }]
                        },
                        set() {}
                    }
                },
                mounted() {}
            }
              , T = c
              , I = t(1001)
              , l = (0,
            I.Z)(T, A, R, !1, null, "5f1d9857", null)
              , N = l.exports
              , d = function() {
                var e = this
                  , E = e.$createElement
                  , t = e._self._c || E;
                return t("div", {
                    staticClass: "global-notice"
                }, [t("van-popup", {
                    attrs: {
                        round: "",
                        "close-on-click-overlay": !1
                    },
                    model: {
                        value: e.show,
                        callback: function(E) {
                            e.show = E
                        },
                        expression: "show"
                    }
                }, [t("div", {
                    staticClass: "notice-box"
                }, [t("div", {
                    staticClass: "notice-title"
                }, [e._v(e._s(e.title))]), t("div", {
                    staticClass: "notice-content",
                    domProps: {
                        innerHTML: e._s(e.content.replace(/\n/g, "<br/>"))
                    }
                }), t("van-button", {
                    staticClass: "btn",
                    attrs: {
                        block: "",
                        type: "primary"
                    },
                    on: {
                        click: e.close
                    }
                }, [e._v(e._s(e.$t("app.msg.know")))]), t("div", {
                    staticClass: "check",
                    on: {
                        click: function(E) {
                            e.isChecked = !e.isChecked
                        }
                    }
                }, [t("van-icon", {
                    staticClass: "mr-12",
                    attrs: {
                        name: "passed",
                        size: "16px",
                        color: e.isChecked ? "#07c160" : "#fff"
                    }
                }), t("span", [e._v(e._s(e.$t("app.msg.notShownToday")))])], 1)], 1)])], 1)
            }
              , O = []
              , S = {
                name: "NoticeBox",
                props: {
                    value: {
                        type: Boolean,
                        default: !1
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    content: {
                        type: String,
                        default: ""
                    }
                },
                data() {
                    return {
                        isChecked: !1
                    }
                },
                computed: {
                    show: {
                        set: function(e) {
                            this.$emit("input", e)
                        },
                        get: function() {
                            return this.value
                        }
                    }
                },
                methods: {
                    close() {
                        this.$emit("input", !1),
                        localStorage.setItem("notShownToday", this.isChecked),
                        localStorage.setItem("lastDate", (new Date).getDate().toString())
                    }
                }
            }
              , u = S
              , D = (0,
            I.Z)(u, d, O, !1, null, "1b837ce9", null)
              , C = D.exports
              , p = t(719)
              , m = t(7065)
              , U = {
                name: "App",
                components: {
                    BaseTabbarPage: N,
                    NoticeBox: C
                },
                data() {
                    return {
                        active: 0,
                        isTab: !0,
                        notice: {
                            show: !1,
                            title: "",
                            content: ""
                        },
                        logo: "",
                        appDownloadLink: "",
                        close: !1,
                        isHomePage: !1
                    }
                },
                computed: {
                    show() {
                        return this.appDownloadLink && !0 !== this.close && this.isHomePage
                    }
                },
                watch: {
                    $route(e) {
                        e && e.meta && (this.isTab = e.meta.isTab),
                        e && "/home" === e.path ? this.isHomePage = !0 : this.isHomePage = !1
                    }
                },
                created() {
                    this.$store.dispatch("setCointypelist"),
                    this.getPopups(),
                    this.buildGlobalConfig()
                },
                methods: {
                    getPopups() {
                        const e = JSON.parse(localStorage.getItem("notShownToday"))
                          , E = JSON.parse(localStorage.getItem("lastDate"))
                          , t = (new Date).getDate();
                        E === t && e || (0,
                        p.EH)().then((e=>{
                            const {title: E, content: t} = e.data || {};
                            E && (this.notice.title = E,
                            this.notice.content = t,
                            this.notice.show = !0)
                        }
                        )).catch((e=>{
                            console.log(e)
                        }
                        ))
                    },
                    buildGlobalConfig() {
                        (0,
                        m.k)().then((e=>{
                            const E = e.data || {};
                            if (E.certification && this.setCertification(E.certification),
                            E.lang) {
                                const e = E.lang.split("-")[1];
                                this.setLocale(e)
                            } else
                                this.setLocale("us");
                            if (E.custom && this.$store.commit("setCustom", E.custom),
                            E.thirdPartyWithdrawalAddress && this.$store.commit("setThirdPartyWithdrawalAddress", E.thirdPartyWithdrawalAddress),
                            E.h5ico) {
                                const e = document.querySelector("link[rel*='icon']");
                                e.href = E.h5ico
                            }
                            E.appDownloadLink && (this.appDownloadLink = E.appDownloadLink),
                            E.logo && (this.logo = E.logo)
                        }
                        )).catch((e=>{
                            console.log(e)
                        }
                        ))
                    },
                    setCertification(e) {
                        this.$store.commit("setCertification", e)
                    },
                    setLocale(e) {
                        this.$i18n.locale = e,
                        (0,
                        s.D)(e),
                        localStorage.setItem("lang", e)
                    },
                    onCloseDownloadContainer() {
                        this.close = !0
                    },
                    handleAPPDownload() {
                        window.open(this.appDownloadLink)
                    }
                }
            }
              , L = U
              , P = (0,
            I.Z)(L, o, r, !1, null, null, null)
              , M = P.exports
              , h = t(4314)
              , g = t(4989);
            n.Z.use(h.Z);
            const f = [{
                path: "/",
                redirect: "/home"
            }, {
                name: "home",
                component: ()=>Promise.all([t.e(113), t.e(205)]).then(t.bind(t, 3205)),
                meta: {
                    title: "app.title.home",
                    isTab: !0
                }
            }, {
                name: "market",
                component: ()=>Promise.all([t.e(113), t.e(365)]).then(t.bind(t, 6365)),
                meta: {
                    title: "app.title.market",
                    isTab: !0
                }
            }, {
                name: "marketDetail",
                component: ()=>Promise.all([t.e(105), t.e(113), t.e(210), t.e(407)]).then(t.bind(t, 7426)),
                meta: {
                    title: "app.title.marketdetail"
                }
            }, {
                name: "trade",
                component: ()=>Promise.all([t.e(113), t.e(746), t.e(417), t.e(357)]).then(t.bind(t, 7474)),
                meta: {
                    title: "app.title.trade",
                    isTab: !0,
                    requireAuth: !0
                }
            }, {
                name: "orderList",
                component: ()=>Promise.all([t.e(746), t.e(488)]).then(t.bind(t, 5488)),
                meta: {
                    title: "app.title.tradelist"
                }
            }, {
                name: "dealList",
                component: ()=>Promise.all([t.e(113), t.e(746), t.e(417), t.e(688)]).then(t.bind(t, 1385)),
                meta: {
                    title: "app.title.orderlist",
                    isTab: !0
                }
            }, {
                name: "contractList",
                component: ()=>Promise.all([t.e(746), t.e(759)]).then(t.bind(t, 7927)),
                meta: {
                    title: "app.title.futureslist"
                }
            }, {
                name: "contract",
                component: ()=>Promise.all([t.e(105), t.e(113), t.e(746), t.e(210), t.e(331)]).then(t.bind(t, 3727)),
                meta: {
                    title: "app.title.futures",
                    isTab: !0,
                    requireAuth: !0
                }
            }, {
                name: "assets",
                component: ()=>t.e(839).then(t.bind(t, 9839)),
                meta: {
                    title: "app.title.wallets",
                    isTab: !0,
                    requireAuth: !0
                }
            }, {
                path: "/assets/detail",
                component: ()=>t.e(59).then(t.bind(t, 8059)),
                meta: {
                    title: "app.title.walletsdetail"
                }
            }, {
                name: "user",
                component: ()=>t.e(601).then(t.bind(t, 6601)),
                meta: {
                    title: "app.title.user"
                }
            }, {
                name: "test",
                component: ()=>t.e(51).then(t.bind(t, 1051)),
                meta: {
                    title: "test"
                }
            }, {
                name: "lang",
                component: ()=>t.e(133).then(t.bind(t, 9133)),
                meta: {
                    title: "app.title.language"
                }
            }, {
                name: "notice",
                component: ()=>t.e(718).then(t.bind(t, 4718)),
                meta: {
                    title: "app.title.notice"
                }
            }, {
                path: "noticeDetail",
                name: "NoticeDetail",
                component: ()=>t.e(816).then(t.bind(t, 4816)),
                meta: {
                    title: "app.title.notice"
                }
            }, {
                name: "login",
                component: ()=>Promise.all([t.e(105), t.e(823)]).then(t.bind(t, 3758)),
                meta: {
                    title: "app.title.login"
                }
            }, {
                name: "register",
                component: ()=>Promise.all([t.e(105), t.e(884)]).then(t.bind(t, 1224)),
                meta: {
                    title: "app.title.register"
                }
            }, {
                name: "serviceAgreement",
                component: ()=>t.e(100).then(t.bind(t, 4100)),
                meta: {
                    title: "app.title.serviceprotoc"
                }
            }, {
                name: "forgetPwd",
                component: ()=>Promise.all([t.e(105), t.e(428)]).then(t.bind(t, 3239)),
                meta: {
                    title: "app.title.forgetpassword"
                }
            }, {
                name: "userInfo",
                component: ()=>t.e(764).then(t.bind(t, 4764)),
                meta: {
                    title: "app.title.userinfo"
                }
            }, {
                name: "authentication",
                component: ()=>Promise.all([t.e(105), t.e(425)]).then(t.bind(t, 195)),
                meta: {
                    title: "app.title.authentication"
                }
            }, {
                name: "pwdManagement",
                component: ()=>t.e(470).then(t.bind(t, 1470)),
                meta: {
                    title: "app.title.modifypassword"
                }
            }, {
                name: "changePwd",
                component: ()=>Promise.all([t.e(105), t.e(198)]).then(t.bind(t, 4042)),
                meta: {
                    title: "app.title.modifypassword"
                }
            }, {
                name: "invite",
                component: ()=>Promise.all([t.e(212), t.e(258)]).then(t.bind(t, 7574)),
                meta: {
                    title: "app.title.invite"
                }
            }, {
                name: "aboutUs",
                component: ()=>t.e(368).then(t.bind(t, 6368)),
                meta: {
                    title: "app.title.aboutus"
                }
            }, {
                name: "service",
                component: ()=>t.e(28).then(t.bind(t, 2028)),
                meta: {
                    title: "app.title.onlineservice"
                }
            }, {
                name: "withdrawalPwd",
                component: ()=>Promise.all([t.e(105), t.e(649)]).then(t.bind(t, 4984)),
                meta: {
                    title: "app.title.withdrawpassword"
                }
            }, {
                name: "withdrawAddress",
                component: ()=>t.e(394).then(t.bind(t, 1394)),
                meta: {
                    title: "app.title.withdrawaddress"
                }
            }, {
                path: "/withdrawAddress/add",
                component: ()=>Promise.all([t.e(105), t.e(453)]).then(t.bind(t, 1031)),
                meta: {
                    title: "app.title.addwithdrawaddress"
                }
            }, {
                path: "/withdraw",
                component: ()=>Promise.all([t.e(105), t.e(79)]).then(t.bind(t, 1459)),
                meta: {
                    title: "app.title.withdraw",
                    requireAuth: !0
                }
            }, {
                path: "/recharge",
                component: ()=>Promise.all([t.e(746), t.e(212), t.e(366)]).then(t.bind(t, 2178)),
                meta: {
                    title: "app.title.deposit",
                    requireAuth: !0
                }
            }, {
                path: "/recharge/select",
                component: ()=>t.e(306).then(t.bind(t, 6306)),
                meta: {
                    title: "app.title.choosecoin",
                    requireAuth: !0
                }
            }, {
                path: "/recharge/record",
                component: ()=>t.e(130).then(t.bind(t, 2130)),
                meta: {
                    title: "app.title.depositrecord",
                    requireAuth: !0
                }
            }, {
                path: "/recharge/result",
                name: "RechargeResult",
                component: ()=>t.e(776).then(t.bind(t, 5776)),
                meta: {
                    title: "app.title.recharge",
                    requireAuth: !0
                }
            }, {
                path: "/defi",
                component: ()=>t.e(647).then(t.bind(t, 647)),
                meta: {
                    title: "app.title.defilist",
                    requireAuth: !0
                }
            }, {
                path: "/defi/detail",
                component: ()=>Promise.all([t.e(105), t.e(698)]).then(t.bind(t, 5263)),
                meta: {
                    title: "app.title.defidetail",
                    requireAuth: !0
                }
            }, {
                path: "/defi/pledgeRecord",
                component: ()=>t.e(1).then(t.bind(t, 3001)),
                meta: {
                    title: "app.title.pledgerecord",
                    requireAuth: !0
                }
            }, {
                path: "/defi/incomeRecord",
                component: ()=>t.e(108).then(t.bind(t, 7108)),
                meta: {
                    title: "app.title.incomerecord",
                    requireAuth: !0
                }
            }, {
                path: "/msb",
                component: ()=>t.e(523).then(t.bind(t, 9523)),
                meta: {
                    title: "app.title.msb"
                }
            }, {
                path: "/404",
                component: ()=>t.e(584).then(t.bind(t, 2584))
            }, {
                path: "/:catchAll(.*)",
                redirect: "/404"
            }];
            f.forEach((e=>{
                e.path = e.path || "/" + (e.name || "")
            }
            ));
            const w = new h.Z({
                routes: f
            });
            w.beforeEach(((e,E,t)=>{
                const {requireAuth: a} = e.meta;
                if (a) {
                    const e = (0,
                    g.Y)();
                    if (!1 === e)
                        return
                }
                let i = e.meta && e.meta.title;
                const n = window.companyName;
                i = n && n.length ? n + "-" + s.a.t(i) : s.a.t(i),
                i && (document.title = i),
                t()
            }
            ));
            var G = t(1427);
            n.Z.use(G.ZP);
            var H = new G.ZP.Store({
                state: {
                    serviceUrl: "",
                    cointypelist: [],
                    routeInfo: {
                        coinPair: "btcusdt",
                        coinPairName: "BTC/USDT",
                        direction: "buy",
                        tradeType: "default"
                    },
                    certification: !0,
                    custom: "",
                    thirdPartyWithdrawalAddress: ""
                },
                mutations: {
                    setServiceUrl(e, E) {
                        e.serviceUrl = E
                    },
                    setCointypelist(e, E) {
                        e.cointypelist = E
                    },
                    setRouteInfo(e, E) {
                        e.routeInfo = {
                            ...e.routeInfo,
                            ...E
                        }
                    },
                    setCertification(e, E) {
                        e.certification = E
                    },
                    setCustom(e, E) {
                        e.custom = E
                    },
                    setThirdPartyWithdrawalAddress(e, E) {
                        e.thirdPartyWithdrawalAddress = E
                    }
                },
                actions: {
                    async setCointypelist({commit: e}) {
                        const E = await (0,
                        p.O7)()
                          , t = E.data || [];
                        if (e("setCointypelist", t),
                        t.length) {
                            const E = t[0]
                              , a = `${E.tradecoin}${E.settlecoin}`;
                            e("setRouteInfo", {
                                coinPair: a.toLowerCase(),
                                coinPairName: E.name,
                                direction: "buy",
                                tradeType: "default"
                            })
                        }
                    }
                }
            })
              , F = t(468);
            n.Z.use(F.Z),
            (0,
            s.D)(s.a.locale),
            n.Z.use(a.ZP),
            n.Z.use(i.Z),
            i.Z.setDefaultOptions({
                duration: 1e3
            }),
            n.Z.config.productionTip = !1,
            new n.Z({
                i18n: s.a,
                router: w,
                el: "#app",
                store: H,
                render: e=>e(M)
            })
        },
        5574: function(e, E) {
            const t = {
                set(e, E) {
                    sessionStorage && null != e && null != E && sessionStorage.setItem(e, E)
                },
                get(e) {
                    return sessionStorage ? null == e ? null : sessionStorage.getItem(e) : null
                },
                setJSON(e, E) {
                    null != E && this.set(e, JSON.stringify(E))
                },
                getJSON(e) {
                    const E = this.get(e);
                    if (null != E)
                        return JSON.parse(E)
                },
                remove(e) {
                    sessionStorage.removeItem(e)
                }
            }
              , a = {
                set(e, E) {
                    localStorage && null != e && null != E && localStorage.setItem(e, E)
                },
                get(e) {
                    return localStorage ? null == e ? null : localStorage.getItem(e) : null
                },
                setJSON(e, E) {
                    null != E && this.set(e, JSON.stringify(E))
                },
                getJSON(e) {
                    const E = this.get(e);
                    if (null != E)
                        return JSON.parse(E)
                },
                remove(e) {
                    localStorage.removeItem(e)
                }
            };
            E.Z = {
                session: t,
                local: a
            }
        },
        4989: function(e, E, t) {
            t.d(E, {
                K: function() {
                    return o
                },
                Y: function() {
                    return r
                }
            });
            var a = t(4302)
              , i = t(5574)
              , n = t(3049);
            const o = (e=!1)=>{
                if (!1 === e)
                    return !0;
                try {
                    const e = JSON.parse(i.Z.local.get("user"))
                      , {userinfo: E={}} = e
                      , {certification: t=0} = E;
                    switch (t) {
                    case null:
                        return n.Z.alert({
                            message: a.a.t("app.auth.pleaseauthenticate"),
                            confirmButtonText: a.a.t("app.auth.doauthentication")
                        }).then((()=>{
                            location.href = "/#/authentication"
                        }
                        )),
                        !1;
                    case 0:
                        return n.Z.alert({
                            message: a.a.t("app.auth.authenticating"),
                            confirmButtonText: a.a.t("app.auth.waitauthentication")
                        }),
                        !1;
                    case 1:
                        return n.Z.alert({
                            message: a.a.t("app.auth.authenticatefail"),
                            confirmButtonText: a.a.t("app.auth.reauthentication")
                        }).then((()=>{
                            location.href = "/#/authentication"
                        }
                        )),
                        !1;
                    default:
                        return !0
                    }
                } catch (E) {
                    console.log(E)
                }
            }
              , r = ()=>{
                try {
                    const e = JSON.parse(i.Z.local.get("user"));
                    return null !== e || (location.href = "/#/login",
                    !1)
                } catch (e) {
                    return console.log(e),
                    !1
                }
            }
        },
        6927: function(e, E, t) {
            t.d(E, {
                PR: function() {
                    return n
                },
                Wm: function() {
                    return a
                },
                qb: function() {
                    return i
                }
            });
            const a = function(e) {
                const E = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                let t = "";
                for (var a = 0; a < e; a++) {
                    const e = Math.floor(62 * Math.random());
                    t += E[e]
                }
                return t
            }
              , i = e=>{
                const E = document.createElement("input");
                E.setAttribute("value", e),
                document.body.appendChild(E),
                E.select(),
                document.execCommand("copy"),
                document.body.removeChild(E)
            }
              , n = ()=>{
                const e = localStorage.getItem("user");
                return e ? JSON.parse(e).userinfo : {}
            }
        },
        6041: function(e, E, t) {
            t.d(E, {
                HB: function() {
                    return n
                },
                SP: function() {
                    return o
                },
                jC: function() {
                    return i
                },
                rO: function() {
                    return r
                }
            });
            var a = t(4302);
            function i(e) {
                let E = "";
                for (const i of Object.keys(e)) {
                    const n = e[i];
                    var t = encodeURIComponent(i) + "=";
                    if (null !== n && "" !== n && "undefined" !== typeof n)
                        if ("object" === typeof n) {
                            for (const e of Object.keys(n))
                                if (null !== n[e] && "" !== n[e] && "undefined" !== typeof n[e]) {
                                    const t = i + "[" + e + "]";
                                    var a = encodeURIComponent(t) + "=";
                                    E += a + encodeURIComponent(n[e]) + "&"
                                }
                        } else
                            E += t + encodeURIComponent(n) + "&"
                }
                return E
            }
            const n = function() {
                const e = navigator.language ? navigator.language : navigator.browserLanguage;
                let E = "";
                return E = "cn" === e.toLowerCase() || "zh" === e.toLowerCase() || "zh-cn" === e.toLowerCase() ? "cn" : "us",
                E
            }
              , o = e=>{
                const E = e.data
                  , {msg: t} = E;
                "" !== t && t.indexOf("app.msg") > -1 && (E.msg = a.a.t(t));
                const {url: i} = e.config
                  , n = ["/api/assets/financ"];
                if (n.some((e=>i.indexOf(e) > -1)) && E.data?.list?.forEach((e=>{
                    const {type: E} = e;
                    E && E.indexOf("app.data") > -1 && (e.type = a.a.t(E))
                }
                )),
                i.indexOf("/api/recharge/list") > -1 && E.data instanceof Array && E.data.forEach((e=>{
                    const {status_name: E} = e;
                    E && E.indexOf("app.data") > -1 && (e.status_name = a.a.t(E))
                }
                )),
                i.indexOf("/api/contract/info") > -1) {
                    const {directionname: e, statusname: t} = E.data || {};
                    e && e.indexOf("app.data") > -1 && (E.data.directionname = a.a.t(e)),
                    t && t.indexOf("app.data") > -1 && (E.data.statusname = a.a.t(t))
                }
                if (i.indexOf("/api/contract/list") > -1 && E.data?.list?.forEach((e=>{
                    const {directionname: E, statusname: t} = e;
                    E && E.indexOf("app.data") > -1 && (e.directionname = a.a.t(E)),
                    t && t.indexOf("app.data") > -1 && (e.statusname = a.a.t(t))
                }
                )),
                i.indexOf("/api/index/notice") > -1 && E.data?.list?.forEach((e=>{
                    const {title: E, message: t} = e;
                    E && E.indexOf("app.data") > -1 && (e.title = a.a.t(E)),
                    t && E.indexOf("app.data") > -1 && (e.message = a.a.t(t))
                }
                )),
                i.indexOf("/api/cointransaction/orderbuy") > -1) {
                    const {code: e, data: t} = E;
                    2001 === e && (E.msg = a.a.t(t?.message) + t?.value)
                }
                if (i.indexOf("/api/cointransaction/ordersell") > -1) {
                    const {code: e, data: t} = E;
                    2002 === e && (E.msg = a.a.t(t?.message) + t?.value)
                }
                if (i.indexOf("/api/withdraw/order") > -1) {
                    const {code: e, data: t} = E;
                    2003 === e && (E.msg = a.a.t(t?.message) + t?.value)
                }
            }
            ;
            function r(e) {
                const E = new Date(1e3 * e);
                return E.toLocaleString()
            }
        },
        6582: function(e, E, t) {
            var a = t(5574)
              , i = t(6927)
              , n = t(6041)
              , o = t(9868)
              , r = t.n(o)
              , s = t(3049);
            const A = r().create({
                baseURL: "/api",
                timeout: 3e4,
                headers: {
                    "Cache-Control": "no-cache"
                }
            });
            A.interceptors.request.use((e=>{
                const E = !1 === (e.headers || {}).repeatSubmit
                  , t = (0,
                i.PR)();
                if (t && t.token && (e.headers["token"] = t.token),
                e.headers["Lang"] = a.Z.local.get("lang") || (0,
                n.HB)(),
                "get" === e.method && e.params) {
                    let E = e.url + "?" + (0,
                    n.jC)(e.params);
                    E = E.slice(0, -1),
                    e.params = {},
                    e.url = E
                }
                if (!E && ("post" === e.method || "put" === e.method)) {
                    const E = {
                        url: e.url,
                        data: "object" === typeof e.data ? JSON.stringify(e.data) : e.data,
                        time: (new Date).getTime()
                    }
                      , t = a.Z.session.getJSON("sessionObj");
                    if (void 0 === t || null === t || "" === t)
                        a.Z.session.setJSON("sessionObj", E);
                    else {
                        const e = t.url
                          , i = t.data
                          , n = t.time
                          , o = 1e3;
                        if (i === E.data && E.time - n < o && e === E.url) {
                            const E = "数据正在处理，请勿重复提交";
                            return console.warn(`[${e}]: ` + E),
                            Promise.reject(new Error(E))
                        }
                        a.Z.session.setJSON("sessionObj", E)
                    }
                }
                return e
            }
            ), (e=>(console.log(e),
            Promise.reject(e)))),
            A.interceptors.response.use((e=>{
                (0,
                n.SP)(e);
                const E = e.data;
                if (1 !== E.code) {
                    if (401 !== E.code)
                        return Promise.reject(E);
                    s.Z.alert({
                        message: E.msg || "会话过期，请重新登录"
                    }).then((()=>{
                        a.Z.local.remove("user"),
                        location.href = "/#/home"
                    }
                    ))
                }
                return E
            }
            ), (e=>Promise.reject(e?.response?.data))),
            E.Z = A
        },
        3361: function(e, E, t) {
            e.exports = t.p + "img/assets-active.bd5d1af4.svg"
        },
        4886: function(e, E, t) {
            e.exports = t.p + "img/assets-inactive.b7db3a89.svg"
        },
        7879: function(e, E, t) {
            e.exports = t.p + "img/contract-active.867e0bca.svg"
        },
        4262: function(e, E, t) {
            e.exports = t.p + "img/contract-inactive.867e0bca.svg"
        },
        7485: function(e, E, t) {
            e.exports = t.p + "img/home-active.dd3eca5c.svg"
        },
        5904: function(e, E, t) {
            e.exports = t.p + "img/home-inactive.c36a9bae.svg"
        },
        1453: function(e, E, t) {
            e.exports = t.p + "img/market-active.4ab387f3.svg"
        },
        6702: function(e, E, t) {
            e.exports = t.p + "img/market-inactive.7321bbc9.svg"
        },
        4375: function(e, E, t) {
            e.exports = t.p + "img/trade-active.e9a1f2f3.svg"
        },
        3014: function(e, E, t) {
            e.exports = t.p + "img/trade-inactive.1be86d6f.svg"
        }
    }
      , E = {};
    function t(a) {
        var i = E[a];
        if (void 0 !== i)
            return i.exports;
        var n = E[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, t),
        n.loaded = !0,
        n.exports
    }
    t.m = e,
    function() {
        var e = [];
        t.O = function(E, a, i, n) {
            if (!a) {
                var o = 1 / 0;
                for (R = 0; R < e.length; R++) {
                    a = e[R][0],
                    i = e[R][1],
                    n = e[R][2];
                    for (var r = !0, s = 0; s < a.length; s++)
                        (!1 & n || o >= n) && Object.keys(t.O).every((function(e) {
                            return t.O[e](a[s])
                        }
                        )) ? a.splice(s--, 1) : (r = !1,
                        n < o && (o = n));
                    if (r) {
                        e.splice(R--, 1);
                        var A = i();
                        void 0 !== A && (E = A)
                    }
                }
                return E
            }
            n = n || 0;
            for (var R = e.length; R > 0 && e[R - 1][2] > n; R--)
                e[R] = e[R - 1];
            e[R] = [a, i, n]
        }
    }(),
    function() {
        t.n = function(e) {
            var E = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(E, {
                a: E
            }),
            E
        }
    }(),
    function() {
        t.d = function(e, E) {
            for (var a in E)
                t.o(E, a) && !t.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: E[a]
                })
        }
    }(),
    function() {
        t.f = {},
        t.e = function(e) {
            return Promise.all(Object.keys(t.f).reduce((function(E, a) {
                return t.f[a](e, E),
                E
            }
            ), []))
        }
    }(),
    function() {
        t.u = function(e) {
            return "js/" + e + "." + {
                1: "1c23be53",
                28: "bb8ba775",
                51: "7d307992",
                59: "33b7b35e",
                79: "0d5de4bd",
                100: "9db34600",
                105: "9109abeb",
                108: "0a8f5dde",
                113: "805c3baf",
                130: "936f389d",
                133: "36d5dad5",
                198: "d70bc534",
                205: "e743349d",
                210: "4fabc0ea",
                212: "945a154c",
                258: "8e9bf5a7",
                306: "e009760a",
                331: "36858576",
                357: "a5f049c4",
                365: "58ae6cdd",
                366: "9d6f0eb7",
                368: "ea01f626",
                394: "ebeeffcd",
                407: "28852a88",
                417: "f34a47dd",
                425: "470d28db",
                428: "793ef193",
                453: "4bbb63e6",
                470: "121891d8",
                488: "159baa82",
                523: "d30376f4",
                584: "955e4ae8",
                601: "bad81879",
                647: "90d4ffba",
                649: "79f2f7f1",
                688: "9fa9db17",
                698: "2ee8633d",
                718: "3ae9bc5d",
                746: "01776665",
                759: "4523485d",
                764: "4eed9224",
                776: "6e7fcad9",
                816: "667ff770",
                823: "9367c323",
                839: "b53a0811",
                884: "4e0cf5d6"
            }[e] + ".js"
        }
    }(),
    function() {
        t.miniCssF = function(e) {
            return "css/" + e + "." + {
                1: "3d333017",
                28: "a74f4b95",
                51: "d4b8c2b1",
                59: "31e4d662",
                79: "821d551c",
                100: "64e54a4e",
                108: "8744c6bc",
                130: "3e67f000",
                133: "31b3c8ff",
                198: "e9f20741",
                205: "cc1d105e",
                258: "fc4ad627",
                306: "80b006f3",
                331: "2c2f8e08",
                357: "15b68823",
                365: "ad40beca",
                366: "09c146e5",
                368: "cc77f4ce",
                394: "06386565",
                407: "697f5c9f",
                425: "34f093c5",
                428: "0c02c5dd",
                453: "2cb649db",
                470: "3c4f13d6",
                488: "dc40a134",
                523: "d04eb174",
                584: "d8cdab61",
                601: "e232aa71",
                647: "388605fe",
                649: "22f9f9c1",
                688: "86e10e71",
                698: "7c62c51e",
                718: "d12627f7",
                759: "5ae05c82",
                764: "05e43521",
                776: "0490d28a",
                816: "59aac15d",
                823: "864746f5",
                839: "97115526",
                884: "208ab984"
            }[e] + ".css"
        }
    }(),
    function() {
        t.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        t.o = function(e, E) {
            return Object.prototype.hasOwnProperty.call(e, E)
        }
    }(),
    function() {
        var e = {}
          , E = "plex:";
        t.l = function(a, i, n, o) {
            if (e[a])
                e[a].push(i);
            else {
                var r, s;
                if (void 0 !== n)
                    for (var A = document.getElementsByTagName("script"), R = 0; R < A.length; R++) {
                        var c = A[R];
                        if (c.getAttribute("src") == a || c.getAttribute("data-webpack") == E + n) {
                            r = c;
                            break
                        }
                    }
                r || (s = !0,
                r = document.createElement("script"),
                r.charset = "utf-8",
                r.timeout = 120,
                t.nc && r.setAttribute("nonce", t.nc),
                r.setAttribute("data-webpack", E + n),
                r.src = a),
                e[a] = [i];
                var T = function(E, t) {
                    r.onerror = r.onload = null,
                    clearTimeout(I);
                    var i = e[a];
                    if (delete e[a],
                    r.parentNode && r.parentNode.removeChild(r),
                    i && i.forEach((function(e) {
                        return e(t)
                    }
                    )),
                    E)
                        return E(t)
                }
                  , I = setTimeout(T.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
                r.onerror = T.bind(null, r.onerror),
                r.onload = T.bind(null, r.onload),
                s && document.head.appendChild(r)
            }
        }
    }(),
    function() {
        t.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        t.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        t.p = "/"
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, E, t, a, i) {
                var n = document.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css";
                var o = function(t) {
                    if (n.onerror = n.onload = null,
                    "load" === t.type)
                        a();
                    else {
                        var o = t && ("load" === t.type ? "missing" : t.type)
                          , r = t && t.target && t.target.href || E
                          , s = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                        s.type = o,
                        s.request = r,
                        n.parentNode && n.parentNode.removeChild(n),
                        i(s)
                    }
                };
                return n.onerror = n.onload = o,
                n.href = E,
                t ? t.parentNode.insertBefore(n, t.nextSibling) : document.head.appendChild(n),
                n
            }
              , E = function(e, E) {
                for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                    var i = t[a]
                      , n = i.getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (n === e || n === E))
                        return i
                }
                var o = document.getElementsByTagName("style");
                for (a = 0; a < o.length; a++) {
                    i = o[a],
                    n = i.getAttribute("data-href");
                    if (n === e || n === E)
                        return i
                }
            }
              , a = function(a) {
                return new Promise((function(i, n) {
                    var o = t.miniCssF(a)
                      , r = t.p + o;
                    if (E(o, r))
                        return i();
                    e(a, r, null, i, n)
                }
                ))
            }
              , i = {
                143: 0
            };
            t.f.miniCss = function(e, E) {
                var t = {
                    1: 1,
                    28: 1,
                    51: 1,
                    59: 1,
                    79: 1,
                    100: 1,
                    108: 1,
                    130: 1,
                    133: 1,
                    198: 1,
                    205: 1,
                    258: 1,
                    306: 1,
                    331: 1,
                    357: 1,
                    365: 1,
                    366: 1,
                    368: 1,
                    394: 1,
                    407: 1,
                    425: 1,
                    428: 1,
                    453: 1,
                    470: 1,
                    488: 1,
                    523: 1,
                    584: 1,
                    601: 1,
                    647: 1,
                    649: 1,
                    688: 1,
                    698: 1,
                    718: 1,
                    759: 1,
                    764: 1,
                    776: 1,
                    816: 1,
                    823: 1,
                    839: 1,
                    884: 1
                };
                i[e] ? E.push(i[e]) : 0 !== i[e] && t[e] && E.push(i[e] = a(e).then((function() {
                    i[e] = 0
                }
                ), (function(E) {
                    throw delete i[e],
                    E
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            143: 0
        };
        t.f.j = function(E, a) {
            var i = t.o(e, E) ? e[E] : void 0;
            if (0 !== i)
                if (i)
                    a.push(i[2]);
                else {
                    var n = new Promise((function(t, a) {
                        i = e[E] = [t, a]
                    }
                    ));
                    a.push(i[2] = n);
                    var o = t.p + t.u(E)
                      , r = new Error
                      , s = function(a) {
                        if (t.o(e, E) && (i = e[E],
                        0 !== i && (e[E] = void 0),
                        i)) {
                            var n = a && ("load" === a.type ? "missing" : a.type)
                              , o = a && a.target && a.target.src;
                            r.message = "Loading chunk " + E + " failed.\n(" + n + ": " + o + ")",
                            r.name = "ChunkLoadError",
                            r.type = n,
                            r.request = o,
                            i[1](r)
                        }
                    };
                    t.l(o, s, "chunk-" + E, E)
                }
        }
        ,
        t.O.j = function(E) {
            return 0 === e[E]
        }
        ;
        var E = function(E, a) {
            var i, n, o = a[0], r = a[1], s = a[2], A = 0;
            if (o.some((function(E) {
                return 0 !== e[E]
            }
            ))) {
                for (i in r)
                    t.o(r, i) && (t.m[i] = r[i]);
                if (s)
                    var R = s(t)
            }
            for (E && E(a); A < o.length; A++)
                n = o[A],
                t.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return t.O(R)
        }
          , a = self["webpackChunkplex"] = self["webpackChunkplex"] || [];
        a.forEach(E.bind(null, 0)),
        a.push = E.bind(null, a.push.bind(a))
    }();
    var a = t.O(void 0, [998], (function() {
        return t(4938)
    }
    ));
    a = t.O(a)
}
)();