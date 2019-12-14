import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возжигать: PerfectVerb = {
  name: Word('возжигать', 6),
  singular1stPerson: Word('возжигаю', 6),
  singular2ndPerson: Word('возжигаешь', 6),
  singular3rdPerson: Word('возжигает', 6),
  plural1stPerson: Word('возжигаем', 6),
  plural2ndPerson: Word('возжигаете', 6),
  plural3rdPerson: Word('возжигают', 6),
  masculinePast: Word('возжигал', 6),
  femininePast: Word('возжигала', 6),
  neuterPast: Word('возжигало', 6),
  pluralPast: Word('возжигали', 6),
  imperativeInformal: Word('возжигай', 6),
  imperativeFormal: Word('возжигайте', 6),
  imperfect: [],
};

perfectVerbs.set(возжигать.name.text, возжигать);

export { возжигать };