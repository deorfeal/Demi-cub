$('.exchange-column-list__item').on('click', function (event) {
    if (event.currentTarget.parentNode.parentNode.parentNode.id == 1) {
        console.log('smt')
        let listItems = $('.exchange-column-list__item')
        for (let item of listItems) {
            if (item.parentNode.parentNode.parentNode.id == 1) {
                $(item).removeClass('exchange-column-list__item--active')
            }
            if (item.id == event.currentTarget.id) {
                if (item.parentNode.parentNode.parentNode.id == 1) {
                    $(item).addClass('exchange-column-list__item--active');
                }

                // Убираем во второй колонке такую же валюту 
                let allListofItems = $('.exchange-column-list__item')

                for (let oneOfAll of allListofItems) {
                    if (oneOfAll.parentNode.parentNode.parentNode.id == 2) {
                        if (oneOfAll.id == event.currentTarget.id) {
                            // $(oneOfAll).addClass('exchange-column-list__item--disabled');
                        }
                    }
                }
            }
        }

        // // Проверка на картинку 
        // if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21 || event.currentTarget.id == 22 || event.currentTarget.id == 23) {
        //     let srcForElement = 'images/reserves-icon-'
        //     let srcForElementTwo = event.currentTarget.id
        //     let srcForElementThree = '.svg'
        //     let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

        //     // Кнопки где отдаете получаете ( их иконки )
        //     let ourCryptiButton = $('.exchange-column-top__info-crypti')
        //     for (let item of ourCryptiButton) {
        //         if (item.parentNode.parentNode.parentNode.id == 1) {
        //             $(item).attr('src', fullSrcForElement);
        //         }
        //     }
        //     // 

        //     // Кнопки где данные ( ввод данных )
        //     let dataIconFirst = $('.exchange-data-box-item__row-img--first')
        //     $(dataIconFirst).attr('src', fullSrcForElement);
        //     // 

        //     // 
        // } else {
        //     let srcForElement = 'images/reserves-icon-'
        //     let srcForElementTwo = event.currentTarget.id
        //     let srcForElementThree = '.png'
        //     let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

        //     // Кнопки где отдаете получаете ( их иконки )
        //     let ourCryptiButton = $('.exchange-column-top__info-crypti')
        //     for (let item of ourCryptiButton) {
        //         if (item.parentNode.parentNode.parentNode.id == 1) {
        //             $(item).attr('src', fullSrcForElement);
        //         }
        //     }
        //     // 

        //     // Кнопки где данные ( ввод данных )
        //     let dataIconFirst = $('.exchange-data-box-item__row-img--first')
        //     $(dataIconFirst).attr('src', fullSrcForElement);
        //     // 
        // }
        // 

        // // Добавляем текст в поле ввода данных ( где показывает что отдаем и что получаем )
        // let listOfOurSpans = $('.main-reserves-list__box-text--ourspannn')
        // for (let itemOfSpans of listOfOurSpans) {
        //     if (itemOfSpans.id == event.currentTarget.id) {
        //         let ourTextofSpan = $(itemOfSpans).text()
        //         $('.exchange-data-box-item__row-text--first').text(ourTextofSpan)
        //     }
        // }
        // // 


        // // Добавляем маленькую приставку текста что это за монета в поле вводе данных
        // let valueOfFirstInput = $('.exchange-column-top__info-text--first')[0].value

        // let ourItemsAct = $('.exchange-column-list__item--active')

        // for (let actItem of ourItemsAct) {
        //     if (actItem.parentNode.parentNode.parentNode.id == 1) {
        //         let ourSmallTex = $('.main-reserves-list__price-digit-text')
        //         for (let itemSmallTex of ourSmallTex) {
        //             if (actItem.id == itemSmallTex.id) {
        //                 let ourSmallTexTex = $(itemSmallTex).text()
        //                 $('.exchange-data-box-item__info-text--first').text(valueOfFirstInput + '  ' + ourSmallTexTex)
        //             }
        //         }
        //     }
        // }
        // // 

        // // Меняем поля мин макс ( отдаете )
        // let ourSpanMin = $('.main-reserves-list__item-span--min')
        // for (let ourSpanMinItem of ourSpanMin) {
        //     if (event.currentTarget.id == ourSpanMinItem.id) {
        //         let ourResOfSpanMin = $(ourSpanMinItem).text()
        //         $('.exchange-column-top-row-box__wrapper-min').text(ourResOfSpanMin)
        //     }
        // }

        // let ourSpanMax = $('.main-reserves-list__item-span--max')
        // for (let ourSpanMaxItem of ourSpanMax) {
        //     if (event.currentTarget.id == ourSpanMaxItem.id) {
        //         let ourResOfSpanMax = $(ourSpanMaxItem).text()
        //         $('.exchange-column-top-row-box__wrapper-max').text(ourResOfSpanMax)
        //     }
        // }
        // // 
    }
});

