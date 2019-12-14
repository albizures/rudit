import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сломиться: PerfectVerb = {
  name: Word('сломиться', 4),
  singular1stPerson: Word('сломлюсь', 5),
  singular2ndPerson: Word('сломишься', 2),
  singular3rdPerson: Word('сломится', 2),
  plural1stPerson: Word('сломимся', 2),
  plural2ndPerson: Word('сломитесь', 2),
  plural3rdPerson: Word('сломятся', 2),
  masculinePast: Word('сломился', 4),
  femininePast: Word('сломилась', 4),
  neuterPast: Word('сломилось', 4),
  pluralPast: Word('сломились', 4),
  imperativeInformal: Word('сломись', 4),
  imperativeFormal: Word('сломитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сломиться.name.text, сломиться);

export { сломиться };