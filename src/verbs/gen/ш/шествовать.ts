import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шествовать: PerfectVerb = {
  name: Word('шествовать', 1),
  singular1stPerson: Word('шествую', 1),
  singular2ndPerson: Word('шествуешь', 1),
  singular3rdPerson: Word('шествует', 1),
  plural1stPerson: Word('шествуем', 1),
  plural2ndPerson: Word('шествуете', 1),
  plural3rdPerson: Word('шествуют', 1),
  masculinePast: Word('шествовал', 1),
  femininePast: Word('шествовала', 1),
  neuterPast: Word('шествовало', 1),
  pluralPast: Word('шествовали', 1),
  imperativeInformal: Word('шествуй', 1),
  imperativeFormal: Word('шествуйте', 1),
  imperfect: [],
};

perfectVerbs.set(шествовать.name.text, шествовать);

export { шествовать };