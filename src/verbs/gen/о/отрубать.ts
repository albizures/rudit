import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрубать: PerfectVerb = {
  name: Word('отрубать', 5),
  singular1stPerson: Word('отрубаю', 5),
  singular2ndPerson: Word('отрубаешь', 5),
  singular3rdPerson: Word('отрубает', 5),
  plural1stPerson: Word('отрубаем', 5),
  plural2ndPerson: Word('отрубаете', 5),
  plural3rdPerson: Word('отрубают', 5),
  masculinePast: Word('отрубал', 5),
  femininePast: Word('отрубала', 5),
  neuterPast: Word('отрубало', 5),
  pluralPast: Word('отрубали', 5),
  imperativeInformal: Word('отрубай', 5),
  imperativeFormal: Word('отрубайте', 5),
  imperfect: [],
};

perfectVerbs.set(отрубать.name.text, отрубать);

export { отрубать };