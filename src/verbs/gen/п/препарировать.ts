import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препарировать: PerfectVerb = {
  name: Word('препарировать', 6),
  singular1stPerson: Word('препарирую', 6),
  singular2ndPerson: Word('препарируешь', 6),
  singular3rdPerson: Word('препарирует', 6),
  plural1stPerson: Word('препарируем', 6),
  plural2ndPerson: Word('препарируете', 6),
  plural3rdPerson: Word('препарируют', 6),
  masculinePast: Word('препарировал', 6),
  femininePast: Word('препарировала', 6),
  neuterPast: Word('препарировало', 6),
  pluralPast: Word('препарировали', 6),
  imperativeInformal: Word('препарируй', 6),
  imperativeFormal: Word('препарируйте', 6),
  imperfect: [],
};

perfectVerbs.set(препарировать.name.text, препарировать);

export { препарировать };