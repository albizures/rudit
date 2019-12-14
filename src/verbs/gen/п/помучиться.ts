import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помучиться: PerfectVerb = {
  name: Word('помучиться', 3),
  singular1stPerson: Word('помучусь', 3),
  singular2ndPerson: Word('помучишься', 3),
  singular3rdPerson: Word('помучится', 3),
  plural1stPerson: Word('помучимся', 3),
  plural2ndPerson: Word('помучитесь', 3),
  plural3rdPerson: Word('помучатся', 3),
  masculinePast: Word('помучился', 3),
  femininePast: Word('помучилась', 3),
  neuterPast: Word('помучилось', 3),
  pluralPast: Word('помучились', 3),
  imperativeInformal: Word('помучься', 3),
  imperativeFormal: Word('помучьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(помучиться.name.text, помучиться);

export { помучиться };