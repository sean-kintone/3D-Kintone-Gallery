import "core-js/stable";
import "regenerator-runtime/runtime";

kintone.events.on('app.record.detail.show', event => {
    alert('Hello, webpack');
    return event;
});