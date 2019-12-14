import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетесать: PerfectVerb = {
  name: Word('перетесать', 7),
  singular1stPerson: Word('перетешу', 7),
  singular2ndPerson: Word('перетешешь', 5),
  singular3rdPerson: Word('перетешет', 5),
  plural1stPerson: Word('перетешем', 5),
  plural2ndPerson: Word('перетешете', 5),
  plural3rdPerson: Word('перетешут', 5),
  masculinePast: Word('перетесал', 7),
  femininePast: Word('перетесала', 7),
  neuterPast: Word('перетесало', 7),
  pluralPast: Word('перетесали', 7),
  imperativeInformal: Word('перетеши', 7),
  imperativeFormal: Word('перетешите', 7),
  imperfect: [],
};

perfectVerbs.set(перетесать.name.text, перетесать);

export { перетесать };