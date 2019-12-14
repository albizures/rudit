import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролетать: PerfectVerb = {
  name: Word('пролетать', 6),
  singular1stPerson: Word('пролетаю', 6),
  singular2ndPerson: Word('пролетаешь', 6),
  singular3rdPerson: Word('пролетает', 6),
  plural1stPerson: Word('пролетаем', 6),
  plural2ndPerson: Word('пролетаете', 6),
  plural3rdPerson: Word('пролетают', 6),
  masculinePast: Word('пролетал', 6),
  femininePast: Word('пролетала', 6),
  neuterPast: Word('пролетало', 6),
  pluralPast: Word('пролетали', 6),
  imperativeInformal: Word('пролетай', 6),
  imperativeFormal: Word('пролетайте', 6),
  imperfect: [],
};

perfectVerbs.set(пролетать.name.text, пролетать);

export { пролетать };