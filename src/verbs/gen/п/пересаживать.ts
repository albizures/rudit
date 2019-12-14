import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересаживать: PerfectVerb = {
  name: Word('пересаживать', 5),
  singular1stPerson: Word('пересаживаю', 5),
  singular2ndPerson: Word('пересаживаешь', 5),
  singular3rdPerson: Word('пересаживает', 5),
  plural1stPerson: Word('пересаживаем', 5),
  plural2ndPerson: Word('пересаживаете', 5),
  plural3rdPerson: Word('пересаживают', 5),
  masculinePast: Word('пересаживал', 5),
  femininePast: Word('пересаживала', 5),
  neuterPast: Word('пересаживало', 5),
  pluralPast: Word('пересаживали', 5),
  imperativeInformal: Word('пересаживай', 5),
  imperativeFormal: Word('пересаживайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересаживать.name.text, пересаживать);

export { пересаживать };