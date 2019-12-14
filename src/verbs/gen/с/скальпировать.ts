import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скальпировать: PerfectVerb = {
  name: Word('скальпировать', 6),
  singular1stPerson: Word('скальпирую', 6),
  singular2ndPerson: Word('скальпируешь', 6),
  singular3rdPerson: Word('скальпирует', 6),
  plural1stPerson: Word('скальпируем', 6),
  plural2ndPerson: Word('скальпируете', 6),
  plural3rdPerson: Word('скальпируют', 6),
  masculinePast: Word('скальпировал', 6),
  femininePast: Word('скальпировала', 6),
  neuterPast: Word('скальпировало', 6),
  pluralPast: Word('скальпировали', 6),
  imperativeInformal: Word('скальпируй', 6),
  imperativeFormal: Word('скальпируйте', 6),
  imperfect: [],
};

perfectVerbs.set(скальпировать.name.text, скальпировать);

export { скальпировать };