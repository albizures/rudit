import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скряжничать: PerfectVerb = {
  name: Word('скряжничать', 3),
  singular1stPerson: Word('скряжничаю', 3),
  singular2ndPerson: Word('скряжничаешь', 3),
  singular3rdPerson: Word('скряжничает', 3),
  plural1stPerson: Word('скряжничаем', 3),
  plural2ndPerson: Word('скряжничаете', 3),
  plural3rdPerson: Word('скряжничают', 3),
  masculinePast: Word('скряжничал', 3),
  femininePast: Word('скряжничала', 3),
  neuterPast: Word('скряжничало', 3),
  pluralPast: Word('скряжничали', 3),
  imperativeInformal: Word('скряжничай', 3),
  imperativeFormal: Word('скряжничайте', 3),
  imperfect: [],
};

perfectVerbs.set(скряжничать.name.text, скряжничать);

export { скряжничать };