import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравновеситься: PerfectVerb = {
  name: Word('уравновеситься', 7),
  singular1stPerson: Word('уравновешусь', 7),
  singular2ndPerson: Word('уравновесишься', 7),
  singular3rdPerson: Word('уравновесится', 7),
  plural1stPerson: Word('уравновесимся', 7),
  plural2ndPerson: Word('уравновеситесь', 7),
  plural3rdPerson: Word('уравновесятся', 7),
  masculinePast: Word('уравновесился', 7),
  femininePast: Word('уравновесилась', 7),
  neuterPast: Word('уравновесилось', 7),
  pluralPast: Word('уравновесились', 7),
  imperativeInformal: Word('уравновесься', 7),
  imperativeFormal: Word('уравновесьтесь', 7),
  imperfect: [],
};

perfectVerbs.set(уравновеситься.name.text, уравновеситься);

export { уравновеситься };