import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подобраться: PerfectVerb = {
  name: Word('подобраться', 6),
  singular1stPerson: Word('подберусь', 6),
  singular2ndPerson: Word('подберёшься', 4),
  singular3rdPerson: Word('подберётся', 4),
  plural1stPerson: Word('подберёмся', 4),
  plural2ndPerson: Word('подберётесь', 4),
  plural3rdPerson: Word('подберутся', 6),
  masculinePast: Word('подобрался', 6),
  femininePast: Word('подобралась', 8),
  neuterPast: Word('подобралось//подобрало'сь', 6),
  pluralPast: Word('подобрались//подобрали'сь', 6),
  imperativeInformal: Word('подберись', 6),
  imperativeFormal: Word('подберитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подобраться.name.text, подобраться);

export { подобраться };