import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попасться: PerfectVerb = {
  name: Word('попасться', 3),
  singular1stPerson: Word('попадусь', 5),
  singular2ndPerson: Word('попадёшься', 3),
  singular3rdPerson: Word('попадётся', 3),
  plural1stPerson: Word('попадёмся', 3),
  plural2ndPerson: Word('попадётесь', 3),
  plural3rdPerson: Word('попадутся', 5),
  masculinePast: Word('попался', 3),
  femininePast: Word('попалась', 3),
  neuterPast: Word('попалось', 3),
  pluralPast: Word('попались', 3),
  imperativeInformal: Word('попадись', 5),
  imperativeFormal: Word('попадитесь', 5),
  imperfect: [],
};

perfectVerbs.set(попасться.name.text, попасться);

export { попасться };