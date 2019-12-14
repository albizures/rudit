import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдаться: PerfectVerb = {
  name: Word('вдаться', 2),
  singular1stPerson: Word('вдамся', 2),
  singular2ndPerson: Word('вдашься', 2),
  singular3rdPerson: Word('вдастся', 2),
  plural1stPerson: Word('вдадимся', 4),
  plural2ndPerson: Word('вдадитесь', 4),
  plural3rdPerson: Word('вдадутся', 4),
  masculinePast: Word('вдался', 2),
  femininePast: Word('вдалась', 4),
  neuterPast: Word('вдалось//вдало'сь', 2),
  pluralPast: Word('вдались//вдали'сь', 2),
  imperativeInformal: Word('вдайся', 2),
  imperativeFormal: Word('вдайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вдаться.name.text, вдаться);

export { вдаться };