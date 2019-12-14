import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвеличить: PerfectVerb = {
  name: Word('возвеличить', 6),
  singular1stPerson: Word('возвеличу', 6),
  singular2ndPerson: Word('возвеличишь', 6),
  singular3rdPerson: Word('возвеличит', 6),
  plural1stPerson: Word('возвеличим', 6),
  plural2ndPerson: Word('возвеличите', 6),
  plural3rdPerson: Word('возвеличат', 6),
  masculinePast: Word('возвеличил', 6),
  femininePast: Word('возвеличила', 6),
  neuterPast: Word('возвеличило', 6),
  pluralPast: Word('возвеличили', 6),
  imperativeInformal: Word('возвеличь', 6),
  imperativeFormal: Word('возвеличьте', 6),
  imperfect: [],
};

perfectVerbs.set(возвеличить.name.text, возвеличить);

export { возвеличить };