import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смять: PerfectVerb = {
  name: Word('смять', 2),
  singular1stPerson: Word('сомну', 4),
  singular2ndPerson: Word('сомнёшь', 4),
  singular3rdPerson: Word('сомнёт', 4),
  plural1stPerson: Word('сомнём', 4),
  plural2ndPerson: Word('сомнёте', 4),
  plural3rdPerson: Word('сомнут', 4),
  masculinePast: Word('смял', 2),
  femininePast: Word('смяла', 2),
  neuterPast: Word('смяло', 2),
  pluralPast: Word('смяли', 2),
  imperativeInformal: Word('сомни', 4),
  imperativeFormal: Word('сомните', 4),
  imperfect: [],
};

perfectVerbs.set(смять.name.text, смять);

export { смять };