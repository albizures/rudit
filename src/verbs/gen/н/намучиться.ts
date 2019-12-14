import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намучиться: PerfectVerb = {
  name: Word('намучиться', 3),
  singular1stPerson: Word('намучусь', 3),
  singular2ndPerson: Word('намучишься', 3),
  singular3rdPerson: Word('намучится', 3),
  plural1stPerson: Word('намучимся', 3),
  plural2ndPerson: Word('намучитесь', 3),
  plural3rdPerson: Word('намучатся', 3),
  masculinePast: Word('намучился', 3),
  femininePast: Word('намучилась', 3),
  neuterPast: Word('намучилось', 3),
  pluralPast: Word('намучились', 3),
  imperativeInformal: Word('намучься', 3),
  imperativeFormal: Word('намучьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намучиться.name.text, намучиться);

export { намучиться };