import Category from '../models/Category';
import Books from '../models/BooksModel';

export const CATEGORIES = [

    new Category('c1', 'Fiction', '#ce412a',require('../assets/fiction.jpg')),
    new Category('c2', 'Non-Fiction ', '#002395',require('../assets/Classic.jpg')),
    new Category('c3', 'Crime ', '#3b0808',require('../assets/crime.jpg')),
    new Category('c4', 'Horror', '#3b0808',require('../assets/horror.jpg')),
    new Category('c5', 'Humour', '#002395',require('../assets/humour.jpg')),
    new Category('c6', 'Classics', '#3b0808',require('../assets/Classic.jpg')),
    new Category('c7', 'Mythology', '#d88383',require('../assets/mythology.jpg')),
    new Category('c8', 'Science Fiction', '#ce412a',require('../assets/scienceFiction.jpg')),
    new Category('c9', 'Biography', '#d88383',require('../assets/biography.jpg')),
    new Category('c10', 'Self Help', '#3b0808',require('../assets/selfHelp.jpg')),
    
];

export const BOOKS = [

    new Books('b1',['c1'],'Harry Potter and the Goblet of Fire','Fiction','J.K Rowling','458',require('../assets/HarryPotter.jpg'),
    "It starts with Dumbledore, Professor McGonagall and Rubeus Hagrid leaving a baby boy, with a tuft of jet-black hair and a \
    curiously shaped wound on his brow, on the doorstep of number four, Privet Drive. They might have thought that his aunt andå\
    uncle would look after him kindly. But ten years later, Harry Potter sleeps in a cupboard under the stairs, and the Dursleys\
    – Vernon, Petunia and their son Dudley – don’t exactly treat him like one of the family. Especially as it becomes clear quite\
    how different from them he is. As his eleventh birthday arrives, the time comes for Harry Potter to discover the truth about his\
    magical beginnings – and embark on the enthralling, unmissable adventure that will lead him to Hogwarts School of Witchcraft and \
    Wizardry, his true friends Ron Weasley and Hermione Granger, powerful secrets and a destiny he cannot avoid ..."),



    new Books('b2',['c1'],'The HungerGames','Fiction','Suzanne Collins','374',require('../assets/hungerGames.jpg'),
    "In what was once North America, the Capitol of Panem maintains its hold on its 12\
    districts by forcing them each to select a boy and a girl, called Tributes, to\
    compete in a nationally televised event called the Hunger Games. Every citizen\
    must watch as the youths fight to the death until only one remains. District 12\
    Tribute Katniss Everdeen (Jennifer Lawrence) has little to rely on, other than\
    her hunting skills and sharp instincts, in an arena where she must weigh survival\
    against love."),
    
    new Books('b3',['c1', 'c6'],'Pride and Prejudice','Classic','Jane Austen','279',require('../assets/prideandprejudice.jpg'),
    "Pride and Prejudice is set primarily in the county of Hertfordshire, about 50 miles outside of London.\
    The story centers on the the Bennet family, particularly Elizabeth."
    ),

 


    new Books('b13',['c1', 'c6'],'The Great Gatsby','Classic','Scott Fitzgerald','352',require('../assets/greatGatsby.jpg')),
    
    new Books('b4',['c1', 'c4'],'Frankenstein','Horror','Marry Shelley','454',require('../assets/Frankenstein.jpg')),
    new Books('b5',['c1', 'c4'],'The Bloody Chamber','Horror','Angela Carter','374',require('../assets/bloodyChamber.jpg')),
    
    new Books('b6',['c2', 'c8'],'A Brief History of Time','Non-Fiction','Stephen Hawking','274',require('../assets/briefhistoryoftime.jpg')),
    new Books('b7',['c2'],'In Cold Blood','Non-Fiction','Truman Capote','247',require('../assets/incoldblood.jpg')),
    
    new Books('b8',['c3','c4'],'Death on the Nile','Crime','Agasth Christie','476',require('../assets/deathonthenile.jpg'),
    "Beautiful twenty-year-old Linnet Ridgeway is one of the wealthiest women in England, the heir to a vast fortune.\
    She is in the final stages of renovating her newly-acquired estate, Wode Hall, when her best friend, the poor but\
    clever Jacqueline “Jackie” de Bellefort asks a favor: could Linnet hire Jackie’s fiancé, Simon Doyle, who is penniless\
    and recently out of a job? Linnet agrees to meet Simon and is immediately drawn to him. Soon the handsome, charming Simon\
    is not only her land agent but also her husband. Linnet and Simon depart for their honeymoon. Linnet is apparently one of\
    the luckiest women on earth: she’s young, healthy, fabulously wealthy, enchantingly beautiful, breathtakingly glamorous,\
    newly in love, and blissfully happy. But what seems like the beginning of a charmed life is actually the beginning of the end.\
    First, Jackie enacts a form of psychological revenge that leaves Linnet desperate and shaken: everywhere Linnet and Simon go on\
    their honeymoon, they find Jackie there, too. Tensions heighten as Simon and Linnet embark on a Nile cruise. Their fellow passengers\
    bring their own share of mysteries and intrigue on board the Karnak with them: there’s the quiet Mr. Fanthorp, whose claims to be on\
    holiday are unconvincing; the radical Mr. Ferguson, consumed by resentment toward the upper classes; Linnet’s uncle, Andrew Pennington,\
    who claims to have encountered her abroad by mere coincidence (but whose luggage tags suggest another story); Mrs. Otterbourne, a novelist\
    in decline, harboring an unnamed illness; and her daughter Rosalie, who seems to suffer some inner torture. There’s also the pleasant Mrs. Allerton,\
    whose son, Tim, is inexplicably wary of questions about his relationship with his cousin, Joanna; the cunning and mysterious maid, Louise, newly in\
    Linnet’s service; Richetti, the archaeologist desperate to keep the contents of his telegrams private; and the snobbish old Miss Van Schuyler, whose\
    constant demands terrorize her sweet niece, Cornelia, who seems to have something to hide. Luckily, the renowned detective, Hercule Poirot, is also on board.\
    Linnet expresses growing unease, claiming to feel the hatred of all those around her. One day, on a sightseeing trip ashore, a boulder comes hurtling toward Linnet.\
    This is the first attempt on her life (or is it just an accident?).One night, after a particularly stifling day, tensions come to a head. Jackie has too much to\
    drink in the saloon and seems bent on provoking Simon, and telling the world how he has wronged her. She loses her temper, draws her pistol, and shoots.\
    In the flurry of activity that follows, Simon, who has not been mortally wounded, gets care, while a morbidly-repentant Jackie, seemingly bent on suicide,\
    has her pistol goes missing.The next morning, Poirot and his friend, Colonel Race, awaken to a second jolt of grim news: during the night, Linnet was shot dead,\
    the killer’s modus operandi identical in every respect to the murderous fantasy Jackie once confessed to Poirot. Jackie is the only person on the Karnak with a\
    pearl-handled pistol, ample motive, and a professed intent to kill Linnet, but there’s just one catch: Jackie, who was drugged and under the close watch of a nurse\
    all night, couldn’t have done it."
    ),
    new Books('b9',['c3'],'Murder on the Orient Express','Crime','Agasth Christie','476',require('../assets/murderontheorient.jpg')),
    
    new Books('b11',['c5', 'c10'],'Importance of being earnest','Humour','Oscar Wilde','276',require('../assets/importanceofbeingearnest.jpg')),
    new Books('b12',['c5'],'A man called Ove','Humour','Fredric Backman','301',require('../assets/mancalledove.jpg')),

    new Books('b14',['c7'],'The immortals of Meluha','Mythology','Amish Tripathi','409',require('../assets/meluha.jpg')),
    new Books('b15',['c7'],'The Gods of Greek','Mythology','Karoli Kerenyi','602',require('../assets/greekgods.jpg')),

    new Books('b16',['c1','c8'],'War of the Worlds','Science Fiction','H.G Wells','406',require('../assets/waroftheworlds.jpg')),
    new Books('b17',['c1','c8'],'The Sirens of the Titan','Science Fiction','Kurt Vonnegut','512',require('../assets/sirensofthetitan.jpg')),

    new Books('b18',['c9','c10'],'Steve Jobs','Biography','Walter Isacsson','436',require('../assets/stevejobs.jpg')),
    new Books('b19',['c9','c10'],'Dreams From my Father: Barack Obama','Biography','Barack Obama','402',require('../assets/barackobama.jpg')),

    new Books('b20',['c10'],'Seven Habits of Highly Effective People','Self Help','Stephen R.Covey','422',require('../assets/7habits.jpg')),
    new Books('b21',['c10'],'The Road less travelled','Self Help','M Scott Pack','448',require('../assets/roadlesstravelled.jpg')),
    
];

