import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдвинуться: PerfectVerb = {
  name: Word('сдвинуться', 3),
  singular1stPerson: Word('сдвинусь', 3),
  singular2ndPerson: Word('сдвинешься', 3),
  singular3rdPerson: Word('сдвинется', 3),
  plural1stPerson: Word('сдвинемся', 3),
  plural2ndPerson: Word('сдвинетесь', 3),
  plural3rdPerson: Word('сдвинутся', 3),
  masculinePast: Word('сдвинулся', 3),
  femininePast: Word('сдвинулась', 3),
  neuterPast: Word('сдвинулось', 3),
  pluralPast: Word('сдвинулись', 3),
  imperativeInformal: Word('сдвинься', 3),
  imperativeFormal: Word('сдвиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сдвинуться.name.text, сдвинуться);

export { сдвинуться };