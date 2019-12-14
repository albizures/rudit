import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уготовать: PerfectVerb = {
  name: Word('уготовать', 4),
  singular1stPerson: Word('уготоваю', 4),
  singular2ndPerson: Word('уготоваешь', 4),
  singular3rdPerson: Word('уготовает', 4),
  plural1stPerson: Word('уготоваем', 4),
  plural2ndPerson: Word('уготоваете', 4),
  plural3rdPerson: Word('уготовают', 4),
  masculinePast: Word('уготовал', 4),
  femininePast: Word('уготовала', 4),
  neuterPast: Word('уготовало', 4),
  pluralPast: Word('уготовали', 4),
  imperativeInformal: Word('уготовай', 4),
  imperativeFormal: Word('уготовайте', 4),
  imperfect: [],
};

perfectVerbs.set(уготовать.name.text, уготовать);

export { уготовать };