const User = ({phone, picture: {large}, name: {first, last}, email}) => (
    `<div class="user">
        <div class="phone">
            <div class="material-icons icon-margin">people</div>
            ${phone}
        </div>
        <img src="${large}"></img>
        <div class="custom-margin">
            <div class="title">${first} ${last}</div>
            <div class="subtitle">${email}</div>
        </div>
    </div>`
)

export default User