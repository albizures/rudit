import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сглаживать: PerfectVerb = {
  name: Word('сглаживать', 3),
  singular1stPerson: Word('сглаживаю', 3),
  singular2ndPerson: Word('сглаживаешь', 3),
  singular3rdPerson: Word('сглаживает', 3),
  plural1stPerson: Word('сглаживаем', 3),
  plural2ndPerson: Word('сглаживаете', 3),
  plural3rdPerson: Word('сглаживают', 3),
  masculinePast: Word('сглаживал', 3),
  femininePast: Word('сглаживала', 3),
  neuterPast: Word('сглаживало', 3),
  pluralPast: Word('сглаживали', 3),
  imperativeInformal: Word('сглаживай', 3),
  imperativeFormal: Word('сглаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(сглаживать.name.text, сглаживать);

export { сглаживать };