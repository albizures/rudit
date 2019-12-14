import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преломляться: PerfectVerb = {
  name: Word('преломляться', 7),
  singular1stPerson: Word('преломляюсь', 7),
  singular2ndPerson: Word('преломляешься', 7),
  singular3rdPerson: Word('преломляется', 7),
  plural1stPerson: Word('преломляемся', 7),
  plural2ndPerson: Word('преломляетесь', 7),
  plural3rdPerson: Word('преломляются', 7),
  masculinePast: Word('преломлялся', 7),
  femininePast: Word('преломлялась', 7),
  neuterPast: Word('преломлялось', 7),
  pluralPast: Word('преломлялись', 7),
  imperativeInformal: Word('преломляйся', 7),
  imperativeFormal: Word('преломляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(преломляться.name.text, преломляться);

export { преломляться };