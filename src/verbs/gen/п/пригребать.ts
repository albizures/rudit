import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригребать: PerfectVerb = {
  name: Word('пригребать', 7),
  singular1stPerson: Word('пригребаю', 7),
  singular2ndPerson: Word('пригребаешь', 7),
  singular3rdPerson: Word('пригребает', 7),
  plural1stPerson: Word('пригребаем', 7),
  plural2ndPerson: Word('пригребаете', 7),
  plural3rdPerson: Word('пригребают', 7),
  masculinePast: Word('пригребал', 7),
  femininePast: Word('пригребала', 7),
  neuterPast: Word('пригребало', 7),
  pluralPast: Word('пригребали', 7),
  imperativeInformal: Word('пригребай', 7),
  imperativeFormal: Word('пригребайте', 7),
  imperfect: [],
};

perfectVerbs.set(пригребать.name.text, пригребать);

export { пригребать };