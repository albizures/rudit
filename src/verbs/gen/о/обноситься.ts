import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обноситься: PerfectVerb = {
  name: Word('обноситься', 5),
  singular1stPerson: Word('обношусь', 5),
  singular2ndPerson: Word('обносишься', 3),
  singular3rdPerson: Word('обносится', 3),
  plural1stPerson: Word('обносимся', 3),
  plural2ndPerson: Word('обноситесь', 3),
  plural3rdPerson: Word('обносятся', 3),
  masculinePast: Word('обносился', 5),
  femininePast: Word('обносилась', 5),
  neuterPast: Word('обносилось', 5),
  pluralPast: Word('обносились', 5),
  imperativeInformal: Word('обносись', 5),
  imperativeFormal: Word('обноситесь', 5),
  imperfect: [],
};

perfectVerbs.set(обноситься.name.text, обноситься);

export { обноситься };