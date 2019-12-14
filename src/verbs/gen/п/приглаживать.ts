import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглаживать: PerfectVerb = {
  name: Word('приглаживать', 5),
  singular1stPerson: Word('приглаживаю', 5),
  singular2ndPerson: Word('приглаживаешь', 5),
  singular3rdPerson: Word('приглаживает', 5),
  plural1stPerson: Word('приглаживаем', 5),
  plural2ndPerson: Word('приглаживаете', 5),
  plural3rdPerson: Word('приглаживают', 5),
  masculinePast: Word('приглаживал', 5),
  femininePast: Word('приглаживала', 5),
  neuterPast: Word('приглаживало', 5),
  pluralPast: Word('приглаживали', 5),
  imperativeInformal: Word('приглаживай', 5),
  imperativeFormal: Word('приглаживайте', 5),
  imperfect: [],
};

perfectVerbs.set(приглаживать.name.text, приглаживать);

export { приглаживать };