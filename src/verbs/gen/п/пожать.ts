import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожать: PerfectVerb = {
  name: Word('пожать', 3),
  singular1stPerson: Word('пожму', 4),
  singular2ndPerson: Word('пожмёшь', 4),
  singular3rdPerson: Word('пожмёт', 4),
  plural1stPerson: Word('пожмём', 4),
  plural2ndPerson: Word('пожмёте', 4),
  plural3rdPerson: Word('пожмут', 4),
  masculinePast: Word('пожал', 3),
  femininePast: Word('пожала', 3),
  neuterPast: Word('пожало', 3),
  pluralPast: Word('пожали', 3),
  imperativeInformal: Word('пожми', 4),
  imperativeFormal: Word('пожмите', 4),
  imperfect: ['жать','пожимать'],
};

perfectVerbs.set(пожать.name.text, пожать);

export { пожать };