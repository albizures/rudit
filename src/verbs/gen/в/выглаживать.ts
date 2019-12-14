import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выглаживать: PerfectVerb = {
  name: Word('выглаживать', 4),
  singular1stPerson: Word('выглаживаю', 4),
  singular2ndPerson: Word('выглаживаешь', 4),
  singular3rdPerson: Word('выглаживает', 4),
  plural1stPerson: Word('выглаживаем', 4),
  plural2ndPerson: Word('выглаживаете', 4),
  plural3rdPerson: Word('выглаживают', 4),
  masculinePast: Word('выглаживал', 4),
  femininePast: Word('выглаживала', 4),
  neuterPast: Word('выглаживало', 4),
  pluralPast: Word('выглаживали', 4),
  imperativeInformal: Word('выглаживай', 4),
  imperativeFormal: Word('выглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(выглаживать.name.text, выглаживать);

export { выглаживать };