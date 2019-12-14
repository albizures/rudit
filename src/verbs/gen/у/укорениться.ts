import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укорениться: PerfectVerb = {
  name: Word('укорениться', 6),
  singular1stPerson: Word('укоренюсь', 6),
  singular2ndPerson: Word('укоренишься', 6),
  singular3rdPerson: Word('укоренится', 6),
  plural1stPerson: Word('укоренимся', 6),
  plural2ndPerson: Word('укоренитесь', 6),
  plural3rdPerson: Word('укоренятся', 6),
  masculinePast: Word('укоренился', 6),
  femininePast: Word('укоренилась', 6),
  neuterPast: Word('укоренилось', 6),
  pluralPast: Word('укоренились', 6),
  imperativeInformal: Word('укоренись', 6),
  imperativeFormal: Word('укоренитесь', 6),
  imperfect: [],
};

perfectVerbs.set(укорениться.name.text, укорениться);

export { укорениться };