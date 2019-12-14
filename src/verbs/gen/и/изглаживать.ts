import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изглаживать: PerfectVerb = {
  name: Word('изглаживать', 4),
  singular1stPerson: Word('изглаживаю', 4),
  singular2ndPerson: Word('изглаживаешь', 4),
  singular3rdPerson: Word('изглаживает', 4),
  plural1stPerson: Word('изглаживаем', 4),
  plural2ndPerson: Word('изглаживаете', 4),
  plural3rdPerson: Word('изглаживают', 4),
  masculinePast: Word('изглаживал', 4),
  femininePast: Word('изглаживала', 4),
  neuterPast: Word('изглаживало', 4),
  pluralPast: Word('изглаживали', 4),
  imperativeInformal: Word('изглаживай', 4),
  imperativeFormal: Word('изглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(изглаживать.name.text, изглаживать);

export { изглаживать };