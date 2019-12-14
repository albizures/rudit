import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облаживать: PerfectVerb = {
  name: Word('облаживать', 3),
  singular1stPerson: Word('облаживаю', 3),
  singular2ndPerson: Word('облаживаешь', 3),
  singular3rdPerson: Word('облаживает', 3),
  plural1stPerson: Word('облаживаем', 3),
  plural2ndPerson: Word('облаживаете', 3),
  plural3rdPerson: Word('облаживают', 3),
  masculinePast: Word('облаживал', 3),
  femininePast: Word('облаживала', 3),
  neuterPast: Word('облаживало', 3),
  pluralPast: Word('облаживали', 3),
  imperativeInformal: Word('облаживай', 3),
  imperativeFormal: Word('облаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(облаживать.name.text, облаживать);

export { облаживать };