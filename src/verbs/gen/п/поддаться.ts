import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддаться: PerfectVerb = {
  name: Word('поддаться', 4),
  singular1stPerson: Word('поддамся', 4),
  singular2ndPerson: Word('поддашься', 4),
  singular3rdPerson: Word('поддастся', 4),
  plural1stPerson: Word('поддадимся', 6),
  plural2ndPerson: Word('поддадитесь', 6),
  plural3rdPerson: Word('поддадутся', 6),
  masculinePast: Word('поддался', 4),
  femininePast: Word('поддалась', 6),
  neuterPast: Word('поддалось//поддало'сь', 4),
  pluralPast: Word('поддались//поддали'сь', 4),
  imperativeInformal: Word('поддайся', 4),
  imperativeFormal: Word('поддайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поддаться.name.text, поддаться);

export { поддаться };