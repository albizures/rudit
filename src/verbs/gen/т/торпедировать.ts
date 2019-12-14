import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торпедировать: PerfectVerb = {
  name: Word('торпедировать', 6),
  singular1stPerson: Word('торпедирую', 6),
  singular2ndPerson: Word('торпедируешь', 6),
  singular3rdPerson: Word('торпедирует', 6),
  plural1stPerson: Word('торпедируем', 6),
  plural2ndPerson: Word('торпедируете', 6),
  plural3rdPerson: Word('торпедируют', 6),
  masculinePast: Word('торпедировал', 6),
  femininePast: Word('торпедировала', 6),
  neuterPast: Word('торпедировало', 6),
  pluralPast: Word('торпедировали', 6),
  imperativeInformal: Word('торпедируй', 6),
  imperativeFormal: Word('торпедируйте', 6),
  imperfect: [],
};

perfectVerbs.set(торпедировать.name.text, торпедировать);

export { торпедировать };