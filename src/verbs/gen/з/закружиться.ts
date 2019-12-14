import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закружиться: PerfectVerb = {
  name: Word('закружиться', 6),
  singular1stPerson: Word('закружусь', 6),
  singular2ndPerson: Word('закружишься', 4),
  singular3rdPerson: Word('закружится', 4),
  plural1stPerson: Word('закружимся', 4),
  plural2ndPerson: Word('закружитесь', 4),
  plural3rdPerson: Word('закружатся', 4),
  masculinePast: Word('закружился', 6),
  femininePast: Word('закружилась', 6),
  neuterPast: Word('закружилось', 6),
  pluralPast: Word('закружились', 6),
  imperativeInformal: Word('закружись', 6),
  imperativeFormal: Word('закружитесь', 6),
  imperfect: [],
};

perfectVerbs.set(закружиться.name.text, закружиться);

export { закружиться };