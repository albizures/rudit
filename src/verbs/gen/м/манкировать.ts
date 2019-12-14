import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const манкировать: PerfectVerb = {
  name: Word('манкировать', 4),
  singular1stPerson: Word('манкирую', 4),
  singular2ndPerson: Word('манкируешь', 4),
  singular3rdPerson: Word('манкирует', 4),
  plural1stPerson: Word('манкируем', 4),
  plural2ndPerson: Word('манкируете', 4),
  plural3rdPerson: Word('манкируют', 4),
  masculinePast: Word('манкировал', 4),
  femininePast: Word('манкировала', 4),
  neuterPast: Word('манкировало', 4),
  pluralPast: Word('манкировали', 4),
  imperativeInformal: Word('манкируй', 4),
  imperativeFormal: Word('манкируйте', 4),
  imperfect: [],
};

perfectVerbs.set(манкировать.name.text, манкировать);

export { манкировать };