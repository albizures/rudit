import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зареветь: PerfectVerb = {
  name: Word('зареветь', 5),
  singular1stPerson: Word('зареву', 5),
  singular2ndPerson: Word('заревёшь', 1),
  singular3rdPerson: Word('заревёт', 1),
  plural1stPerson: Word('заревём', 1),
  plural2ndPerson: Word('заревёте', 1),
  plural3rdPerson: Word('заревут', 5),
  masculinePast: Word('заревел', 5),
  femininePast: Word('заревела', 5),
  neuterPast: Word('заревело', 5),
  pluralPast: Word('заревели', 5),
  imperativeInformal: Word('зареви', 5),
  imperativeFormal: Word('заревите', 5),
  imperfect: [],
};

perfectVerbs.set(зареветь.name.text, зареветь);

export { зареветь };