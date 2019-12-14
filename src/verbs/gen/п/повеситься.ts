import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повеситься: PerfectVerb = {
  name: Word('повеситься', 3),
  singular1stPerson: Word('повешусь', 3),
  singular2ndPerson: Word('повесишься', 3),
  singular3rdPerson: Word('повесится', 3),
  plural1stPerson: Word('повесимся', 3),
  plural2ndPerson: Word('повеситесь', 3),
  plural3rdPerson: Word('повесятся', 3),
  masculinePast: Word('повесился', 3),
  femininePast: Word('повесилась', 3),
  neuterPast: Word('повесилось', 3),
  pluralPast: Word('повесились', 3),
  imperativeInformal: Word('повесься', 3),
  imperativeFormal: Word('повесьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(повеситься.name.text, повеситься);

export { повеситься };