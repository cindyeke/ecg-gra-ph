import Pastor1 from '../public/images/pastor2.jpg'
import Pastor2 from '../public/images/pastor1.jpg'
import Pastor3 from '../public/images/pastor3.jpg'
import Pastor4 from '../public/images/pastor4.jpg'

const SECTION = {
    home: 'home',
    about: 'about',
    service: 'service',
    pastors: 'pastors',
}

const SECTION_TITLE = {
    about: 'About Us',
    service: 'Service Times',
    pastors: 'Meet Our Pastors',
}

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
    }
]

export { SECTION, SECTION_TITLE, SERVICES, PASTORS }
