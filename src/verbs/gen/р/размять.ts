import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размять: PerfectVerb = {
  name: Word('размять', 4),
  singular1stPerson: Word('разомну', 6),
  singular2ndPerson: Word('разомнёшь', 1),
  singular3rdPerson: Word('разомнёт', 1),
  plural1stPerson: Word('разомнём', 1),
  plural2ndPerson: Word('разомнёте', 1),
  plural3rdPerson: Word('разомнут', 6),
  masculinePast: Word('размял', 4),
  femininePast: Word('размяла', 4),
  neuterPast: Word('размяло', 4),
  pluralPast: Word('размяли', 4),
  imperativeInformal: Word('разомни', 6),
  imperativeFormal: Word('разомните', 6),
  imperfect: [],
};

perfectVerbs.set(размять.name.text, размять);

export { размять };