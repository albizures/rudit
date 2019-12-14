import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const фиксировать: PerfectVerb = {
  name: Word('фиксировать', 4),
  singular1stPerson: Word('фиксирую', 4),
  singular2ndPerson: Word('фиксируешь', 4),
  singular3rdPerson: Word('фиксирует', 4),
  plural1stPerson: Word('фиксируем', 4),
  plural2ndPerson: Word('фиксируете', 4),
  plural3rdPerson: Word('фиксируют', 4),
  masculinePast: Word('фиксировал', 4),
  femininePast: Word('фиксировала', 4),
  neuterPast: Word('фиксировало', 4),
  pluralPast: Word('фиксировали', 4),
  imperativeInformal: Word('фиксируй', 4),
  imperativeFormal: Word('фиксируйте', 4),
  imperfect: ['зафиксировать'],
};

perfectVerbs.set(фиксировать.name.text, фиксировать);

export { фиксировать };