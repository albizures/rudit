import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расти: PerfectVerb = {
  name: Word('расти', 4),
  singular1stPerson: Word('расту', 4),
  singular2ndPerson: Word('растёшь', 4),
  singular3rdPerson: Word('растёт', 4),
  plural1stPerson: Word('растём', 4),
  plural2ndPerson: Word('растёте', 4),
  plural3rdPerson: Word('растут', 4),
  masculinePast: Word('рос', 1),
  femininePast: Word('росла', 4),
  neuterPast: Word('росло', 4),
  pluralPast: Word('росли', 4),
  imperativeInformal: Word('расти', 4),
  imperativeFormal: Word('растите', 4),
  imperfect: ['вырасти'],
};

perfectVerbs.set(расти.name.text, расти);

export { расти };