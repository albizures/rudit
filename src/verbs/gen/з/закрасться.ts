import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрасться: PerfectVerb = {
  name: Word('закрасться', 4),
  singular1stPerson: Word('закрадусь', 6),
  singular2ndPerson: Word('закрадёшься', 6),
  singular3rdPerson: Word('закрадётся', 6),
  plural1stPerson: Word('закрадёмся', 6),
  plural2ndPerson: Word('закрадётесь', 6),
  plural3rdPerson: Word('закрадутся', 6),
  masculinePast: Word('закрался', 4),
  femininePast: Word('закралась', 4),
  neuterPast: Word('закралось', 4),
  pluralPast: Word('закрались', 4),
  imperativeInformal: Word('закрадись', 6),
  imperativeFormal: Word('закрадитесь', 6),
  imperfect: [],
};

perfectVerbs.set(закрасться.name.text, закрасться);

export { закрасться };