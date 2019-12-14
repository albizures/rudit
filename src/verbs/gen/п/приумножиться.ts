import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приумножиться: PerfectVerb = {
  name: Word('приумножиться', 6),
  singular1stPerson: Word('приумножусь', 6),
  singular2ndPerson: Word('приумножишься', 6),
  singular3rdPerson: Word('приумножится', 6),
  plural1stPerson: Word('приумножимся', 6),
  plural2ndPerson: Word('приумножитесь', 6),
  plural3rdPerson: Word('приумножатся', 6),
  masculinePast: Word('приумножился', 6),
  femininePast: Word('приумножилась', 6),
  neuterPast: Word('приумножилось', 6),
  pluralPast: Word('приумножились', 6),
  imperativeInformal: Word('приумножься', 6),
  imperativeFormal: Word('приумножьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(приумножиться.name.text, приумножиться);

export { приумножиться };