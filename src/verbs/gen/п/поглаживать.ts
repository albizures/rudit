import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглаживать: PerfectVerb = {
  name: Word('поглаживать', 4),
  singular1stPerson: Word('поглаживаю', 4),
  singular2ndPerson: Word('поглаживаешь', 4),
  singular3rdPerson: Word('поглаживает', 4),
  plural1stPerson: Word('поглаживаем', 4),
  plural2ndPerson: Word('поглаживаете', 4),
  plural3rdPerson: Word('поглаживают', 4),
  masculinePast: Word('поглаживал', 4),
  femininePast: Word('поглаживала', 4),
  neuterPast: Word('поглаживало', 4),
  pluralPast: Word('поглаживали', 4),
  imperativeInformal: Word('поглаживай', 4),
  imperativeFormal: Word('поглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(поглаживать.name.text, поглаживать);

export { поглаживать };