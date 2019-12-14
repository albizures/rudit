import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const познаваться: PerfectVerb = {
  name: Word('познаваться', 6),
  singular1stPerson: Word('познаюсь', 5),
  singular2ndPerson: Word('познаёшься', 4),
  singular3rdPerson: Word('познаётся', 4),
  plural1stPerson: Word('познаёмся', 4),
  plural2ndPerson: Word('познаётесь', 4),
  plural3rdPerson: Word('познаются', 5),
  masculinePast: Word('познавался', 6),
  femininePast: Word('познавалась', 6),
  neuterPast: Word('познавалось', 6),
  pluralPast: Word('познавались', 6),
  imperativeInformal: Word('познавайся', 6),
  imperativeFormal: Word('познавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(познаваться.name.text, познаваться);

export { познаваться };