import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шуровать: PerfectVerb = {
  name: Word('шуровать', 5),
  singular1stPerson: Word('шурую', 3),
  singular2ndPerson: Word('шуруешь', 3),
  singular3rdPerson: Word('шурует', 3),
  plural1stPerson: Word('шуруем', 3),
  plural2ndPerson: Word('шуруете', 3),
  plural3rdPerson: Word('шуруют', 3),
  masculinePast: Word('шуровал', 5),
  femininePast: Word('шуровала', 5),
  neuterPast: Word('шуровало', 5),
  pluralPast: Word('шуровали', 5),
  imperativeInformal: Word('шуруй', 3),
  imperativeFormal: Word('шуруйте', 3),
  imperfect: [],
};

perfectVerbs.set(шуровать.name.text, шуровать);

export { шуровать };