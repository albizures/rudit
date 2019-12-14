import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отглаживать: PerfectVerb = {
  name: Word('отглаживать', 4),
  singular1stPerson: Word('отглаживаю', 4),
  singular2ndPerson: Word('отглаживаешь', 4),
  singular3rdPerson: Word('отглаживает', 4),
  plural1stPerson: Word('отглаживаем', 4),
  plural2ndPerson: Word('отглаживаете', 4),
  plural3rdPerson: Word('отглаживают', 4),
  masculinePast: Word('отглаживал', 4),
  femininePast: Word('отглаживала', 4),
  neuterPast: Word('отглаживало', 4),
  pluralPast: Word('отглаживали', 4),
  imperativeInformal: Word('отглаживай', 4),
  imperativeFormal: Word('отглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(отглаживать.name.text, отглаживать);

export { отглаживать };