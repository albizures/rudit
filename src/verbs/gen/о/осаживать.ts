import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осаживать: PerfectVerb = {
  name: Word('осаживать', 2),
  singular1stPerson: Word('осаживаю', 2),
  singular2ndPerson: Word('осаживаешь', 2),
  singular3rdPerson: Word('осаживает', 2),
  plural1stPerson: Word('осаживаем', 2),
  plural2ndPerson: Word('осаживаете', 2),
  plural3rdPerson: Word('осаживают', 2),
  masculinePast: Word('осаживал', 2),
  femininePast: Word('осаживала', 2),
  neuterPast: Word('осаживало', 2),
  pluralPast: Word('осаживали', 2),
  imperativeInformal: Word('осаживай', 2),
  imperativeFormal: Word('осаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(осаживать.name.text, осаживать);

export { осаживать };