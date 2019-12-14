import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вноситься: PerfectVerb = {
  name: Word('вноситься', 4),
  singular1stPerson: Word('вношусь', 4),
  singular2ndPerson: Word('вносишься', 2),
  singular3rdPerson: Word('вносится', 2),
  plural1stPerson: Word('вносимся', 2),
  plural2ndPerson: Word('вноситесь', 2),
  plural3rdPerson: Word('вносятся', 2),
  masculinePast: Word('вносился', 4),
  femininePast: Word('вносилась', 4),
  neuterPast: Word('вносилось', 4),
  pluralPast: Word('вносились', 4),
  imperativeInformal: Word('вносись', 4),
  imperativeFormal: Word('вноситесь', 4),
  imperfect: [],
};

perfectVerbs.set(вноситься.name.text, вноситься);

export { вноситься };