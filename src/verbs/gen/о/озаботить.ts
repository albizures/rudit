import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озаботить: PerfectVerb = {
  name: Word('озаботить', 4),
  singular1stPerson: Word('озабочу', 4),
  singular2ndPerson: Word('озаботишь', 4),
  singular3rdPerson: Word('озаботит', 4),
  plural1stPerson: Word('озаботим', 4),
  plural2ndPerson: Word('озаботите', 4),
  plural3rdPerson: Word('озаботят', 4),
  masculinePast: Word('озаботил', 4),
  femininePast: Word('озаботила', 4),
  neuterPast: Word('озаботило', 4),
  pluralPast: Word('озаботили', 4),
  imperativeInformal: Word('озаботь', 4),
  imperativeFormal: Word('озаботьте', 4),
  imperfect: [],
};

perfectVerbs.set(озаботить.name.text, озаботить);

export { озаботить };