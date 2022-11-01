import Pastor1 from '../public/images/pastor2.jpg'
import Pastor2 from '../public/images/pastor1.jpg'
import Pastor3 from '../public/images/pastor3.jpg'
import Pastor4 from '../public/images/pastor4.jpg'

const SECTION = {
    home: 'home',
    about: 'about',
    service: 'service',
    pastors: 'pastors',
    contact: 'contact',
}

const SECTION_TITLE = {
    about: 'about us',
    service: 'service times',
    pastors: 'meet our pastors',
    contact: 'reach out',
}

const BUTTON_LINKS = [
    {
        id: 1,
        label: SECTION_TITLE.about,
        link: SECTION.about,
    },
    {
        id: 2,
        label: SECTION_TITLE.service,
        link: SECTION.service,
    },
    {
        id: 3,
        label: SECTION_TITLE.pastors,
        link: SECTION.pastors,
    },
    {
        id: 4,
        label: SECTION_TITLE.contact,
        link: SECTION.contact,
    },
]

const SERVICES = [
    {
        id: 1,
        name: 'Diplomatic Service',
        dayAndTime: 'Mondays, 8pm',
    },
    {
        id: 2,
        name: 'Sunday Service',
        dayAndTime: 'Sundays, 9am',
    },
    {
        id: 3,
        name: 'Youth Magnet',
        dayAndTime: 'Tuesdays, 5:30pm',
    },
    {
        id: 4,
        name: 'MidWeek Service',
        dayAndTime: 'Thursdays, 5:30pm',
    },
]

const PASTORS = [
    {
        id: 1,
        name: 'Pst. Emmanuel Olowo',
        imgSrc: Pastor1,
    },
    {
        id: 2,
        name: 'Pst. Michael Sadiq',
        imgSrc: Pastor2,
    },
    {
        id: 3,
        name: 'Pst. Michael Sadiq',
        imgSrc: Pastor3,
    },
    {
        id: 4,
        name: 'Pst. Emmanuel Olowo',
        imgSrc: Pastor4,
    },
]

const FACEBOOK_GROUP_LINK = 'https://www.facebook.com/groups/431474645197438'

export {
    SECTION,
    SECTION_TITLE,
    SERVICES,
    PASTORS,
    FACEBOOK_GROUP_LINK,
    BUTTON_LINKS,
}
