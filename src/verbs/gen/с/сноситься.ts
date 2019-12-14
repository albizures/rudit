import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сноситься: PerfectVerb = {
  name: Word('сноситься', 4),
  singular1stPerson: Word('сношусь', 4),
  singular2ndPerson: Word('сносишься', 2),
  singular3rdPerson: Word('сносится', 2),
  plural1stPerson: Word('сносимся', 2),
  plural2ndPerson: Word('сноситесь', 2),
  plural3rdPerson: Word('сносятся', 2),
  masculinePast: Word('сносился', 4),
  femininePast: Word('сносилась', 4),
  neuterPast: Word('сносилось', 4),
  pluralPast: Word('сносились', 4),
  imperativeInformal: Word('сносись', 4),
  imperativeFormal: Word('сноситесь', 4),
  imperfect: [],
};

perfectVerbs.set(сноситься.name.text, сноситься);

export { сноситься };