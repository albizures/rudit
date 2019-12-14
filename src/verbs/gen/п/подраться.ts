import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подраться: PerfectVerb = {
  name: Word('подраться', 4),
  singular1stPerson: Word('подерусь', 5),
  singular2ndPerson: Word('подерёшься', 3),
  singular3rdPerson: Word('подерётся', 3),
  plural1stPerson: Word('подерёмся', 3),
  plural2ndPerson: Word('подерётесь', 3),
  plural3rdPerson: Word('подерутся', 5),
  masculinePast: Word('подрался', 4),
  femininePast: Word('подралась', 6),
  neuterPast: Word('подралось//подрало'сь', 4),
  pluralPast: Word('подрались//подрали'сь', 4),
  imperativeInformal: Word('подерись', 5),
  imperativeFormal: Word('подеритесь', 5),
  imperfect: [],
};

perfectVerbs.set(подраться.name.text, подраться);

export { подраться };