import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарасти: PerfectVerb = {
  name: Word('зарасти', 6),
  singular1stPerson: Word('зарасту', 6),
  singular2ndPerson: Word('зарастёшь', 1),
  singular3rdPerson: Word('зарастёт', 1),
  plural1stPerson: Word('зарастём', 1),
  plural2ndPerson: Word('зарастёте', 1),
  plural3rdPerson: Word('зарастут', 6),
  masculinePast: Word('зарос', 3),
  femininePast: Word('заросла', 6),
  neuterPast: Word('заросло', 6),
  pluralPast: Word('заросли', 6),
  imperativeInformal: Word('зарасти', 6),
  imperativeFormal: Word('зарастите', 6),
  imperfect: [],
};

perfectVerbs.set(зарасти.name.text, зарасти);

export { зарасти };