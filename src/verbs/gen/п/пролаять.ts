import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролаять: PerfectVerb = {
  name: Word('пролаять', 4),
  singular1stPerson: Word('пролаю', 4),
  singular2ndPerson: Word('пролаешь', 4),
  singular3rdPerson: Word('пролает', 4),
  plural1stPerson: Word('пролаем', 4),
  plural2ndPerson: Word('пролаете', 4),
  plural3rdPerson: Word('пролают', 4),
  masculinePast: Word('пролаял', 4),
  femininePast: Word('пролаяла', 4),
  neuterPast: Word('пролаяло', 4),
  pluralPast: Word('пролаяли', 4),
  imperativeInformal: Word('пролай', 4),
  imperativeFormal: Word('пролайте', 4),
  imperfect: [],
};

perfectVerbs.set(пролаять.name.text, пролаять);

export { пролаять };