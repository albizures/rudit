import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экипировать: PerfectVerb = {
  name: Word('экипировать', 8),
  singular1stPerson: Word('экипирую', 6),
  singular2ndPerson: Word('экипируешь', 6),
  singular3rdPerson: Word('экипирует', 6),
  plural1stPerson: Word('экипируем', 6),
  plural2ndPerson: Word('экипируете', 6),
  plural3rdPerson: Word('экипируют', 6),
  masculinePast: Word('экипировал', 8),
  femininePast: Word('экипировала', 8),
  neuterPast: Word('экипировало', 8),
  pluralPast: Word('экипировали', 8),
  imperativeInformal: Word('экипируй', 6),
  imperativeFormal: Word('экипируйте', 6),
  imperfect: [],
};

perfectVerbs.set(экипировать.name.text, экипировать);

export { экипировать };