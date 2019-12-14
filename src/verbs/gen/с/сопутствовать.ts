import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопутствовать: PerfectVerb = {
  name: Word('сопутствовать', 3),
  singular1stPerson: Word('сопутствую', 3),
  singular2ndPerson: Word('сопутствуешь', 3),
  singular3rdPerson: Word('сопутствует', 3),
  plural1stPerson: Word('сопутствуем', 3),
  plural2ndPerson: Word('сопутствуете', 3),
  plural3rdPerson: Word('сопутствуют', 3),
  masculinePast: Word('сопутствовал', 3),
  femininePast: Word('сопутствовала', 3),
  neuterPast: Word('сопутствовало', 3),
  pluralPast: Word('сопутствовали', 3),
  imperativeInformal: Word('сопутствуй', 3),
  imperativeFormal: Word('сопутствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(сопутствовать.name.text, сопутствовать);

export { сопутствовать };