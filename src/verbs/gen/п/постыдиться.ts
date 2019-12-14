import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постыдиться: PerfectVerb = {
  name: Word('постыдиться', 6),
  singular1stPerson: Word('постыжусь', 6),
  singular2ndPerson: Word('постыдишься', 6),
  singular3rdPerson: Word('постыдится', 6),
  plural1stPerson: Word('постыдимся', 6),
  plural2ndPerson: Word('постыдитесь', 6),
  plural3rdPerson: Word('постыдятся', 6),
  masculinePast: Word('постыдился', 6),
  femininePast: Word('постыдилась', 6),
  neuterPast: Word('постыдилось', 6),
  pluralPast: Word('постыдились', 6),
  imperativeInformal: Word('постыдись', 6),
  imperativeFormal: Word('постыдитесь', 6),
  imperfect: [],
};

perfectVerbs.set(постыдиться.name.text, постыдиться);

export { постыдиться };