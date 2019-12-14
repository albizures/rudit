import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пахтать: PerfectVerb = {
  name: Word('пахтать', 1),
  singular1stPerson: Word('пахтаю', 1),
  singular2ndPerson: Word('пахтаешь', 1),
  singular3rdPerson: Word('пахтает', 1),
  plural1stPerson: Word('пахтаем', 1),
  plural2ndPerson: Word('пахтаете', 1),
  plural3rdPerson: Word('пахтают', 1),
  masculinePast: Word('пахтал', 1),
  femininePast: Word('пахтала', 1),
  neuterPast: Word('пахтало', 1),
  pluralPast: Word('пахтали', 1),
  imperativeInformal: Word('пахтай', 1),
  imperativeFormal: Word('пахтайте', 1),
  imperfect: [],
};

perfectVerbs.set(пахтать.name.text, пахтать);

export { пахтать };