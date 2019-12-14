import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплакаться: PerfectVerb = {
  name: Word('выплакаться', 1),
  singular1stPerson: Word('выплачусь', 1),
  singular2ndPerson: Word('выплачешься', 1),
  singular3rdPerson: Word('выплачется', 1),
  plural1stPerson: Word('выплачемся', 1),
  plural2ndPerson: Word('выплачетесь', 1),
  plural3rdPerson: Word('выплачутся', 1),
  masculinePast: Word('выплакался', 1),
  femininePast: Word('выплакалась', 1),
  neuterPast: Word('выплакалось', 1),
  pluralPast: Word('выплакались', 1),
  imperativeInformal: Word('выплачься', 1),
  imperativeFormal: Word('выплачьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выплакаться.name.text, выплакаться);

export { выплакаться };