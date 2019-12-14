import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбраняться: PerfectVerb = {
  name: Word('возбраняться', 7),
  singular1stPerson: Word('возбраняюсь', 7),
  singular2ndPerson: Word('возбраняешься', 7),
  singular3rdPerson: Word('возбраняется', 7),
  plural1stPerson: Word('возбраняемся', 7),
  plural2ndPerson: Word('возбраняетесь', 7),
  plural3rdPerson: Word('возбраняются', 7),
  masculinePast: Word('возбранялся', 7),
  femininePast: Word('возбранялась', 7),
  neuterPast: Word('возбранялось', 7),
  pluralPast: Word('возбранялись', 7),
  imperativeInformal: Word('возбраняйся', 7),
  imperativeFormal: Word('возбраняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(возбраняться.name.text, возбраняться);

export { возбраняться };