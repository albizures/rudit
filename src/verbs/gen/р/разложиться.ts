import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разложиться: PerfectVerb = {
  name: Word('разложиться', 6),
  singular1stPerson: Word('разложусь', 6),
  singular2ndPerson: Word('разложишься', 4),
  singular3rdPerson: Word('разложится', 4),
  plural1stPerson: Word('разложимся', 4),
  plural2ndPerson: Word('разложитесь', 4),
  plural3rdPerson: Word('разложатся', 4),
  masculinePast: Word('разложился', 6),
  femininePast: Word('разложилась', 6),
  neuterPast: Word('разложилось', 6),
  pluralPast: Word('разложились', 6),
  imperativeInformal: Word('разложись', 6),
  imperativeFormal: Word('разложитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разложиться.name.text, разложиться);

export { разложиться };