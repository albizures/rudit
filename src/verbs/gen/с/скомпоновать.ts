import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скомпоновать: PerfectVerb = {
  name: Word('скомпоновать', 9),
  singular1stPerson: Word('скомпоную', 7),
  singular2ndPerson: Word('скомпонуешь', 7),
  singular3rdPerson: Word('скомпонует', 7),
  plural1stPerson: Word('скомпонуем', 7),
  plural2ndPerson: Word('скомпонуете', 7),
  plural3rdPerson: Word('скомпонуют', 7),
  masculinePast: Word('скомпоновал', 9),
  femininePast: Word('скомпоновала', 9),
  neuterPast: Word('скомпоновало', 9),
  pluralPast: Word('скомпоновали', 9),
  imperativeInformal: Word('скомпонуй', 7),
  imperativeFormal: Word('скомпонуйте', 7),
  imperfect: [],
};

perfectVerbs.set(скомпоновать.name.text, скомпоновать);

export { скомпоновать };