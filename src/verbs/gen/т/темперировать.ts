import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const темперировать: PerfectVerb = {
  name: Word('темперировать', 6),
  singular1stPerson: Word('темперирую', 6),
  singular2ndPerson: Word('темперируешь', 6),
  singular3rdPerson: Word('темперирует', 6),
  plural1stPerson: Word('темперируем', 6),
  plural2ndPerson: Word('темперируете', 6),
  plural3rdPerson: Word('темперируют', 6),
  masculinePast: Word('темперировал', 6),
  femininePast: Word('темперировала', 6),
  neuterPast: Word('темперировало', 6),
  pluralPast: Word('темперировали', 6),
  imperativeInformal: Word('темперируй', 6),
  imperativeFormal: Word('темперируйте', 6),
  imperfect: [],
};

perfectVerbs.set(темперировать.name.text, темперировать);

export { темперировать };