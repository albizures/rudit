import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поваляться: PerfectVerb = {
  name: Word('поваляться', 5),
  singular1stPerson: Word('поваляюсь', 5),
  singular2ndPerson: Word('поваляешься', 5),
  singular3rdPerson: Word('поваляется', 5),
  plural1stPerson: Word('поваляемся', 5),
  plural2ndPerson: Word('поваляетесь', 5),
  plural3rdPerson: Word('поваляются', 5),
  masculinePast: Word('повалялся', 5),
  femininePast: Word('повалялась', 5),
  neuterPast: Word('повалялось', 5),
  pluralPast: Word('повалялись', 5),
  imperativeInformal: Word('поваляйся', 5),
  imperativeFormal: Word('поваляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поваляться.name.text, поваляться);

export { поваляться };