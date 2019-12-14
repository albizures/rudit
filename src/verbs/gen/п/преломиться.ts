import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преломиться: PerfectVerb = {
  name: Word('преломиться', 6),
  singular1stPerson: Word('преломлюсь', 7),
  singular2ndPerson: Word('преломишься', 4),
  singular3rdPerson: Word('преломится', 4),
  plural1stPerson: Word('преломимся', 4),
  plural2ndPerson: Word('преломитесь', 4),
  plural3rdPerson: Word('преломятся', 4),
  masculinePast: Word('преломился', 6),
  femininePast: Word('преломилась', 6),
  neuterPast: Word('преломилось', 6),
  pluralPast: Word('преломились', 6),
  imperativeInformal: Word('преломись', 6),
  imperativeFormal: Word('преломитесь', 6),
  imperfect: [],
};

perfectVerbs.set(преломиться.name.text, преломиться);

export { преломиться };