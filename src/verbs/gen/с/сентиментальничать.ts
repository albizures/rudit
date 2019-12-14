import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сентиментальничать: PerfectVerb = {
  name: Word('сентиментальничать', 9),
  singular1stPerson: Word('сентиментальничаю', 9),
  singular2ndPerson: Word('сентиментальничаешь', 9),
  singular3rdPerson: Word('сентиментальничает', 9),
  plural1stPerson: Word('сентиментальничаем', 9),
  plural2ndPerson: Word('сентиментальничаете', 9),
  plural3rdPerson: Word('сентиментальничают', 9),
  masculinePast: Word('сентиментальничал', 9),
  femininePast: Word('сентиментальничала', 9),
  neuterPast: Word('сентиментальничало', 9),
  pluralPast: Word('сентиментальничали', 9),
  imperativeInformal: Word('сентиментальничай', 9),
  imperativeFormal: Word('сентиментальничайте', 9),
  imperfect: [],
};

perfectVerbs.set(сентиментальничать.name.text, сентиментальничать);

export { сентиментальничать };