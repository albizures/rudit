import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъезжать: PerfectVerb = {
  name: Word('разъезжать', 7),
  singular1stPerson: Word('разъезжаю', 7),
  singular2ndPerson: Word('разъезжаешь', 7),
  singular3rdPerson: Word('разъезжает', 7),
  plural1stPerson: Word('разъезжаем', 7),
  plural2ndPerson: Word('разъезжаете', 7),
  plural3rdPerson: Word('разъезжают', 7),
  masculinePast: Word('разъезжал', 7),
  femininePast: Word('разъезжала', 7),
  neuterPast: Word('разъезжало', 7),
  pluralPast: Word('разъезжали', 7),
  imperativeInformal: Word('разъезжай', 7),
  imperativeFormal: Word('разъезжайте', 7),
  imperfect: [],
};

perfectVerbs.set(разъезжать.name.text, разъезжать);

export { разъезжать };