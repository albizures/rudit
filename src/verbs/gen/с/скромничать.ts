import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скромничать: PerfectVerb = {
  name: Word('скромничать', 3),
  singular1stPerson: Word('скромничаю', 3),
  singular2ndPerson: Word('скромничаешь', 3),
  singular3rdPerson: Word('скромничает', 3),
  plural1stPerson: Word('скромничаем', 3),
  plural2ndPerson: Word('скромничаете', 3),
  plural3rdPerson: Word('скромничают', 3),
  masculinePast: Word('скромничал', 3),
  femininePast: Word('скромничала', 3),
  neuterPast: Word('скромничало', 3),
  pluralPast: Word('скромничали', 3),
  imperativeInformal: Word('скромничай', 3),
  imperativeFormal: Word('скромничайте', 3),
  imperfect: [],
};

perfectVerbs.set(скромничать.name.text, скромничать);

export { скромничать };