import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжать: PerfectVerb = {
  name: Word('обжать', 3),
  singular1stPerson: Word('обожму', 5),
  singular2ndPerson: Word('обожмёшь', 0),
  singular3rdPerson: Word('обожмёт', 0),
  plural1stPerson: Word('обожмём', 0),
  plural2ndPerson: Word('обожмёте', 7),
  plural3rdPerson: Word('обожмут', 5),
  masculinePast: Word('обжал', 3),
  femininePast: Word('обжала', 3),
  neuterPast: Word('обжало', 3),
  pluralPast: Word('обжали', 3),
  imperativeInformal: Word('обожми', 5),
  imperativeFormal: Word('обожмите', 5),
  imperfect: [],
};

perfectVerbs.set(обжать.name.text, обжать);

export { обжать };