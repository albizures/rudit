import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плестись: PerfectVerb = {
  name: Word('плестись', 5),
  singular1stPerson: Word('плетусь', 4),
  singular2ndPerson: Word('плетёшься', 4),
  singular3rdPerson: Word('плетётся', 4),
  plural1stPerson: Word('плетёмся', 4),
  plural2ndPerson: Word('плетётесь', 4),
  plural3rdPerson: Word('плетутся', 4),
  masculinePast: Word('плёлся', 2),
  femininePast: Word('плелась', 4),
  neuterPast: Word('плелось', 4),
  pluralPast: Word('плелись', 4),
  imperativeInformal: Word('плетись', 4),
  imperativeFormal: Word('плетитесь', 4),
  imperfect: [],
};

perfectVerbs.set(плестись.name.text, плестись);

export { плестись };