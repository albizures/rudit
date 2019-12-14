import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарядить: PerfectVerb = {
  name: Word('зарядить', 5),
  singular1stPerson: Word('заряжу', 5),
  singular2ndPerson: Word('зарядишь', 5),
  singular3rdPerson: Word('зарядит', 5),
  plural1stPerson: Word('зарядим', 5),
  plural2ndPerson: Word('зарядите', 5),
  plural3rdPerson: Word('зарядят', 5),
  masculinePast: Word('зарядил', 5),
  femininePast: Word('зарядила', 5),
  neuterPast: Word('зарядило', 5),
  pluralPast: Word('зарядили', 5),
  imperativeInformal: Word('заряди', 5),
  imperativeFormal: Word('зарядите', 5),
  imperfect: [],
};

perfectVerbs.set(зарядить.name.text, зарядить);

export { зарядить };