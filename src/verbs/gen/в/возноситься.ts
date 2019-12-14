import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возноситься: PerfectVerb = {
  name: Word('возноситься', 6),
  singular1stPerson: Word('возношусь', 6),
  singular2ndPerson: Word('возносишься', 4),
  singular3rdPerson: Word('возносится', 4),
  plural1stPerson: Word('возносимся', 4),
  plural2ndPerson: Word('возноситесь', 4),
  plural3rdPerson: Word('возносятся', 4),
  masculinePast: Word('возносился', 6),
  femininePast: Word('возносилась', 6),
  neuterPast: Word('возносилось', 6),
  pluralPast: Word('возносились', 6),
  imperativeInformal: Word('возносись', 6),
  imperativeFormal: Word('возноситесь', 6),
  imperfect: [],
};

perfectVerbs.set(возноситься.name.text, возноситься);

export { возноситься };