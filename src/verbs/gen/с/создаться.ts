import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const создаться: PerfectVerb = {
  name: Word('создаться', 4),
  singular1stPerson: Word('создамся', 4),
  singular2ndPerson: Word('создашься', 4),
  singular3rdPerson: Word('создастся', 4),
  plural1stPerson: Word('создадимся', 6),
  plural2ndPerson: Word('создадитесь', 6),
  plural3rdPerson: Word('создадутся', 6),
  masculinePast: Word('создался', 4),
  femininePast: Word('создалась', 6),
  neuterPast: Word('создалось//создало'сь', 4),
  pluralPast: Word('создались//создали'сь', 4),
  imperativeInformal: Word('создайся', 4),
  imperativeFormal: Word('создайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(создаться.name.text, создаться);

export { создаться };