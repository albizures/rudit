import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стыдиться: PerfectVerb = {
  name: Word('стыдиться', 4),
  singular1stPerson: Word('стыжусь', 4),
  singular2ndPerson: Word('стыдишься', 4),
  singular3rdPerson: Word('стыдится', 4),
  plural1stPerson: Word('стыдимся', 4),
  plural2ndPerson: Word('стыдитесь', 4),
  plural3rdPerson: Word('стыдятся', 4),
  masculinePast: Word('стыдился', 4),
  femininePast: Word('стыдилась', 4),
  neuterPast: Word('стыдилось', 4),
  pluralPast: Word('стыдились', 4),
  imperativeInformal: Word('стыдись', 4),
  imperativeFormal: Word('стыдитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стыдиться.name.text, стыдиться);

export { стыдиться };