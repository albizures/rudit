import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разломиться: PerfectVerb = {
  name: Word('разломиться', 6),
  singular1stPerson: Word('разломлюсь', 7),
  singular2ndPerson: Word('разломишься', 4),
  singular3rdPerson: Word('разломится', 4),
  plural1stPerson: Word('разломимся', 4),
  plural2ndPerson: Word('разломитесь', 4),
  plural3rdPerson: Word('разломятся', 4),
  masculinePast: Word('разломился', 6),
  femininePast: Word('разломилась', 6),
  neuterPast: Word('разломилось', 6),
  pluralPast: Word('разломились', 6),
  imperativeInformal: Word('разломись', 6),
  imperativeFormal: Word('разломитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разломиться.name.text, разломиться);

export { разломиться };