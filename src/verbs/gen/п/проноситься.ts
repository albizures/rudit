import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проноситься: PerfectVerb = {
  name: Word('проноситься', 6),
  singular1stPerson: Word('проношусь', 6),
  singular2ndPerson: Word('проносишься', 4),
  singular3rdPerson: Word('проносится', 4),
  plural1stPerson: Word('проносимся', 4),
  plural2ndPerson: Word('проноситесь', 4),
  plural3rdPerson: Word('проносятся', 4),
  masculinePast: Word('проносился', 6),
  femininePast: Word('проносилась', 6),
  neuterPast: Word('проносилось', 6),
  pluralPast: Word('проносились', 6),
  imperativeInformal: Word('проносись', 6),
  imperativeFormal: Word('проноситесь', 6),
  imperfect: [],
};

perfectVerbs.set(проноситься.name.text, проноситься);

export { проноситься };