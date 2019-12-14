import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересиживать: PerfectVerb = {
  name: Word('пересиживать', 5),
  singular1stPerson: Word('пересиживаю', 5),
  singular2ndPerson: Word('пересиживаешь', 5),
  singular3rdPerson: Word('пересиживает', 5),
  plural1stPerson: Word('пересиживаем', 5),
  plural2ndPerson: Word('пересиживаете', 5),
  plural3rdPerson: Word('пересиживают', 5),
  masculinePast: Word('пересиживал', 5),
  femininePast: Word('пересиживала', 5),
  neuterPast: Word('пересиживало', 5),
  pluralPast: Word('пересиживали', 5),
  imperativeInformal: Word('пересиживай', 5),
  imperativeFormal: Word('пересиживайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересиживать.name.text, пересиживать);

export { пересиживать };