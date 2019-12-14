import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натянуться: PerfectVerb = {
  name: Word('натянуться', 5),
  singular1stPerson: Word('натянусь', 5),
  singular2ndPerson: Word('натянешься', 3),
  singular3rdPerson: Word('натянется', 3),
  plural1stPerson: Word('натянемся', 3),
  plural2ndPerson: Word('натянетесь', 3),
  plural3rdPerson: Word('натянутся', 3),
  masculinePast: Word('натянулся', 5),
  femininePast: Word('натянулась', 5),
  neuterPast: Word('натянулось', 5),
  pluralPast: Word('натянулись', 5),
  imperativeInformal: Word('натянись', 5),
  imperativeFormal: Word('натянитесь', 5),
  imperfect: [],
};

perfectVerbs.set(натянуться.name.text, натянуться);

export { натянуться };