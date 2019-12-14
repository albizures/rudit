import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возродиться: PerfectVerb = {
  name: Word('возродиться', 6),
  singular1stPerson: Word('возрожусь', 6),
  singular2ndPerson: Word('возродишься', 6),
  singular3rdPerson: Word('возродится', 6),
  plural1stPerson: Word('возродимся', 6),
  plural2ndPerson: Word('возродитесь', 6),
  plural3rdPerson: Word('возродятся', 6),
  masculinePast: Word('возродился', 6),
  femininePast: Word('возродилась', 6),
  neuterPast: Word('возродилось', 6),
  pluralPast: Word('возродились', 6),
  imperativeInformal: Word('возродись', 6),
  imperativeFormal: Word('возродитесь', 6),
  imperfect: [],
};

perfectVerbs.set(возродиться.name.text, возродиться);

export { возродиться };