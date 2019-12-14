import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соткать: PerfectVerb = {
  name: Word('соткать', 4),
  singular1stPerson: Word('сотку', 4),
  singular2ndPerson: Word('соткёшь', 1),
  singular3rdPerson: Word('соткёт', 1),
  plural1stPerson: Word('соткём', 1),
  plural2ndPerson: Word('соткёте', 6),
  plural3rdPerson: Word('соткут', 4),
  masculinePast: Word('соткал', 4),
  femininePast: Word('соткала', 6),
  neuterPast: Word('соткало', 4),
  pluralPast: Word('соткали', 4),
  imperativeInformal: Word('сотки', 4),
  imperativeFormal: Word('сотките', 4),
  imperfect: ['ткать'],
};

perfectVerbs.set(соткать.name.text, соткать);

export { соткать };