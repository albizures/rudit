import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрямляться: PerfectVerb = {
  name: Word('распрямляться', 8),
  singular1stPerson: Word('распрямляюсь', 8),
  singular2ndPerson: Word('распрямляешься', 8),
  singular3rdPerson: Word('распрямляется', 8),
  plural1stPerson: Word('распрямляемся', 8),
  plural2ndPerson: Word('распрямляетесь', 8),
  plural3rdPerson: Word('распрямляются', 8),
  masculinePast: Word('распрямлялся', 8),
  femininePast: Word('распрямлялась', 8),
  neuterPast: Word('распрямлялось', 8),
  pluralPast: Word('распрямлялись', 8),
  imperativeInformal: Word('распрямляйся', 8),
  imperativeFormal: Word('распрямляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(распрямляться.name.text, распрямляться);

export { распрямляться };