import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмотать: PerfectVerb = {
  name: Word('отмотать', 5),
  singular1stPerson: Word('отмотаю', 5),
  singular2ndPerson: Word('отмотаешь', 5),
  singular3rdPerson: Word('отмотает', 5),
  plural1stPerson: Word('отмотаем', 5),
  plural2ndPerson: Word('отмотаете', 5),
  plural3rdPerson: Word('отмотают', 5),
  masculinePast: Word('отмотал', 5),
  femininePast: Word('отмотала', 5),
  neuterPast: Word('отмотало', 5),
  pluralPast: Word('отмотали', 5),
  imperativeInformal: Word('отмотай', 5),
  imperativeFormal: Word('отмотайте', 5),
  imperfect: [],
};

perfectVerbs.set(отмотать.name.text, отмотать);

export { отмотать };