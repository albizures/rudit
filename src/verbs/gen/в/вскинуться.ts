import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскинуться: PerfectVerb = {
  name: Word('вскинуться', 3),
  singular1stPerson: Word('вскинусь', 3),
  singular2ndPerson: Word('вскинешься', 3),
  singular3rdPerson: Word('вскинется', 3),
  plural1stPerson: Word('вскинемся', 3),
  plural2ndPerson: Word('вскинетесь', 3),
  plural3rdPerson: Word('вскинутся', 3),
  masculinePast: Word('вскинулся', 3),
  femininePast: Word('вскинулась', 3),
  neuterPast: Word('вскинулось', 3),
  pluralPast: Word('вскинулись', 3),
  imperativeInformal: Word('вскинься', 3),
  imperativeFormal: Word('вскиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вскинуться.name.text, вскинуться);

export { вскинуться };