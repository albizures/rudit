import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const неглижировать: PerfectVerb = {
  name: Word('неглижировать', 6),
  singular1stPerson: Word('неглижирую', 6),
  singular2ndPerson: Word('неглижируешь', 6),
  singular3rdPerson: Word('неглижирует', 6),
  plural1stPerson: Word('неглижируем', 6),
  plural2ndPerson: Word('неглижируете', 6),
  plural3rdPerson: Word('неглижируют', 6),
  masculinePast: Word('неглижировал', 6),
  femininePast: Word('неглижировала', 6),
  neuterPast: Word('неглижировало', 6),
  pluralPast: Word('неглижировали', 6),
  imperativeInformal: Word('неглижируй', 6),
  imperativeFormal: Word('неглижируйте', 6),
  imperfect: [],
};

perfectVerbs.set(неглижировать.name.text, неглижировать);

export { неглижировать };