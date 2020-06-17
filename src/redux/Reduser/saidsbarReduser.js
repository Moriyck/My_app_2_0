let initialState = {
    elementsLinks: [
        { id: 1, name: 'Profil', to: '/Profil', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Dialogs', to: '/Dialogs', activeClassName: 'classes.activelink' },
        { id: 3, name: 'News', to: '/News', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Music', to: '/Music', activeClassName: 'classes.activelink' }
    ],
    
    friendsLink: [
        { id: 4, name: 'Friends', to: '/Friends', activeClassName: 'classes.activelink' },
        { id: 1, name: 'Ruslan', to: '/Ruslan', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Dima', to: '/Dima', activeClassName: 'classes.activelink' },
        { id: 3, name: 'Sasha', to: '/Sasha', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Sveta', to: '/Sveta', activeClassName: 'classes.activelink' },
        { id: 5, name: 'Katya', to: '/Katya', activeClassName: 'classes.activelink' },
    ],

    settingsLinks: [
        { id: 3, name: 'Settings', to: '/Settings', activeClassName: 'classes.activelink' }
],
}

const saidebarReduser = (state = initialState) => {

    return state

}

export default saidebarReduser