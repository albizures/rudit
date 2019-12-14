import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упроститься: PerfectVerb = {
  name: Word('упроститься', 6),
  singular1stPerson: Word('упрощусь', 5),
  singular2ndPerson: Word('упростишься', 6),
  singular3rdPerson: Word('упростится', 6),
  plural1stPerson: Word('упростимся', 6),
  plural2ndPerson: Word('упроститесь', 6),
  plural3rdPerson: Word('упростятся', 6),
  masculinePast: Word('упростился', 6),
  femininePast: Word('упростилась', 6),
  neuterPast: Word('упростилось', 6),
  pluralPast: Word('упростились', 6),
  imperativeInformal: Word('упростись', 6),
  imperativeFormal: Word('упроститесь', 6),
  imperfect: [],
};

perfectVerbs.set(упроститься.name.text, упроститься);

export { упроститься };