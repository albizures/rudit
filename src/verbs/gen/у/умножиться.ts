import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умножиться: PerfectVerb = {
  name: Word('умножиться', 3),
  singular1stPerson: Word('умножусь', 3),
  singular2ndPerson: Word('умножишься', 3),
  singular3rdPerson: Word('умножится', 3),
  plural1stPerson: Word('умножимся', 3),
  plural2ndPerson: Word('умножитесь', 3),
  plural3rdPerson: Word('умножатся', 3),
  masculinePast: Word('умножился', 3),
  femininePast: Word('умножилась', 3),
  neuterPast: Word('умножилось', 3),
  pluralPast: Word('умножились', 3),
  imperativeInformal: Word('умножься', 3),
  imperativeFormal: Word('умножьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(умножиться.name.text, умножиться);

export { умножиться };