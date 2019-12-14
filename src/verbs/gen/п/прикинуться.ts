import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикинуться: PerfectVerb = {
  name: Word('прикинуться', 4),
  singular1stPerson: Word('прикинусь', 4),
  singular2ndPerson: Word('прикинешься', 4),
  singular3rdPerson: Word('прикинется', 4),
  plural1stPerson: Word('прикинемся', 4),
  plural2ndPerson: Word('прикинетесь', 4),
  plural3rdPerson: Word('прикинутся', 4),
  masculinePast: Word('прикинулся', 4),
  femininePast: Word('прикинулась', 4),
  neuterPast: Word('прикинулось', 4),
  pluralPast: Word('прикинулись', 4),
  imperativeInformal: Word('прикинься', 4),
  imperativeFormal: Word('прикиньтесь', 4),
  imperfect: ['прикидываться'],
};

perfectVerbs.set(прикинуться.name.text, прикинуться);

export { прикинуться };