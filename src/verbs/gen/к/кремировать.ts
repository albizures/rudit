import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кремировать: PerfectVerb = {
  name: Word('кремировать', 4),
  singular1stPerson: Word('кремирую', 4),
  singular2ndPerson: Word('кремируешь', 4),
  singular3rdPerson: Word('кремирует', 4),
  plural1stPerson: Word('кремируем', 4),
  plural2ndPerson: Word('кремируете', 4),
  plural3rdPerson: Word('кремируют', 4),
  masculinePast: Word('кремировал', 4),
  femininePast: Word('кремировала', 4),
  neuterPast: Word('кремировало', 4),
  pluralPast: Word('кремировали', 4),
  imperativeInformal: Word('кремируй', 4),
  imperativeFormal: Word('кремируйте', 4),
  imperfect: [],
};

perfectVerbs.set(кремировать.name.text, кремировать);

export { кремировать };