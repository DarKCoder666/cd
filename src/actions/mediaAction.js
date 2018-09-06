import { MEDIA_LOADED, MEDIA_LOADING } from './types';

export const loadMedia = (route) => (dispatch, getState) => {
    const { media } = getState();

    // Активируем прелоадер
    // dispatch({
    //     type: MEDIA_LOADING,
    //     payload: route
    // });

    // Если существуют медиа для данного роута, то грузим его медиа
    if (media[route]) {
        loadMediaByObj(media[route])
            .then(() => {
                dispatch({
                    type: MEDIA_LOADED
                })
            });
    } else {
        // Иначе закрываем прелоадер
        dispatch({
            type: MEDIA_LOADED
        })
    }
}

// Загрузка медиа по объекту, в котором прописаны все данные медиа(сслыки).
// Возвращает промис, который срабатывает при полном прогружении всего медиа.
function loadMediaByObj(routeMedia) {
    return new Promise((resolve, reject) => {
        let ready_states = []; // Перемення будет содержать данные о прогруженных данных в булевом виде, если все значения являются true, то срабатывает resolve()

        loadAllMediaRecursion(routeMedia, ready_states, resolve);
    });
}

// Рекурсивная загрузка медиа
function loadAllMediaRecursion(obj, ready_states, resolve) {
    for (let id in obj) {
        const el = obj[id];

        // Если объект, то прогоняем его через данную функцию.
        if (typeof el === "object") {
            loadAllMediaRecursion(el, ready_states, resolve);
        }

        // Если ключ "imgSrc", то берём его значение(т.к. оно является ссылкой), и прогружаем данную картинку
        if (id === 'imgSrc') {
            // Даём знать, что картинка начала прогружаться, чтобы resolve() не сработал раньше времени
            ready_states.push(false);

            const img = new Image();
            img.onload = () => {
                // После прогрузки меняем одно из значений false на true, что,s дать понять, что данная картинка прогружена 
                ready_states.splice(ready_states.indexOf(false), 1, true);
                
                // Тут же проверяем, если все значения из ready_states являются true, то срабатывает resolve()
                if (ready_states.indexOf(false) === -1) {
                    resolve();
                }
            }

            img.src = obj[id];
        }
    }
}