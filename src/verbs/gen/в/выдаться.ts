import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдаться: PerfectVerb = {
  name: Word('выдаться', 1),
  singular1stPerson: Word('выдамся', 1),
  singular2ndPerson: Word('выдашься', 1),
  singular3rdPerson: Word('выдастся', 1),
  plural1stPerson: Word('выдадимся', 1),
  plural2ndPerson: Word('выдадитесь', 1),
  plural3rdPerson: Word('выдадутся', 1),
  masculinePast: Word('выдался', 1),
  femininePast: Word('выдалась', 1),
  neuterPast: Word('выдалось', 1),
  pluralPast: Word('выдались', 1),
  imperativeInformal: Word('выдайся', 1),
  imperativeFormal: Word('выдайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выдаться.name.text, выдаться);

export { выдаться };