import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окатиться: PerfectVerb = {
  name: Word('окатиться', 4),
  singular1stPerson: Word('окачусь', 4),
  singular2ndPerson: Word('окатишься', 2),
  singular3rdPerson: Word('окатится', 2),
  plural1stPerson: Word('окатимся', 2),
  plural2ndPerson: Word('окатитесь', 2),
  plural3rdPerson: Word('окатятся', 2),
  masculinePast: Word('окатился', 4),
  femininePast: Word('окатилась', 4),
  neuterPast: Word('окатилось', 4),
  pluralPast: Word('окатились', 4),
  imperativeInformal: Word('окатись', 4),
  imperativeFormal: Word('окатитесь', 4),
  imperfect: [],
};

perfectVerbs.set(окатиться.name.text, окатиться);

export { окатиться };