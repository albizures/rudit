import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижигать: PerfectVerb = {
  name: Word('прижигать', 6),
  singular1stPerson: Word('прижигаю', 6),
  singular2ndPerson: Word('прижигаешь', 6),
  singular3rdPerson: Word('прижигает', 6),
  plural1stPerson: Word('прижигаем', 6),
  plural2ndPerson: Word('прижигаете', 6),
  plural3rdPerson: Word('прижигают', 6),
  masculinePast: Word('прижигал', 6),
  femininePast: Word('прижигала', 6),
  neuterPast: Word('прижигало', 6),
  pluralPast: Word('прижигали', 6),
  imperativeInformal: Word('прижигай', 6),
  imperativeFormal: Word('прижигайте', 6),
  imperfect: [],
};

perfectVerbs.set(прижигать.name.text, прижигать);

export { прижигать };