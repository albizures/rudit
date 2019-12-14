import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рекрутировать: PerfectVerb = {
  name: Word('рекрутировать', 6),
  singular1stPerson: Word('рекрутирую', 6),
  singular2ndPerson: Word('рекрутируешь', 6),
  singular3rdPerson: Word('рекрутирует', 6),
  plural1stPerson: Word('рекрутируем', 6),
  plural2ndPerson: Word('рекрутируете', 6),
  plural3rdPerson: Word('рекрутируют', 6),
  masculinePast: Word('рекрутировал', 6),
  femininePast: Word('рекрутировала', 6),
  neuterPast: Word('рекрутировало', 6),
  pluralPast: Word('рекрутировали', 6),
  imperativeInformal: Word('рекрутируй', 6),
  imperativeFormal: Word('рекрутируйте', 6),
  imperfect: [],
};

perfectVerbs.set(рекрутировать.name.text, рекрутировать);

export { рекрутировать };