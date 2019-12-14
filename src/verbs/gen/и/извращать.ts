import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извращать: PerfectVerb = {
  name: Word('извращать', 6),
  singular1stPerson: Word('извращаю', 6),
  singular2ndPerson: Word('извращаешь', 6),
  singular3rdPerson: Word('извращает', 6),
  plural1stPerson: Word('извращаем', 6),
  plural2ndPerson: Word('извращаете', 6),
  plural3rdPerson: Word('извращают', 6),
  masculinePast: Word('извращал', 6),
  femininePast: Word('извращала', 6),
  neuterPast: Word('извращало', 6),
  pluralPast: Word('извращали', 6),
  imperativeInformal: Word('извращай', 6),
  imperativeFormal: Word('извращайте', 6),
  imperfect: [],
};

perfectVerbs.set(извращать.name.text, извращать);

export { извращать };