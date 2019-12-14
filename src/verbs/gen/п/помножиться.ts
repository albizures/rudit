import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помножиться: PerfectVerb = {
  name: Word('помножиться', 4),
  singular1stPerson: Word('помножусь', 4),
  singular2ndPerson: Word('помножишься', 4),
  singular3rdPerson: Word('помножится', 4),
  plural1stPerson: Word('помножимся', 4),
  plural2ndPerson: Word('помножитесь', 4),
  plural3rdPerson: Word('помножатся', 4),
  masculinePast: Word('помножился', 4),
  femininePast: Word('помножилась', 4),
  neuterPast: Word('помножилось', 4),
  pluralPast: Word('помножились', 4),
  imperativeInformal: Word('помножься', 4),
  imperativeFormal: Word('помножьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(помножиться.name.text, помножиться);

export { помножиться };