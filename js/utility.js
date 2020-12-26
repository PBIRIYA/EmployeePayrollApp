const stringifyDate = (date) => {
<<<<<<< HEAD
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
 };
=======
    const options = { day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
} 
>>>>>>> UC9_OnSubmitForm
