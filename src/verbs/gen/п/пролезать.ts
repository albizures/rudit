import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролезать: PerfectVerb = {
  name: Word('пролезать', 6),
  singular1stPerson: Word('пролезаю', 6),
  singular2ndPerson: Word('пролезаешь', 6),
  singular3rdPerson: Word('пролезает', 6),
  plural1stPerson: Word('пролезаем', 6),
  plural2ndPerson: Word('пролезаете', 6),
  plural3rdPerson: Word('пролезают', 6),
  masculinePast: Word('пролезал', 6),
  femininePast: Word('пролезала', 6),
  neuterPast: Word('пролезало', 6),
  pluralPast: Word('пролезали', 6),
  imperativeInformal: Word('пролезай', 6),
  imperativeFormal: Word('пролезайте', 6),
  imperfect: [],
};

perfectVerbs.set(пролезать.name.text, пролезать);

export { пролезать };