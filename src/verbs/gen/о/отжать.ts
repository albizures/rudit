import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжать: PerfectVerb = {
  name: Word('отжать', 3),
  singular1stPerson: Word('отожму', 5),
  singular2ndPerson: Word('отожмёшь', 0),
  singular3rdPerson: Word('отожмёт', 0),
  plural1stPerson: Word('отожмём', 0),
  plural2ndPerson: Word('отожмёте', 7),
  plural3rdPerson: Word('отожмут', 5),
  masculinePast: Word('отжал', 3),
  femininePast: Word('отжала', 3),
  neuterPast: Word('отжало', 3),
  pluralPast: Word('отжали', 3),
  imperativeInformal: Word('отожми', 5),
  imperativeFormal: Word('отожмите', 5),
  imperfect: [],
};

perfectVerbs.set(отжать.name.text, отжать);

export { отжать };