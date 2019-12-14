import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажигать: PerfectVerb = {
  name: Word('зажигать', 5),
  singular1stPerson: Word('зажигаю', 5),
  singular2ndPerson: Word('зажигаешь', 5),
  singular3rdPerson: Word('зажигает', 5),
  plural1stPerson: Word('зажигаем', 5),
  plural2ndPerson: Word('зажигаете', 5),
  plural3rdPerson: Word('зажигают', 5),
  masculinePast: Word('зажигал', 5),
  femininePast: Word('зажигала', 5),
  neuterPast: Word('зажигало', 5),
  pluralPast: Word('зажигали', 5),
  imperativeInformal: Word('зажигай', 5),
  imperativeFormal: Word('зажигайте', 5),
  imperfect: ['зажечь'],
};

perfectVerbs.set(зажигать.name.text, зажигать);

export { зажигать };