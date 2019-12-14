import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урегулировать: PerfectVerb = {
  name: Word('урегулировать', 6),
  singular1stPerson: Word('урегулирую', 6),
  singular2ndPerson: Word('урегулируешь', 6),
  singular3rdPerson: Word('урегулирует', 6),
  plural1stPerson: Word('урегулируем', 6),
  plural2ndPerson: Word('урегулируете', 6),
  plural3rdPerson: Word('урегулируют', 6),
  masculinePast: Word('урегулировал', 6),
  femininePast: Word('урегулировала', 6),
  neuterPast: Word('урегулировало', 6),
  pluralPast: Word('урегулировали', 6),
  imperativeInformal: Word('урегулируй', 6),
  imperativeFormal: Word('урегулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(урегулировать.name.text, урегулировать);

export { урегулировать };