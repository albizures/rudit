import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уноситься: PerfectVerb = {
  name: Word('уноситься', 4),
  singular1stPerson: Word('уношусь', 4),
  singular2ndPerson: Word('уносишься', 2),
  singular3rdPerson: Word('уносится', 2),
  plural1stPerson: Word('уносимся', 2),
  plural2ndPerson: Word('уноситесь', 2),
  plural3rdPerson: Word('уносятся', 2),
  masculinePast: Word('уносился', 4),
  femininePast: Word('уносилась', 4),
  neuterPast: Word('уносилось', 4),
  pluralPast: Word('уносились', 4),
  imperativeInformal: Word('уносись', 4),
  imperativeFormal: Word('уноситесь', 4),
  imperfect: [],
};

perfectVerbs.set(уноситься.name.text, уноситься);

export { уноситься };