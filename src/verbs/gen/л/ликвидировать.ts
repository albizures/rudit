import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ликвидировать: PerfectVerb = {
  name: Word('ликвидировать', 6),
  singular1stPerson: Word('ликвидирую', 6),
  singular2ndPerson: Word('ликвидируешь', 6),
  singular3rdPerson: Word('ликвидирует', 6),
  plural1stPerson: Word('ликвидируем', 6),
  plural2ndPerson: Word('ликвидируете', 6),
  plural3rdPerson: Word('ликвидируют', 6),
  masculinePast: Word('ликвидировал', 6),
  femininePast: Word('ликвидировала', 6),
  neuterPast: Word('ликвидировало', 6),
  pluralPast: Word('ликвидировали', 6),
  imperativeInformal: Word('ликвидируй', 6),
  imperativeFormal: Word('ликвидируйте', 6),
  imperfect: [],
};

perfectVerbs.set(ликвидировать.name.text, ликвидировать);

export { ликвидировать };