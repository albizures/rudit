import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гримировать: PerfectVerb = {
  name: Word('гримировать', 8),
  singular1stPerson: Word('гримирую', 6),
  singular2ndPerson: Word('гримируешь', 6),
  singular3rdPerson: Word('гримирует', 6),
  plural1stPerson: Word('гримируем', 6),
  plural2ndPerson: Word('гримируете', 6),
  plural3rdPerson: Word('гримируют', 6),
  masculinePast: Word('гримировал', 8),
  femininePast: Word('гримировала', 8),
  neuterPast: Word('гримировало', 8),
  pluralPast: Word('гримировали', 8),
  imperativeInformal: Word('гримируй', 6),
  imperativeFormal: Word('гримируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гримировать.name.text, гримировать);

export { гримировать };