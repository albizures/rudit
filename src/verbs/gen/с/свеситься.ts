import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свеситься: PerfectVerb = {
  name: Word('свеситься', 2),
  singular1stPerson: Word('свешусь', 2),
  singular2ndPerson: Word('свесишься', 2),
  singular3rdPerson: Word('свесится', 2),
  plural1stPerson: Word('свесимся', 2),
  plural2ndPerson: Word('свеситесь', 2),
  plural3rdPerson: Word('свесятся', 2),
  masculinePast: Word('свесился', 2),
  femininePast: Word('свесилась', 2),
  neuterPast: Word('свесилось', 2),
  pluralPast: Word('свесились', 2),
  imperativeInformal: Word('свесься', 2),
  imperativeFormal: Word('свесьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свеситься.name.text, свеситься);

export { свеситься };