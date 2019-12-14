import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выломиться: PerfectVerb = {
  name: Word('выломиться', 1),
  singular1stPerson: Word('выломлюсь', 1),
  singular2ndPerson: Word('выломишься', 1),
  singular3rdPerson: Word('выломится', 1),
  plural1stPerson: Word('выломимся', 1),
  plural2ndPerson: Word('выломитесь', 1),
  plural3rdPerson: Word('выломятся', 1),
  masculinePast: Word('выломился', 1),
  femininePast: Word('выломилась', 1),
  neuterPast: Word('выломилось', 1),
  pluralPast: Word('выломились', 1),
  imperativeInformal: Word('выломись', 1),
  imperativeFormal: Word('выломитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выломиться.name.text, выломиться);

export { выломиться };