import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропитать: PerfectVerb = {
  name: Word('пропитать', 6),
  singular1stPerson: Word('пропитаю', 6),
  singular2ndPerson: Word('пропитаешь', 6),
  singular3rdPerson: Word('пропитает', 6),
  plural1stPerson: Word('пропитаем', 6),
  plural2ndPerson: Word('пропитаете', 6),
  plural3rdPerson: Word('пропитают', 6),
  masculinePast: Word('пропитал', 6),
  femininePast: Word('пропитала', 6),
  neuterPast: Word('пропитало', 6),
  pluralPast: Word('пропитали', 6),
  imperativeInformal: Word('пропитай', 6),
  imperativeFormal: Word('пропитайте', 6),
  imperfect: [],
};

perfectVerbs.set(пропитать.name.text, пропитать);

export { пропитать };