import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрежетать: PerfectVerb = {
  name: Word('скрежетать', 7),
  singular1stPerson: Word('скрежещу', 7),
  singular2ndPerson: Word('скрежещешь', 5),
  singular3rdPerson: Word('скрежещет', 5),
  plural1stPerson: Word('скрежещем', 5),
  plural2ndPerson: Word('скрежещете', 5),
  plural3rdPerson: Word('скрежещут', 5),
  masculinePast: Word('скрежетал', 7),
  femininePast: Word('скрежетала', 7),
  neuterPast: Word('скрежетало', 7),
  pluralPast: Word('скрежетали', 7),
  imperativeInformal: Word('скрежещи', 7),
  imperativeFormal: Word('скрежещите', 7),
  imperfect: [],
};

perfectVerbs.set(скрежетать.name.text, скрежетать);

export { скрежетать };