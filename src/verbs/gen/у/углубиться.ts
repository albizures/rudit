import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const углубиться: PerfectVerb = {
  name: Word('углубиться', 5),
  singular1stPerson: Word('углублюсь', 6),
  singular2ndPerson: Word('углубишься', 5),
  singular3rdPerson: Word('углубится', 5),
  plural1stPerson: Word('углубимся', 5),
  plural2ndPerson: Word('углубитесь', 5),
  plural3rdPerson: Word('углубятся', 5),
  masculinePast: Word('углубился', 5),
  femininePast: Word('углубилась', 5),
  neuterPast: Word('углубилось', 5),
  pluralPast: Word('углубились', 5),
  imperativeInformal: Word('углубись', 5),
  imperativeFormal: Word('углубитесь', 5),
  imperfect: [],
};

perfectVerbs.set(углубиться.name.text, углубиться);

export { углубиться };