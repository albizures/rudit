import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const индоссировать: PerfectVerb = {
  name: Word('индоссировать', 6),
  singular1stPerson: Word('индоссирую', 6),
  singular2ndPerson: Word('индоссируешь', 6),
  singular3rdPerson: Word('индоссирует', 6),
  plural1stPerson: Word('индоссируем', 6),
  plural2ndPerson: Word('индоссируете', 6),
  plural3rdPerson: Word('индоссируют', 6),
  masculinePast: Word('индоссировал', 6),
  femininePast: Word('индоссировала', 6),
  neuterPast: Word('индоссировало', 6),
  pluralPast: Word('индоссировали', 6),
  imperativeInformal: Word('индоссируй', 6),
  imperativeFormal: Word('индоссируйте', 6),
  imperfect: [],
};

perfectVerbs.set(индоссировать.name.text, индоссировать);

export { индоссировать };