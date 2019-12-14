import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уродиться: PerfectVerb = {
  name: Word('уродиться', 4),
  singular1stPerson: Word('урожусь', 4),
  singular2ndPerson: Word('уродишься', 4),
  singular3rdPerson: Word('уродится', 4),
  plural1stPerson: Word('уродимся', 4),
  plural2ndPerson: Word('уродитесь', 4),
  plural3rdPerson: Word('уродятся', 4),
  masculinePast: Word('уродился', 4),
  femininePast: Word('уродилась', 4),
  neuterPast: Word('уродилось', 4),
  pluralPast: Word('уродились', 4),
  imperativeInformal: Word('уродись', 4),
  imperativeFormal: Word('уродитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уродиться.name.text, уродиться);

export { уродиться };