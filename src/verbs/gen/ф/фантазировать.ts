import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const фантазировать: PerfectVerb = {
  name: Word('фантазировать', 6),
  singular1stPerson: Word('фантазирую', 6),
  singular2ndPerson: Word('фантазируешь', 6),
  singular3rdPerson: Word('фантазирует', 6),
  plural1stPerson: Word('фантазируем', 6),
  plural2ndPerson: Word('фантазируете', 6),
  plural3rdPerson: Word('фантазируют', 6),
  masculinePast: Word('фантазировал', 6),
  femininePast: Word('фантазировала', 6),
  neuterPast: Word('фантазировало', 6),
  pluralPast: Word('фантазировали', 6),
  imperativeInformal: Word('фантазируй', 6),
  imperativeFormal: Word('фантазируйте', 6),
  imperfect: [],
};

perfectVerbs.set(фантазировать.name.text, фантазировать);

export { фантазировать };