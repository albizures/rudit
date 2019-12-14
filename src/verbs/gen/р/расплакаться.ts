import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплакаться: PerfectVerb = {
  name: Word('расплакаться', 5),
  singular1stPerson: Word('расплачусь', 5),
  singular2ndPerson: Word('расплачешься', 5),
  singular3rdPerson: Word('расплачется', 5),
  plural1stPerson: Word('расплачемся', 5),
  plural2ndPerson: Word('расплачетесь', 5),
  plural3rdPerson: Word('расплачутся', 5),
  masculinePast: Word('расплакался', 5),
  femininePast: Word('расплакалась', 5),
  neuterPast: Word('расплакалось', 5),
  pluralPast: Word('расплакались', 5),
  imperativeInformal: Word('расплачься', 5),
  imperativeFormal: Word('расплачьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расплакаться.name.text, расплакаться);

export { расплакаться };