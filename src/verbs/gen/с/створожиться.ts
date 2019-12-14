import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створожиться: PerfectVerb = {
  name: Word('створожиться', 5),
  singular1stPerson: Word('створожусь', 5),
  singular2ndPerson: Word('створожишься', 5),
  singular3rdPerson: Word('створожится', 5),
  plural1stPerson: Word('створожимся', 5),
  plural2ndPerson: Word('створожитесь', 5),
  plural3rdPerson: Word('створожатся', 5),
  masculinePast: Word('створожился', 5),
  femininePast: Word('створожилась', 5),
  neuterPast: Word('створожилось', 5),
  pluralPast: Word('створожились', 5),
  imperativeInformal: Word('створожься', 5),
  imperativeFormal: Word('створожьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(створожиться.name.text, створожиться);

export { створожиться };