import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклониться: PerfectVerb = {
  name: Word('отклониться', 6),
  singular1stPerson: Word('отклонюсь', 6),
  singular2ndPerson: Word('отклонишься', 4),
  singular3rdPerson: Word('отклонится', 4),
  plural1stPerson: Word('отклонимся', 4),
  plural2ndPerson: Word('отклонитесь', 4),
  plural3rdPerson: Word('отклонятся', 4),
  masculinePast: Word('отклонился', 6),
  femininePast: Word('отклонилась', 6),
  neuterPast: Word('отклонилось', 6),
  pluralPast: Word('отклонились', 6),
  imperativeInformal: Word('отклонись', 6),
  imperativeFormal: Word('отклонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отклониться.name.text, отклониться);

export { отклониться };