import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возобновляться: PerfectVerb = {
  name: Word('возобновляться', 9),
  singular1stPerson: Word('возобновляюсь', 9),
  singular2ndPerson: Word('возобновляешься', 9),
  singular3rdPerson: Word('возобновляется', 9),
  plural1stPerson: Word('возобновляемся', 9),
  plural2ndPerson: Word('возобновляетесь', 9),
  plural3rdPerson: Word('возобновляются', 9),
  masculinePast: Word('возобновлялся', 9),
  femininePast: Word('возобновлялась', 9),
  neuterPast: Word('возобновлялось', 9),
  pluralPast: Word('возобновлялись', 9),
  imperativeInformal: Word('возобновляйся', 9),
  imperativeFormal: Word('возобновляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(возобновляться.name.text, возобновляться);

export { возобновляться };