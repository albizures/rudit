import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересылать: PerfectVerb = {
  name: Word('пересылать', 7),
  singular1stPerson: Word('пересылаю', 7),
  singular2ndPerson: Word('пересылаешь', 7),
  singular3rdPerson: Word('пересылает', 7),
  plural1stPerson: Word('пересылаем', 7),
  plural2ndPerson: Word('пересылаете', 7),
  plural3rdPerson: Word('пересылают', 7),
  masculinePast: Word('пересылал', 7),
  femininePast: Word('пересылала', 7),
  neuterPast: Word('пересылало', 7),
  pluralPast: Word('пересылали', 7),
  imperativeInformal: Word('пересылай', 7),
  imperativeFormal: Word('пересылайте', 7),
  imperfect: [],
};

perfectVerbs.set(пересылать.name.text, пересылать);

export { пересылать };