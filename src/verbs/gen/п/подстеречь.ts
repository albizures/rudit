import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстеречь: PerfectVerb = {
  name: Word('подстеречь', 7),
  singular1stPerson: Word('подстерегу', 9),
  singular2ndPerson: Word('подстережёшь', 9),
  singular3rdPerson: Word('подстережёт', 9),
  plural1stPerson: Word('подстережём', 9),
  plural2ndPerson: Word('подстережёте', 9),
  plural3rdPerson: Word('подстерегут', 9),
  masculinePast: Word('подстерёг', 7),
  femininePast: Word('подстерегла', 10),
  neuterPast: Word('подстерегло', 10),
  pluralPast: Word('подстерегли', 10),
  imperativeInformal: Word('подстереги', 9),
  imperativeFormal: Word('подстерегите', 9),
  imperfect: [],
};

perfectVerbs.set(подстеречь.name.text, подстеречь);

export { подстеречь };