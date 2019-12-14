import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдвинуться: PerfectVerb = {
  name: Word('вдвинуться', 3),
  singular1stPerson: Word('вдвинусь', 3),
  singular2ndPerson: Word('вдвинешься', 3),
  singular3rdPerson: Word('вдвинется', 3),
  plural1stPerson: Word('вдвинемся', 3),
  plural2ndPerson: Word('вдвинетесь', 3),
  plural3rdPerson: Word('вдвинутся', 3),
  masculinePast: Word('вдвинулся', 3),
  femininePast: Word('вдвинулась', 3),
  neuterPast: Word('вдвинулось', 3),
  pluralPast: Word('вдвинулись', 3),
  imperativeInformal: Word('вдвинься', 3),
  imperativeFormal: Word('вдвиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вдвинуться.name.text, вдвинуться);

export { вдвинуться };