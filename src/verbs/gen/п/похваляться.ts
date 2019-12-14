import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похваляться: PerfectVerb = {
  name: Word('похваляться', 6),
  singular1stPerson: Word('похваляюсь', 6),
  singular2ndPerson: Word('похваляешься', 6),
  singular3rdPerson: Word('похваляется', 6),
  plural1stPerson: Word('похваляемся', 6),
  plural2ndPerson: Word('похваляетесь', 6),
  plural3rdPerson: Word('похваляются', 6),
  masculinePast: Word('похвалялся', 6),
  femininePast: Word('похвалялась', 6),
  neuterPast: Word('похвалялось', 6),
  pluralPast: Word('похвалялись', 6),
  imperativeInformal: Word('похваляйся', 6),
  imperativeFormal: Word('похваляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(похваляться.name.text, похваляться);

export { похваляться };