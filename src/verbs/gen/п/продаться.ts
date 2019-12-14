import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продаться: PerfectVerb = {
  name: Word('продаться', 4),
  singular1stPerson: Word('продамся', 4),
  singular2ndPerson: Word('продашься', 4),
  singular3rdPerson: Word('продастся', 4),
  plural1stPerson: Word('продадимся', 6),
  plural2ndPerson: Word('продадитесь', 6),
  plural3rdPerson: Word('продадутся', 6),
  masculinePast: Word('продался', 4),
  femininePast: Word('продалась', 6),
  neuterPast: Word('продалось//продало'сь', 4),
  pluralPast: Word('продались//продали'сь', 4),
  imperativeInformal: Word('продайся', 4),
  imperativeFormal: Word('продайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(продаться.name.text, продаться);

export { продаться };