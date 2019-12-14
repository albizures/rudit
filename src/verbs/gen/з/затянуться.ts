import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затянуться: PerfectVerb = {
  name: Word('затянуться', 5),
  singular1stPerson: Word('затянусь', 5),
  singular2ndPerson: Word('затянешься', 3),
  singular3rdPerson: Word('затянется', 3),
  plural1stPerson: Word('затянемся', 3),
  plural2ndPerson: Word('затянетесь', 3),
  plural3rdPerson: Word('затянутся', 3),
  masculinePast: Word('затянулся', 5),
  femininePast: Word('затянулась', 5),
  neuterPast: Word('затянулось', 5),
  pluralPast: Word('затянулись', 5),
  imperativeInformal: Word('затянись', 5),
  imperativeFormal: Word('затянитесь', 5),
  imperfect: [],
};

perfectVerbs.set(затянуться.name.text, затянуться);

export { затянуться };