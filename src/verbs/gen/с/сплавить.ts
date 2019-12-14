import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплавить: PerfectVerb = {
  name: Word('сплавить', 3),
  singular1stPerson: Word('сплавлю', 3),
  singular2ndPerson: Word('сплавишь', 3),
  singular3rdPerson: Word('сплавит', 3),
  plural1stPerson: Word('сплавим', 3),
  plural2ndPerson: Word('сплавите', 3),
  plural3rdPerson: Word('сплавят', 3),
  masculinePast: Word('сплавил', 3),
  femininePast: Word('сплавила', 3),
  neuterPast: Word('сплавило', 3),
  pluralPast: Word('сплавили', 3),
  imperativeInformal: Word('сплавь', 3),
  imperativeFormal: Word('сплавьте', 3),
  imperfect: [],
};

perfectVerbs.set(сплавить.name.text, сплавить);

export { сплавить };