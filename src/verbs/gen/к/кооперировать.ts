import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кооперировать: PerfectVerb = {
  name: Word('кооперировать', 6),
  singular1stPerson: Word('кооперирую', 6),
  singular2ndPerson: Word('кооперируешь', 6),
  singular3rdPerson: Word('кооперирует', 6),
  plural1stPerson: Word('кооперируем', 6),
  plural2ndPerson: Word('кооперируете', 6),
  plural3rdPerson: Word('кооперируют', 6),
  masculinePast: Word('кооперировал', 6),
  femininePast: Word('кооперировала', 6),
  neuterPast: Word('кооперировало', 6),
  pluralPast: Word('кооперировали', 6),
  imperativeInformal: Word('кооперируй', 6),
  imperativeFormal: Word('кооперируйте', 6),
  imperfect: [],
};

perfectVerbs.set(кооперировать.name.text, кооперировать);

export { кооперировать };