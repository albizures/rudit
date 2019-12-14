import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const декларировать: PerfectVerb = {
  name: Word('декларировать', 6),
  singular1stPerson: Word('декларирую', 6),
  singular2ndPerson: Word('декларируешь', 6),
  singular3rdPerson: Word('декларирует', 6),
  plural1stPerson: Word('декларируем', 6),
  plural2ndPerson: Word('декларируете', 6),
  plural3rdPerson: Word('декларируют', 6),
  masculinePast: Word('декларировал', 6),
  femininePast: Word('декларировала', 6),
  neuterPast: Word('декларировало', 6),
  pluralPast: Word('декларировали', 6),
  imperativeInformal: Word('декларируй', 6),
  imperativeFormal: Word('декларируйте', 6),
  imperfect: [],
};

perfectVerbs.set(декларировать.name.text, декларировать);

export { декларировать };