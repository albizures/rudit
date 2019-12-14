import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настигать: PerfectVerb = {
  name: Word('настигать', 6),
  singular1stPerson: Word('настигаю', 6),
  singular2ndPerson: Word('настигаешь', 6),
  singular3rdPerson: Word('настигает', 6),
  plural1stPerson: Word('настигаем', 6),
  plural2ndPerson: Word('настигаете', 6),
  plural3rdPerson: Word('настигают', 6),
  masculinePast: Word('настигал', 6),
  femininePast: Word('настигала', 6),
  neuterPast: Word('настигало', 6),
  pluralPast: Word('настигали', 6),
  imperativeInformal: Word('настигай', 6),
  imperativeFormal: Word('настигайте', 6),
  imperfect: [],
};

perfectVerbs.set(настигать.name.text, настигать);

export { настигать };