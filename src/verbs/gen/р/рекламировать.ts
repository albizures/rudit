import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рекламировать: PerfectVerb = {
  name: Word('рекламировать', 6),
  singular1stPerson: Word('рекламирую', 6),
  singular2ndPerson: Word('рекламируешь', 6),
  singular3rdPerson: Word('рекламирует', 6),
  plural1stPerson: Word('рекламируем', 6),
  plural2ndPerson: Word('рекламируете', 6),
  plural3rdPerson: Word('рекламируют', 6),
  masculinePast: Word('рекламировал', 6),
  femininePast: Word('рекламировала', 6),
  neuterPast: Word('рекламировало', 6),
  pluralPast: Word('рекламировали', 6),
  imperativeInformal: Word('рекламируй', 6),
  imperativeFormal: Word('рекламируйте', 6),
  imperfect: [],
};

perfectVerbs.set(рекламировать.name.text, рекламировать);

export { рекламировать };