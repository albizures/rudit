import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплавить: PerfectVerb = {
  name: Word('расплавить', 5),
  singular1stPerson: Word('расплавлю', 5),
  singular2ndPerson: Word('расплавишь', 5),
  singular3rdPerson: Word('расплавит', 5),
  plural1stPerson: Word('расплавим', 5),
  plural2ndPerson: Word('расплавите', 5),
  plural3rdPerson: Word('расплавят', 5),
  masculinePast: Word('расплавил', 5),
  femininePast: Word('расплавила', 5),
  neuterPast: Word('расплавило', 5),
  pluralPast: Word('расплавили', 5),
  imperativeInformal: Word('расплавь', 5),
  imperativeFormal: Word('расплавьте', 5),
  imperfect: [],
};

perfectVerbs.set(расплавить.name.text, расплавить);

export { расплавить };