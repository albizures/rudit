import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наглаживать: PerfectVerb = {
  name: Word('наглаживать', 4),
  singular1stPerson: Word('наглаживаю', 4),
  singular2ndPerson: Word('наглаживаешь', 4),
  singular3rdPerson: Word('наглаживает', 4),
  plural1stPerson: Word('наглаживаем', 4),
  plural2ndPerson: Word('наглаживаете', 4),
  plural3rdPerson: Word('наглаживают', 4),
  masculinePast: Word('наглаживал', 4),
  femininePast: Word('наглаживала', 4),
  neuterPast: Word('наглаживало', 4),
  pluralPast: Word('наглаживали', 4),
  imperativeInformal: Word('наглаживай', 4),
  imperativeFormal: Word('наглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(наглаживать.name.text, наглаживать);

export { наглаживать };