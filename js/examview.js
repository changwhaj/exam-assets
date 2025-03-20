    /* Hide & Show answers */
    $('body').on('click', '.btn.reveal-solution', function (e) {
        e.preventDefault();
        // if (passwd != PASSKEY) return;
        // console.log(passwd);
        if (typeof PASSKEY !== "undefined" && passwd !== undefined && passwd != PASSKEY) return;

        $(this).parent('.question-body').find('.question-answer').fadeIn(100);
        $(this).parent('.question-body').find('.hide-solution').removeClass('d-none');
        $(this).parent('.question-body').find('.correct-hidden').addClass('correct-choice');
        $(this).addClass('d-none');
    });

    $('body').on('click', '.btn.hide-solution', function (e) {
        e.preventDefault();
        // console.log(passwd);
        if (typeof PASSKEY !== "undefined" && passwd !== undefined && passwd != PASSKEY) return;

        $(this).parent('.question-body').find('.question-answer').fadeOut(100);
        $(this).parent('.question-body').find('.reveal-solution').removeClass('d-none');
        $(this).parent('.question-body').find('.correct-hidden').removeClass('correct-choice');
        $(this).addClass('d-none');
    });

    function is_question_mcq(question_jquery_object){
        return question_jquery_object.find(".multi-choice-letter").length > 0;
    }

    function set_voting_configuration_by_question(question_jquery_object) {
        // Voted comments are only for MCQ questions, this function has nothing to do on other questions
        if (!is_question_mcq(question_jquery_object))
            return;

        let choice_limit = question_jquery_object.find(".correct-answer").text().trim().length;
        let choices_elements = question_jquery_object.find(".multi-choice-letter");

        let choice_letters = "";
        choices_elements.each(function() {
            choice_letters += $(this).text().trim()[0];
        });

        let question_id = question_jquery_object.find(".question-body").addBack('.question-body').data("id");
        // let discussion_object = getDiscussionObjectByQuestionId(question_id);

        // set_voted_comment_config(discussion_object, choice_letters, choice_limit);
    }

    /* Hide & Show comment */
    $('body').on('click', '.badge.reveal-comment', function (e) {
        e.preventDefault();
        $(this).parent('.comments-wrapper').find('.discussion-page-comments-section').fadeIn(100);
        $(this).parent('.comments-wrapper-en').find('.discussion-page-comments-section-en').fadeIn(100);
        $(this).parent('.comments-wrapper').find('.hide-comment').removeClass('d-none');
        $(this).parent('.comments-wrapper-en').find('.hide-comment').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('body').on('click', '.badge.hide-comment', function (e) {
        e.preventDefault();
        $(this).parent('.comments-wrapper').find('.discussion-page-comments-section').fadeOut(100);
        $(this).parent('.comments-wrapper-en').find('.discussion-page-comments-section-en').fadeOut(100);
        $(this).parent('.comments-wrapper').find('.reveal-comment').removeClass('d-none');
        $(this).parent('.comments-wrapper-en').find('.reveal-comment').removeClass('d-none');
        $(this).addClass('d-none');
    });

    /* English & Korean toggle */
    $('body').on('click', '.badge.show-english', function (e) {
        e.preventDefault();
        $(this).parent('.container').find('.discussion-list-header').fadeOut(0);
        $(this).parent('.container').find('.discussion-list-header-en').fadeIn(0);
        $(this).parent('.container').find('.discussion-header-container').fadeOut(0);
        $(this).parent('.container').find('.discussion-header-container-en').fadeIn(0);
        $(this).parent('.container').find('.comments-wrapper').fadeOut(0);
        $(this).parent('.container').find('.comments-wrapper-en').fadeIn(0);
        $(this).parent('.container').find('.show-korean').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('body').on('click', '.badge.show-korean', function (e) {
        e.preventDefault();
        $(this).parent('.container').find('.discussion-list-header-en').fadeOut(0);
        $(this).parent('.container').find('.discussion-list-header').fadeIn(0);
        $(this).parent('.container').find('.discussion-header-container-en').fadeOut(0);
        $(this).parent('.container').find('.discussion-header-container').fadeIn(0);
        $(this).parent('.container').find('.comments-wrapper-en').fadeOut(0);
        $(this).parent('.container').find('.comments-wrapper').fadeIn(0);
        $(this).parent('.container').find('.show-english').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('body').on('click', '.btn.show-english', function (e) {
        e.preventDefault();
        var container = $(this).parent('.action-row');
        container.find('.show-korean').removeClass('d-none');
        container = $(this).parent('.action-row').parent('.action-row-container').parent('.container')
        container.find('.discussion-list-header').fadeOut(0);
        container.find('.discussion-list-header-en').fadeIn(0);
        container.find('.discussion-header-container').fadeOut(0);
        container.find('.discussion-header-container-en').fadeIn(0);
        container.find('.comments-wrapper').fadeOut(0);
        container.find('.comments-wrapper-en').fadeIn(0);
        $(this).addClass('d-none');
    });

    $('body').on('click', '.btn.show-korean', function (e) {
        e.preventDefault();
        var container = $(this).parent('.action-row');
        container.find('.show-english').removeClass('d-none');
        container = $(this).parent('.action-row').parent('.action-row-container').parent('.container')
        container.find('.discussion-list-header-en').fadeOut(0);
        container.find('.discussion-list-header').fadeIn(0);
        container.find('.discussion-header-container-en').fadeOut(0);
        container.find('.discussion-header-container').fadeIn(0);
        container.find('.comments-wrapper-en').fadeOut(0);
        container.find('.comments-wrapper').fadeIn(0);
        $(this).addClass('d-none');
    });

    function getCookie(name) {
        return document.cookie
            .split('; ')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => {
                acc[key] = decodeURIComponent(value);
                return acc;
            }, {})[name];
        }
    
    function setCookie(name, value, options = {}) {
        options = {
            path: '/', // 기본적으로 사이트 전체에서 유효하도록 설정
            sameSite: 'Lax', // 보안 강화를 위해 기본 SameSite 설정 추가
            ...options
        };
    
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
    
        let cookieParts = [`${encodeURIComponent(name)}=${encodeURIComponent(value)}`];
    
        for (let [key, val] of Object.entries(options)) {
            cookieParts.push(val === true ? key : `${key}=${val}`);
        }
    
        document.cookie = cookieParts.join("; ");
    }
    var passwd = "";
    if (typeof PASSLABEL !== "undefined") {    
        passwd = getCookie(PASSLABEL);
        if (passwd == undefined) {
            passwd = prompt("Please enter password for use this page");
            if ((passwd || "").toUpperCase() === PASSKEY) {
                var expDate = new Date();
                expDate.setMonth(expDate.getMonth() + 1);
                expDate = expDate.toUTCString();
                setCookie(PASSLABEL, passwd, {secure: true, 'expires': expDate});
            }
        }
        // passwd = getCookie(PASSLABEL);
    }
    // console.log(passwd);
