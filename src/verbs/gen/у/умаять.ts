import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умаять: PerfectVerb = {
  name: Word('умаять', 2),
  singular1stPerson: Word('умаю', 2),
  singular2ndPerson: Word('умаешь', 2),
  singular3rdPerson: Word('умает', 2),
  plural1stPerson: Word('умаем', 2),
  plural2ndPerson: Word('умаете', 2),
  plural3rdPerson: Word('умают', 2),
  masculinePast: Word('умаял', 2),
  femininePast: Word('умаяла', 2),
  neuterPast: Word('умаяло', 2),
  pluralPast: Word('умаяли', 2),
  imperativeInformal: Word('умай', 2),
  imperativeFormal: Word('умайте', 2),
  imperfect: [],
};

perfectVerbs.set(умаять.name.text, умаять);

export { умаять };