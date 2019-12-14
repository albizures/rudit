import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглаживать: PerfectVerb = {
  name: Word('проглаживать', 5),
  singular1stPerson: Word('проглаживаю', 5),
  singular2ndPerson: Word('проглаживаешь', 5),
  singular3rdPerson: Word('проглаживает', 5),
  plural1stPerson: Word('проглаживаем', 5),
  plural2ndPerson: Word('проглаживаете', 5),
  plural3rdPerson: Word('проглаживают', 5),
  masculinePast: Word('проглаживал', 5),
  femininePast: Word('проглаживала', 5),
  neuterPast: Word('проглаживало', 5),
  pluralPast: Word('проглаживали', 5),
  imperativeInformal: Word('проглаживай', 5),
  imperativeFormal: Word('проглаживайте', 5),
  imperfect: [],
};

perfectVerbs.set(проглаживать.name.text, проглаживать);

export { проглаживать };