import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжать: PerfectVerb = {
  name: Word('разжать', 4),
  singular1stPerson: Word('разожму', 6),
  singular2ndPerson: Word('разожмёшь', 6),
  singular3rdPerson: Word('разожмёт', 6),
  plural1stPerson: Word('разожмём', 6),
  plural2ndPerson: Word('разожмёте', 6),
  plural3rdPerson: Word('разожмут', 6),
  masculinePast: Word('разжал', 4),
  femininePast: Word('разжала', 4),
  neuterPast: Word('разжало', 4),
  pluralPast: Word('разжали', 4),
  imperativeInformal: Word('разожми', 6),
  imperativeFormal: Word('разожмите', 6),
  imperfect: [],
};

perfectVerbs.set(разжать.name.text, разжать);

export { разжать };