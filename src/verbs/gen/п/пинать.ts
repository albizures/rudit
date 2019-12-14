import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пинать: PerfectVerb = {
  name: Word('пинать', 3),
  singular1stPerson: Word('пинаю', 3),
  singular2ndPerson: Word('пинаешь', 3),
  singular3rdPerson: Word('пинает', 3),
  plural1stPerson: Word('пинаем', 3),
  plural2ndPerson: Word('пинаете', 3),
  plural3rdPerson: Word('пинают', 3),
  masculinePast: Word('пинал', 3),
  femininePast: Word('пинала', 3),
  neuterPast: Word('пинало', 3),
  pluralPast: Word('пинали', 3),
  imperativeInformal: Word('пинай', 3),
  imperativeFormal: Word('пинайте', 3),
  imperfect: [],
};

perfectVerbs.set(пинать.name.text, пинать);

export { пинать };