import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглянуться: PerfectVerb = {
  name: Word('приглянуться', 7),
  singular1stPerson: Word('приглянусь', 7),
  singular2ndPerson: Word('приглянешься', 5),
  singular3rdPerson: Word('приглянется', 5),
  plural1stPerson: Word('приглянемся', 5),
  plural2ndPerson: Word('приглянетесь', 5),
  plural3rdPerson: Word('приглянутся', 5),
  masculinePast: Word('приглянулся', 7),
  femininePast: Word('приглянулась', 7),
  neuterPast: Word('приглянулось', 7),
  pluralPast: Word('приглянулись', 7),
  imperativeInformal: Word('приглянись', 7),
  imperativeFormal: Word('приглянитесь', 7),
  imperfect: [],
};

perfectVerbs.set(приглянуться.name.text, приглянуться);

export { приглянуться };