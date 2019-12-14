import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенумеровать: PerfectVerb = {
  name: Word('перенумеровать', 11),
  singular1stPerson: Word('перенумерую', 9),
  singular2ndPerson: Word('перенумеруешь', 9),
  singular3rdPerson: Word('перенумерует', 9),
  plural1stPerson: Word('перенумеруем', 9),
  plural2ndPerson: Word('перенумеруете', 9),
  plural3rdPerson: Word('перенумеруют', 9),
  masculinePast: Word('перенумеровал', 11),
  femininePast: Word('перенумеровала', 11),
  neuterPast: Word('перенумеровало', 11),
  pluralPast: Word('перенумеровали', 11),
  imperativeInformal: Word('перенумеруй', 9),
  imperativeFormal: Word('перенумеруйте', 9),
  imperfect: [],
};

perfectVerbs.set(перенумеровать.name.text, перенумеровать);

export { перенумеровать };