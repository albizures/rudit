import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const концертировать: PerfectVerb = {
  name: Word('концертировать', 7),
  singular1stPerson: Word('концертирую', 7),
  singular2ndPerson: Word('концертируешь', 7),
  singular3rdPerson: Word('концертирует', 7),
  plural1stPerson: Word('концертируем', 7),
  plural2ndPerson: Word('концертируете', 7),
  plural3rdPerson: Word('концертируют', 7),
  masculinePast: Word('концертировал', 7),
  femininePast: Word('концертировала', 7),
  neuterPast: Word('концертировало', 7),
  pluralPast: Word('концертировали', 7),
  imperativeInformal: Word('концертируй', 7),
  imperativeFormal: Word('концертируйте', 7),
  imperfect: [],
};

perfectVerbs.set(концертировать.name.text, концертировать);

export { концертировать };