import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умозаключать: PerfectVerb = {
  name: Word('умозаключать', 9),
  singular1stPerson: Word('умозаключаю', 9),
  singular2ndPerson: Word('умозаключаешь', 9),
  singular3rdPerson: Word('умозаключает', 9),
  plural1stPerson: Word('умозаключаем', 9),
  plural2ndPerson: Word('умозаключаете', 9),
  plural3rdPerson: Word('умозаключают', 9),
  masculinePast: Word('умозаключал', 9),
  femininePast: Word('умозаключала', 9),
  neuterPast: Word('умозаключало', 9),
  pluralPast: Word('умозаключали', 9),
  imperativeInformal: Word('умозаключай', 9),
  imperativeFormal: Word('умозаключайте', 9),
  imperfect: [],
};

perfectVerbs.set(умозаключать.name.text, умозаключать);

export { умозаключать };