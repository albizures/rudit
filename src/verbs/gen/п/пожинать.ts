import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожинать: PerfectVerb = {
  name: Word('пожинать', 5),
  singular1stPerson: Word('пожинаю', 5),
  singular2ndPerson: Word('пожинаешь', 5),
  singular3rdPerson: Word('пожинает', 5),
  plural1stPerson: Word('пожинаем', 5),
  plural2ndPerson: Word('пожинаете', 5),
  plural3rdPerson: Word('пожинают', 5),
  masculinePast: Word('пожинал', 5),
  femininePast: Word('пожинала', 5),
  neuterPast: Word('пожинало', 5),
  pluralPast: Word('пожинали', 5),
  imperativeInformal: Word('пожинай', 5),
  imperativeFormal: Word('пожинайте', 5),
  imperfect: [],
};

perfectVerbs.set(пожинать.name.text, пожинать);

export { пожинать };