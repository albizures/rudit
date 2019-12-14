import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загордиться: PerfectVerb = {
  name: Word('загордиться', 6),
  singular1stPerson: Word('загоржусь', 6),
  singular2ndPerson: Word('загордишься', 6),
  singular3rdPerson: Word('загордится', 6),
  plural1stPerson: Word('загордимся', 6),
  plural2ndPerson: Word('загордитесь', 6),
  plural3rdPerson: Word('загордятся', 6),
  masculinePast: Word('загордился', 6),
  femininePast: Word('загордилась', 6),
  neuterPast: Word('загордилось', 6),
  pluralPast: Word('загордились', 6),
  imperativeInformal: Word('загордись', 6),
  imperativeFormal: Word('загордитесь', 6),
  imperfect: [],
};

perfectVerbs.set(загордиться.name.text, загордиться);

export { загордиться };