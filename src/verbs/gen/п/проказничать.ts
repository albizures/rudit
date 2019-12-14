import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проказничать: PerfectVerb = {
  name: Word('проказничать', 4),
  singular1stPerson: Word('проказничаю', 4),
  singular2ndPerson: Word('проказничаешь', 4),
  singular3rdPerson: Word('проказничает', 4),
  plural1stPerson: Word('проказничаем', 4),
  plural2ndPerson: Word('проказничаете', 4),
  plural3rdPerson: Word('проказничают', 4),
  masculinePast: Word('проказничал', 4),
  femininePast: Word('проказничала', 4),
  neuterPast: Word('проказничало', 4),
  pluralPast: Word('проказничали', 4),
  imperativeInformal: Word('проказничай', 4),
  imperativeFormal: Word('проказничайте', 4),
  imperfect: [],
};

perfectVerbs.set(проказничать.name.text, проказничать);

export { проказничать };