import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдвинуться: PerfectVerb = {
  name: Word('выдвинуться', 1),
  singular1stPerson: Word('выдвинусь', 1),
  singular2ndPerson: Word('выдвинешься', 1),
  singular3rdPerson: Word('выдвинется', 1),
  plural1stPerson: Word('выдвинемся', 1),
  plural2ndPerson: Word('выдвинетесь', 1),
  plural3rdPerson: Word('выдвинутся', 1),
  masculinePast: Word('выдвинулся', 1),
  femininePast: Word('выдвинулась', 1),
  neuterPast: Word('выдвинулось', 1),
  pluralPast: Word('выдвинулись', 1),
  imperativeInformal: Word('выдвинись//вы'двинься', 1),
  imperativeFormal: Word('выдвиньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выдвинуться.name.text, выдвинуться);

export { выдвинуться };