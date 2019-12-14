import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порадовать: PerfectVerb = {
  name: Word('порадовать', 3),
  singular1stPerson: Word('порадую', 3),
  singular2ndPerson: Word('порадуешь', 3),
  singular3rdPerson: Word('порадует', 3),
  plural1stPerson: Word('порадуем', 3),
  plural2ndPerson: Word('порадуете', 3),
  plural3rdPerson: Word('порадуют', 3),
  masculinePast: Word('порадовал', 3),
  femininePast: Word('порадовала', 3),
  neuterPast: Word('порадовало', 3),
  pluralPast: Word('порадовали', 3),
  imperativeInformal: Word('порадуй', 3),
  imperativeFormal: Word('порадуйте', 3),
  imperfect: [],
};

perfectVerbs.set(порадовать.name.text, порадовать);

export { порадовать };