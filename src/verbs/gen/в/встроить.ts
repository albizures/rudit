import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встроить: PerfectVerb = {
  name: Word('встроить', 4),
  singular1stPerson: Word('встрою', 4),
  singular2ndPerson: Word('встроишь', 4),
  singular3rdPerson: Word('встроит', 4),
  plural1stPerson: Word('встроим', 4),
  plural2ndPerson: Word('встроите', 4),
  plural3rdPerson: Word('встроят', 4),
  masculinePast: Word('встроил', 4),
  femininePast: Word('встроила', 4),
  neuterPast: Word('встроило', 4),
  pluralPast: Word('встроили', 4),
  imperativeInformal: Word('встрой', 4),
  imperativeFormal: Word('встройте', 4),
  imperfect: [],
};

perfectVerbs.set(встроить.name.text, встроить);

export { встроить };