import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драпировать: PerfectVerb = {
  name: Word('драпировать', 8),
  singular1stPerson: Word('драпирую', 6),
  singular2ndPerson: Word('драпируешь', 6),
  singular3rdPerson: Word('драпирует', 6),
  plural1stPerson: Word('драпируем', 6),
  plural2ndPerson: Word('драпируете', 6),
  plural3rdPerson: Word('драпируют', 6),
  masculinePast: Word('драпировал', 8),
  femininePast: Word('драпировала', 8),
  neuterPast: Word('драпировало', 8),
  pluralPast: Word('драпировали', 8),
  imperativeInformal: Word('драпируй', 6),
  imperativeFormal: Word('драпируйте', 6),
  imperfect: [],
};

perfectVerbs.set(драпировать.name.text, драпировать);

export { драпировать };