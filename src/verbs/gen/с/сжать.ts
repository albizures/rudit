import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжать: PerfectVerb = {
  name: Word('сжать', 2),
  singular1stPerson: Word('сожму', 4),
  singular2ndPerson: Word('сожмёшь', 1),
  singular3rdPerson: Word('сожмёт', 1),
  plural1stPerson: Word('сожмём', 1),
  plural2ndPerson: Word('сожмёте', 6),
  plural3rdPerson: Word('сожмут', 4),
  masculinePast: Word('сжал', 2),
  femininePast: Word('сжала', 2),
  neuterPast: Word('сжало', 2),
  pluralPast: Word('сжали', 2),
  imperativeInformal: Word('сожми', 4),
  imperativeFormal: Word('сожмите', 4),
  imperfect: ['сжимать','жать'],
};

perfectVerbs.set(сжать.name.text, сжать);

export { сжать };