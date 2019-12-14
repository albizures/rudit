import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поучиться: PerfectVerb = {
  name: Word('поучиться', 4),
  singular1stPerson: Word('поучусь', 4),
  singular2ndPerson: Word('поучишься', 2),
  singular3rdPerson: Word('поучится', 2),
  plural1stPerson: Word('поучимся', 2),
  plural2ndPerson: Word('поучитесь', 2),
  plural3rdPerson: Word('поучатся', 2),
  masculinePast: Word('поучился', 4),
  femininePast: Word('поучилась', 4),
  neuterPast: Word('поучилось', 4),
  pluralPast: Word('поучились', 4),
  imperativeInformal: Word('поучись', 4),
  imperativeFormal: Word('поучитесь', 4),
  imperfect: [],
};

perfectVerbs.set(поучиться.name.text, поучиться);

export { поучиться };