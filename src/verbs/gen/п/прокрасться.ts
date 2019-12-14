import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокрасться: PerfectVerb = {
  name: Word('прокрасться', 5),
  singular1stPerson: Word('прокрадусь', 7),
  singular2ndPerson: Word('прокрадёшься', 5),
  singular3rdPerson: Word('прокрадётся', 5),
  plural1stPerson: Word('прокрадёмся', 5),
  plural2ndPerson: Word('прокрадётесь', 5),
  plural3rdPerson: Word('прокрадутся', 7),
  masculinePast: Word('прокрался', 5),
  femininePast: Word('прокралась', 5),
  neuterPast: Word('прокралось', 5),
  pluralPast: Word('прокрались', 5),
  imperativeInformal: Word('прокрадись', 7),
  imperativeFormal: Word('прокрадитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прокрасться.name.text, прокрасться);

export { прокрасться };