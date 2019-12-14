import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заваляться: PerfectVerb = {
  name: Word('заваляться', 5),
  singular1stPerson: Word('заваляюсь', 5),
  singular2ndPerson: Word('заваляешься', 5),
  singular3rdPerson: Word('заваляется', 5),
  plural1stPerson: Word('заваляемся', 5),
  plural2ndPerson: Word('заваляетесь', 5),
  plural3rdPerson: Word('заваляются', 5),
  masculinePast: Word('завалялся', 5),
  femininePast: Word('завалялась', 5),
  neuterPast: Word('завалялось', 5),
  pluralPast: Word('завалялись', 5),
  imperativeInformal: Word('заваляйся', 5),
  imperativeFormal: Word('заваляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заваляться.name.text, заваляться);

export { заваляться };