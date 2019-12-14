import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожигать: PerfectVerb = {
  name: Word('прожигать', 6),
  singular1stPerson: Word('прожигаю', 6),
  singular2ndPerson: Word('прожигаешь', 6),
  singular3rdPerson: Word('прожигает', 6),
  plural1stPerson: Word('прожигаем', 6),
  plural2ndPerson: Word('прожигаете', 6),
  plural3rdPerson: Word('прожигают', 6),
  masculinePast: Word('прожигал', 6),
  femininePast: Word('прожигала', 6),
  neuterPast: Word('прожигало', 6),
  pluralPast: Word('прожигали', 6),
  imperativeInformal: Word('прожигай', 6),
  imperativeFormal: Word('прожигайте', 6),
  imperfect: [],
};

perfectVerbs.set(прожигать.name.text, прожигать);

export { прожигать };