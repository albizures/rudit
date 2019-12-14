import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посторониться: PerfectVerb = {
  name: Word('посторониться', 8),
  singular1stPerson: Word('посторонюсь', 8),
  singular2ndPerson: Word('посторонишься', 8),
  singular3rdPerson: Word('посторонится', 8),
  plural1stPerson: Word('посторонимся', 8),
  plural2ndPerson: Word('посторонитесь', 8),
  plural3rdPerson: Word('посторонятся', 8),
  masculinePast: Word('посторонился', 8),
  femininePast: Word('посторонилась', 8),
  neuterPast: Word('посторонилось', 8),
  pluralPast: Word('посторонились', 8),
  imperativeInformal: Word('посторонись', 8),
  imperativeFormal: Word('посторонитесь', 8),
  imperfect: [],
};

perfectVerbs.set(посторониться.name.text, посторониться);

export { посторониться };