import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соотноситься: PerfectVerb = {
  name: Word('соотноситься', 7),
  singular1stPerson: Word('соотношусь', 7),
  singular2ndPerson: Word('соотносишься', 5),
  singular3rdPerson: Word('соотносится', 5),
  plural1stPerson: Word('соотносимся', 5),
  plural2ndPerson: Word('соотноситесь', 5),
  plural3rdPerson: Word('соотносятся', 5),
  masculinePast: Word('соотносился', 7),
  femininePast: Word('соотносилась', 7),
  neuterPast: Word('соотносилось', 7),
  pluralPast: Word('соотносились', 7),
  imperativeInformal: Word('соотносись', 7),
  imperativeFormal: Word('соотноситесь', 7),
  imperfect: ['соотнестись'],
};

perfectVerbs.set(соотноситься.name.text, соотноситься);

export { соотноситься };