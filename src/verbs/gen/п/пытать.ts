import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пытать: PerfectVerb = {
  name: Word('пытать', 3),
  singular1stPerson: Word('пытаю', 3),
  singular2ndPerson: Word('пытаешь', 3),
  singular3rdPerson: Word('пытает', 3),
  plural1stPerson: Word('пытаем', 3),
  plural2ndPerson: Word('пытаете', 3),
  plural3rdPerson: Word('пытают', 3),
  masculinePast: Word('пытал', 3),
  femininePast: Word('пытала', 3),
  neuterPast: Word('пытало', 3),
  pluralPast: Word('пытали', 3),
  imperativeInformal: Word('пытай', 3),
  imperativeFormal: Word('пытайте', 3),
  imperfect: [],
};

perfectVerbs.set(пытать.name.text, пытать);

export { пытать };