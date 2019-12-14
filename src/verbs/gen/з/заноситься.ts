import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заноситься: PerfectVerb = {
  name: Word('заноситься', 5),
  singular1stPerson: Word('заношусь', 5),
  singular2ndPerson: Word('заносишься', 3),
  singular3rdPerson: Word('заносится', 3),
  plural1stPerson: Word('заносимся', 3),
  plural2ndPerson: Word('заноситесь', 3),
  plural3rdPerson: Word('заносятся', 3),
  masculinePast: Word('заносился', 5),
  femininePast: Word('заносилась', 5),
  neuterPast: Word('заносилось', 5),
  pluralPast: Word('заносились', 5),
  imperativeInformal: Word('заносись', 5),
  imperativeFormal: Word('заноситесь', 5),
  imperfect: [],
};

perfectVerbs.set(заноситься.name.text, заноситься);

export { заноситься };