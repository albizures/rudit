import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поклониться: PerfectVerb = {
  name: Word('поклониться', 6),
  singular1stPerson: Word('поклонюсь', 6),
  singular2ndPerson: Word('поклонишься', 4),
  singular3rdPerson: Word('поклонится', 4),
  plural1stPerson: Word('поклонимся', 4),
  plural2ndPerson: Word('поклонитесь', 4),
  plural3rdPerson: Word('поклонятся', 4),
  masculinePast: Word('поклонился', 6),
  femininePast: Word('поклонилась', 6),
  neuterPast: Word('поклонилось', 6),
  pluralPast: Word('поклонились', 6),
  imperativeInformal: Word('поклонись', 6),
  imperativeFormal: Word('поклонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поклониться.name.text, поклониться);

export { поклониться };