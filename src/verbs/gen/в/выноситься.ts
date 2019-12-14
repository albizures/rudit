import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выноситься: PerfectVerb = {
  name: Word('выноситься', 1),
  singular1stPerson: Word('выношусь', 1),
  singular2ndPerson: Word('выносишься', 1),
  singular3rdPerson: Word('выносится', 1),
  plural1stPerson: Word('выносимся', 1),
  plural2ndPerson: Word('выноситесь', 1),
  plural3rdPerson: Word('выносятся', 1),
  masculinePast: Word('выносился', 1),
  femininePast: Word('выносилась', 1),
  neuterPast: Word('выносилось', 1),
  pluralPast: Word('выносились', 1),
  imperativeInformal: Word('выносись', 1),
  imperativeFormal: Word('выноситесь', 1),
  imperfect: [],
};

perfectVerbs.set(выноситься.name.text, выноситься);

export { выноситься };