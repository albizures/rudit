import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спланировать: PerfectVerb = {
  name: Word('спланировать', 5),
  singular1stPerson: Word('спланирую', 5),
  singular2ndPerson: Word('спланируешь', 5),
  singular3rdPerson: Word('спланирует', 5),
  plural1stPerson: Word('спланируем', 5),
  plural2ndPerson: Word('спланируете', 5),
  plural3rdPerson: Word('спланируют', 5),
  masculinePast: Word('спланировал', 5),
  femininePast: Word('спланировала', 5),
  neuterPast: Word('спланировало', 5),
  pluralPast: Word('спланировали', 5),
  imperativeInformal: Word('спланируй', 5),
  imperativeFormal: Word('спланируйте', 5),
  imperfect: [],
};

perfectVerbs.set(спланировать.name.text, спланировать);

export { спланировать };