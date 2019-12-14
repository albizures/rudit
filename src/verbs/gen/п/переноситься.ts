import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переноситься: PerfectVerb = {
  name: Word('переноситься', 7),
  singular1stPerson: Word('переношусь', 7),
  singular2ndPerson: Word('переносишься', 5),
  singular3rdPerson: Word('переносится', 5),
  plural1stPerson: Word('переносимся', 5),
  plural2ndPerson: Word('переноситесь', 5),
  plural3rdPerson: Word('переносятся', 5),
  masculinePast: Word('переносился', 7),
  femininePast: Word('переносилась', 7),
  neuterPast: Word('переносилось', 7),
  pluralPast: Word('переносились', 7),
  imperativeInformal: Word('переносись', 7),
  imperativeFormal: Word('переноситесь', 7),
  imperfect: [],
};

perfectVerbs.set(переноситься.name.text, переноситься);

export { переноситься };