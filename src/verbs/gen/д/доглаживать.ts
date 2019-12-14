import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доглаживать: PerfectVerb = {
  name: Word('доглаживать', 4),
  singular1stPerson: Word('доглаживаю', 4),
  singular2ndPerson: Word('доглаживаешь', 4),
  singular3rdPerson: Word('доглаживает', 4),
  plural1stPerson: Word('доглаживаем', 4),
  plural2ndPerson: Word('доглаживаете', 4),
  plural3rdPerson: Word('доглаживают', 4),
  masculinePast: Word('доглаживал', 4),
  femininePast: Word('доглаживала', 4),
  neuterPast: Word('доглаживало', 4),
  pluralPast: Word('доглаживали', 4),
  imperativeInformal: Word('доглаживай', 4),
  imperativeFormal: Word('доглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(доглаживать.name.text, доглаживать);

export { доглаживать };