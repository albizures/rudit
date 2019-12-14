import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдаться: PerfectVerb = {
  name: Word('отдаться', 3),
  singular1stPerson: Word('отдамся', 3),
  singular2ndPerson: Word('отдашься', 3),
  singular3rdPerson: Word('отдастся', 3),
  plural1stPerson: Word('отдадимся', 5),
  plural2ndPerson: Word('отдадитесь', 5),
  plural3rdPerson: Word('отдадутся', 5),
  masculinePast: Word('отдался', 3),
  femininePast: Word('отдалась', 5),
  neuterPast: Word('отдалось//отдало'сь', 3),
  pluralPast: Word('отдались//отдали'сь', 3),
  imperativeInformal: Word('отдайся', 3),
  imperativeFormal: Word('отдайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отдаться.name.text, отдаться);

export { отдаться };