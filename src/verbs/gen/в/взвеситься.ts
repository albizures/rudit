import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвеситься: PerfectVerb = {
  name: Word('взвеситься', 3),
  singular1stPerson: Word('взвешусь', 3),
  singular2ndPerson: Word('взвесишься', 3),
  singular3rdPerson: Word('взвесится', 3),
  plural1stPerson: Word('взвесимся', 3),
  plural2ndPerson: Word('взвеситесь', 3),
  plural3rdPerson: Word('взвесятся', 3),
  masculinePast: Word('взвесился', 3),
  femininePast: Word('взвесилась', 3),
  neuterPast: Word('взвесилось', 3),
  pluralPast: Word('взвесились', 3),
  imperativeInformal: Word('взвесься', 3),
  imperativeFormal: Word('взвесьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(взвеситься.name.text, взвеситься);

export { взвеситься };