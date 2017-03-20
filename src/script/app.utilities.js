let Utilities = window.Utilities || (window.Utilities = {});

let Utilities = {
    templateRender: (tmpName, clearCache = true) => {
        let tail = clearCache ? `?time=${new Date().getTime()}` : "";
        return `public/templates/${tmpName}${tail}`;
    }
}