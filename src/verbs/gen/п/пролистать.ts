import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролистать: PerfectVerb = {
  name: Word('пролистать', 7),
  singular1stPerson: Word('пролистаю', 7),
  singular2ndPerson: Word('пролистаешь', 7),
  singular3rdPerson: Word('пролистает', 7),
  plural1stPerson: Word('пролистаем', 7),
  plural2ndPerson: Word('пролистаете', 7),
  plural3rdPerson: Word('пролистают', 7),
  masculinePast: Word('пролистал', 7),
  femininePast: Word('пролистала', 7),
  neuterPast: Word('пролистало', 7),
  pluralPast: Word('пролистали', 7),
  imperativeInformal: Word('пролистай', 7),
  imperativeFormal: Word('пролистайте', 7),
  imperfect: [],
};

perfectVerbs.set(пролистать.name.text, пролистать);

export { пролистать };