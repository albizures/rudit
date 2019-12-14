import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осушать: PerfectVerb = {
  name: Word('осушать', 4),
  singular1stPerson: Word('осушаю', 4),
  singular2ndPerson: Word('осушаешь', 4),
  singular3rdPerson: Word('осушает', 4),
  plural1stPerson: Word('осушаем', 4),
  plural2ndPerson: Word('осушаете', 4),
  plural3rdPerson: Word('осушают', 4),
  masculinePast: Word('осушал', 4),
  femininePast: Word('осушала', 4),
  neuterPast: Word('осушало', 4),
  pluralPast: Word('осушали', 4),
  imperativeInformal: Word('осушай', 4),
  imperativeFormal: Word('осушайте', 4),
  imperfect: [],
};

perfectVerbs.set(осушать.name.text, осушать);

export { осушать };