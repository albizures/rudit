import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доноситься: PerfectVerb = {
  name: Word('доноситься', 5),
  singular1stPerson: Word('доношусь', 5),
  singular2ndPerson: Word('доносишься', 3),
  singular3rdPerson: Word('доносится', 3),
  plural1stPerson: Word('доносимся', 3),
  plural2ndPerson: Word('доноситесь', 3),
  plural3rdPerson: Word('доносятся', 3),
  masculinePast: Word('доносился', 5),
  femininePast: Word('доносилась', 5),
  neuterPast: Word('доносилось', 5),
  pluralPast: Word('доносились', 5),
  imperativeInformal: Word('доносись', 5),
  imperativeFormal: Word('доноситесь', 5),
  imperfect: [],
};

perfectVerbs.set(доноситься.name.text, доноситься);

export { доноситься };