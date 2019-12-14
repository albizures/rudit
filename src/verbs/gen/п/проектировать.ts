import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проектировать: PerfectVerb = {
  name: Word('проектировать', 6),
  singular1stPerson: Word('проектирую', 6),
  singular2ndPerson: Word('проектируешь', 6),
  singular3rdPerson: Word('проектирует', 6),
  plural1stPerson: Word('проектируем', 6),
  plural2ndPerson: Word('проектируете', 6),
  plural3rdPerson: Word('проектируют', 6),
  masculinePast: Word('проектировал', 6),
  femininePast: Word('проектировала', 6),
  neuterPast: Word('проектировало', 6),
  pluralPast: Word('проектировали', 6),
  imperativeInformal: Word('проектируй', 6),
  imperativeFormal: Word('проектируйте', 6),
  imperfect: [],
};

perfectVerbs.set(проектировать.name.text, проектировать);

export { проектировать };