import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досадовать: PerfectVerb = {
  name: Word('досадовать', 3),
  singular1stPerson: Word('досадую', 3),
  singular2ndPerson: Word('досадуешь', 3),
  singular3rdPerson: Word('досадует', 3),
  plural1stPerson: Word('досадуем', 3),
  plural2ndPerson: Word('досадуете', 3),
  plural3rdPerson: Word('досадуют', 3),
  masculinePast: Word('досадовал', 3),
  femininePast: Word('досадовала', 3),
  neuterPast: Word('досадовало', 3),
  pluralPast: Word('досадовали', 3),
  imperativeInformal: Word('досадуй', 3),
  imperativeFormal: Word('досадуйте', 3),
  imperfect: [],
};

perfectVerbs.set(досадовать.name.text, досадовать);

export { досадовать };