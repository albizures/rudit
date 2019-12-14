import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обломиться: PerfectVerb = {
  name: Word('обломиться', 5),
  singular1stPerson: Word('обломлюсь', 6),
  singular2ndPerson: Word('обломишься', 3),
  singular3rdPerson: Word('обломится', 3),
  plural1stPerson: Word('обломимся', 3),
  plural2ndPerson: Word('обломитесь', 3),
  plural3rdPerson: Word('обломятся', 3),
  masculinePast: Word('обломился', 5),
  femininePast: Word('обломилась', 5),
  neuterPast: Word('обломилось', 5),
  pluralPast: Word('обломились', 5),
  imperativeInformal: Word('обломись', 5),
  imperativeFormal: Word('обломитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обломиться.name.text, обломиться);

export { обломиться };