$('.exchange-column-list__item').on('click', function (event) {
    if (event.currentTarget.parentNode.parentNode.parentNode.id == 2) {
        let listItems = $('.exchange-column-list__item')
        for (let item of listItems) {
            if (item.parentNode.parentNode.parentNode.id == 2) {
                $(item).removeClass('exchange-column-list__item--active')
            }
            if (item.id == event.currentTarget.id) {
                if (item.parentNode.parentNode.parentNode.id == 2) {
                    $(item).addClass('exchange-column-list__item--active');
                }
            }

            // Убираем в первой колонке такую же валюту 
            let allListofItems = $('.exchange-column-list__item')
            // $('.exchange-column-list__item--disabled').removeClass('exchange-column-list__item--disabled')

            for (let oneOfAll of allListofItems) {
                if (oneOfAll.parentNode.parentNode.parentNode.id == 1) {
                    if (oneOfAll.id == event.currentTarget.id) {
                        // $(oneOfAll).addClass('exchange-column-list__item--disabled');
                    }
                }
            }
        }

        // Поле с заполнением формы ( добавляем в поле нужную валюту )
        // let someListOfOurSpans = $('.main-reserves-list__box-text--ourspannn')
        // for (let itemOfSpans of someListOfOurSpans) {
        //     if (itemOfSpans.id == event.currentTarget.id) {
        //         let ourTextofSpan = $(itemOfSpans).text()
        //         $('.exchange-data-form__box-input--first').attr('placeholder', ourTextofSpan + ' адрес')
        //     }
        // }
        // // 

        // // Делаем количество резерва 
        // let allOurReserves = $('.main-reserves-list__price-digit')
        // for (let item of allOurReserves) {
        //     if (item.id == event.currentTarget.id) {
        //         let ourText = $(item).text()
        //         // Добавляем маленькую приставку текста что это за монета по коду
        //         let ourListOfDifWords = $('.main-reserves-list__price-digit-text')
        //         for (let ourShortWord of ourListOfDifWords) {
        //             if (ourShortWord.id == event.currentTarget.id) {
        //                 let ourLasText = $(ourShortWord).text()
        //                 // $('.exchange-column-top-row-box__wrapper-text--digits').text(ourLasText)
        //                 $('.exchange-column-top-row-box__wrapper-text--digits').text(ourText + ' ' + ourLasText)
        //             }
        //         }
        //         // 
        //     }
        // }
        // // 

        // if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21) {
        //     let srcForElement = 'images/reserves-icon-'
        //     let srcForElementTwo = event.currentTarget.id
        //     let srcForElementThree = '.svg'
        //     let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

        //     // Кнопки где отдаете получаете ( их иконки )
        //     let ourCryptiButton = $('.exchange-column-top__info-crypti')
        //     for (let item of ourCryptiButton) {
        //         if (item.parentNode.parentNode.parentNode.id == 2) {
        //             $(item).attr('src', fullSrcForElement);
        //         }
        //     }
        //     // 

        //     // Кнопки где данные ( ввод данных )
        //     let dataIconSecond = $('.exchange-data-box-item__row-img--second')
        //     $(dataIconSecond).attr('src', fullSrcForElement);
        //     // 

        //     // Там где вводить емайл иконка
        //     let emailIcon = $('.exchange-data-form__box-img')
        //     $(emailIcon).attr('src', fullSrcForElement);
        //     // 
        // } else if (event.currentTarget.id == 22 || event.currentTarget.id == 23) {
        //     let srcForElement = 'images/reserves-icon-'
        //     let srcForElementThree = '.svg'
        //     let fullSrcForElement = srcForElement + '21' + srcForElementThree

        //     // Кнопки где отдаете получаете ( их иконки )
        //     let ourCryptiButton = $('.exchange-column-top__info-crypti')
        //     for (let item of ourCryptiButton) {
        //         if (item.parentNode.parentNode.parentNode.id == 2) {
        //             $(item).attr('src', fullSrcForElement);
        //         }
        //     }
        //     // 

        //     // Кнопки где данные ( ввод данных )
        //     let dataIconSecond = $('.exchange-data-box-item__row-img--second')
        //     $(dataIconSecond).attr('src', fullSrcForElement);
        //     // 

        //     // Там где вводить емайл иконка
        //     let emailIcon = $('.exchange-data-form__box-img')
        //     $(emailIcon).attr('src', fullSrcForElement);
        //     // 
        // } else {
        //     let srcForElement = 'images/reserves-icon-'
        //     let srcForElementTwo = event.currentTarget.id
        //     let srcForElementThree = '.png'
        //     let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

        //     // Кнопки где отдаете получаете ( их иконки )
        //     let ourCryptiButton = $('.exchange-column-top__info-crypti')
        //     for (let item of ourCryptiButton) {
        //         if (item.parentNode.parentNode.parentNode.id == 2) {
        //             $(item).attr('src', fullSrcForElement);
        //         }
        //     }
        //     // 

        //     // Кнопки где данные ( ввод данных )
        //     let dataIconSecond = $('.exchange-data-box-item__row-img--second')
        //     $(dataIconSecond).attr('src', fullSrcForElement);
        //     // 

        //     // Там где вводить емайл иконка
        //     let emailIcon = $('.exchange-data-form__box-img')
        //     $(emailIcon).attr('src', fullSrcForElement);
        //     // 
        // }

        // // Добавляем текст в поле ввода данных ( где показывает что отдаем и что получаем )
        // let listOfOurSpans = $('.main-reserves-list__box-text--ourspannn')
        // for (let itemOfSpans of listOfOurSpans) {
        //     if (itemOfSpans.id == event.currentTarget.id) {
        //         let ourTextofSpan = $(itemOfSpans).text()
        //         $('.exchange-data-box-item__row-text--second').text(ourTextofSpan)
        //     }
        // }
        // // 

        // // Добавляем маленькую приставку текста что это за монета в поле вводе данных
        // let ourFirstShortWord = $('.exchange-data-box-item__info-text--spsecond')
        // let ourListOfShortWords = $('.main-reserves-list__price-digit-text')
        // for (let shortWord of ourListOfShortWords) {
        //     if (shortWord.id == event.currentTarget.id) {
        //         let ourLasText = $(shortWord).text()
        //         $(ourFirstShortWord).text(ourLasText)
        //     }
        // }
        // 

    }

    // Делаем так что бы наши элементы не повторялись в блоках - что бы активные не повторялись в других 

    let listItems = $('.exchange-column-list__item')

    let firstActItm = []
    let secondActItm = []

    let ourFirstOfItmId = undefined
    let ourSecondOfItmId = undefined

    for (let item of listItems) {

        firstActItm.push(getIdesFirst())
        secondActItm.push(getIdesSecond())

        function getIdesFirst() {
            if (item.parentNode.parentNode.parentNode.id == 1) {
                if (item.classList.contains('exchange-column-list__item--active')) {
                    return item.id
                }
            }
        }

        function getIdesSecond() {
            if (item.parentNode.parentNode.parentNode.id == 2) {
                if (item.classList.contains('exchange-column-list__item--active')) {
                    return item.id
                }
            }
        }

        ourFirstOfItmId = getIdesFirstFromArr()
        ourSecondOfItmId = getIdesSecondFromArr()

        function getIdesFirstFromArr() {
            for (let itemOfFirstArr of firstActItm) {
                if (typeof (itemOfFirstArr) == typeof ('')) {
                    return itemOfFirstArr
                }
            }
        }

        function getIdesSecondFromArr() {
            for (let itemOfSecondArr of secondActItm) {
                if (typeof (itemOfSecondArr) == typeof ('')) {
                    return itemOfSecondArr
                }
            }
        }

    }
    for (let item of listItems) {
        // item - активный элемент с одной колонки и второй 
        if (item.parentNode.parentNode.parentNode.id == 1) {
            if (item.id == ourSecondOfItmId) {
                $(item).addClass('exchange-column-list__item--disabled')
            } else {
                $(item).removeClass('exchange-column-list__item--disabled')
            }
        }

        if (item.parentNode.parentNode.parentNode.id == 2) {
            if (item.id == ourFirstOfItmId) {
                $(item).addClass('exchange-column-list__item--disabled')
            } else {
                $(item).removeClass('exchange-column-list__item--disabled')
            }
        }
    }

    // 
});

$('.exchange-column-choose-top').on('click', function (event) {
    if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--first')) {
        if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--first--active')) {
            $('.exchange-column--first').removeClass('exchange-column--first--active')
        } else {
            $('.exchange-column--first').addClass('exchange-column--first--active')
        }
    }

    if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--second')) {
        if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--second--active')) {
            $('.exchange-column--second').removeClass('exchange-column--second--active')
        } else {
            $('.exchange-column--second').addClass('exchange-column--second--active')
        }
    }
});

$('.header-lang').on('click', function (event) {
    if ( this.classList.contains('header-lang--active') ) {
        $('.header-lang').removeClass('header-lang--active')
    } else {
        $('.header-lang').addClass('header-lang--active')
    }
});

$('.header__burger').on('click', function (event) {
    $('.body').toggleClass('body--menu')
});

