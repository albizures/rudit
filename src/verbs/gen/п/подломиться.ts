import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подломиться: PerfectVerb = {
  name: Word('подломиться', 6),
  singular1stPerson: Word('подломлюсь', 7),
  singular2ndPerson: Word('подломишься', 4),
  singular3rdPerson: Word('подломится', 4),
  plural1stPerson: Word('подломимся', 4),
  plural2ndPerson: Word('подломитесь', 4),
  plural3rdPerson: Word('подломятся', 4),
  masculinePast: Word('подломился', 6),
  femininePast: Word('подломилась', 6),
  neuterPast: Word('подломилось', 6),
  pluralPast: Word('подломились', 6),
  imperativeInformal: Word('подломись', 6),
  imperativeFormal: Word('подломитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подломиться.name.text, подломиться);

export { подломиться };