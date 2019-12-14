import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сваляться: PerfectVerb = {
  name: Word('сваляться', 4),
  singular1stPerson: Word('сваляюсь', 4),
  singular2ndPerson: Word('сваляешься', 4),
  singular3rdPerson: Word('сваляется', 4),
  plural1stPerson: Word('сваляемся', 4),
  plural2ndPerson: Word('сваляетесь', 4),
  plural3rdPerson: Word('сваляются', 4),
  masculinePast: Word('свалялся', 4),
  femininePast: Word('свалялась', 4),
  neuterPast: Word('свалялось', 4),
  pluralPast: Word('свалялись', 4),
  imperativeInformal: Word('сваляйся', 4),
  imperativeFormal: Word('сваляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сваляться.name.text, сваляться);

export { сваляться };