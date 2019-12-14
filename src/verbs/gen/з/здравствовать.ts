import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const здравствовать: PerfectVerb = {
  name: Word('здравствовать', 3),
  singular1stPerson: Word('здравствую', 3),
  singular2ndPerson: Word('здравствуешь', 3),
  singular3rdPerson: Word('здравствует', 3),
  plural1stPerson: Word('здравствуем', 3),
  plural2ndPerson: Word('здравствуете', 3),
  plural3rdPerson: Word('здравствуют', 3),
  masculinePast: Word('здравствовал', 3),
  femininePast: Word('здравствовала', 3),
  neuterPast: Word('здравствовало', 3),
  pluralPast: Word('здравствовали', 3),
  imperativeInformal: Word('здравствуй', 3),
  imperativeFormal: Word('здравствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(здравствовать.name.text, здравствовать);

export { здравствовать };