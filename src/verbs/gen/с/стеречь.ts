import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стеречь: PerfectVerb = {
  name: Word('стеречь', 4),
  singular1stPerson: Word('стерегу', 6),
  singular2ndPerson: Word('стережёшь', 6),
  singular3rdPerson: Word('стережёт', 6),
  plural1stPerson: Word('стережём', 6),
  plural2ndPerson: Word('стережёте', 6),
  plural3rdPerson: Word('стерегут', 6),
  masculinePast: Word('стерёг', 4),
  femininePast: Word('стерегла', 7),
  neuterPast: Word('стерегло', 7),
  pluralPast: Word('стерегли', 7),
  imperativeInformal: Word('стереги', 6),
  imperativeFormal: Word('стерегите', 6),
  imperfect: [],
};

perfectVerbs.set(стеречь.name.text, стеречь);

export { стеречь };