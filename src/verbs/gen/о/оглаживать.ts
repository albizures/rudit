import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглаживать: PerfectVerb = {
  name: Word('оглаживать', 3),
  singular1stPerson: Word('оглаживаю', 3),
  singular2ndPerson: Word('оглаживаешь', 3),
  singular3rdPerson: Word('оглаживает', 3),
  plural1stPerson: Word('оглаживаем', 3),
  plural2ndPerson: Word('оглаживаете', 3),
  plural3rdPerson: Word('оглаживают', 3),
  masculinePast: Word('оглаживал', 3),
  femininePast: Word('оглаживала', 3),
  neuterPast: Word('оглаживало', 3),
  pluralPast: Word('оглаживали', 3),
  imperativeInformal: Word('оглаживай', 3),
  imperativeFormal: Word('оглаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(оглаживать.name.text, оглаживать);

export { оглаживать };