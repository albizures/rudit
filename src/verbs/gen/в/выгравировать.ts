import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгравировать: PerfectVerb = {
  name: Word('выгравировать', 1),
  singular1stPerson: Word('выгравирую', 1),
  singular2ndPerson: Word('выгравируешь', 1),
  singular3rdPerson: Word('выгравирует', 1),
  plural1stPerson: Word('выгравируем', 1),
  plural2ndPerson: Word('выгравируете', 1),
  plural3rdPerson: Word('выгравируют', 1),
  masculinePast: Word('выгравировал', 1),
  femininePast: Word('выгравировала', 1),
  neuterPast: Word('выгравировало', 1),
  pluralPast: Word('выгравировали', 1),
  imperativeInformal: Word('выгравируй', 1),
  imperativeFormal: Word('выгравируйте', 1),
  imperfect: [],
};

perfectVerbs.set(выгравировать.name.text, выгравировать);

export { выгравировать };