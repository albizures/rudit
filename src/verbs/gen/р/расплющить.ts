import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплющить: PerfectVerb = {
  name: Word('расплющить', 5),
  singular1stPerson: Word('расплющу', 5),
  singular2ndPerson: Word('расплющишь', 5),
  singular3rdPerson: Word('расплющит', 5),
  plural1stPerson: Word('расплющим', 5),
  plural2ndPerson: Word('расплющите', 5),
  plural3rdPerson: Word('расплющат', 5),
  masculinePast: Word('расплющил', 5),
  femininePast: Word('расплющила', 5),
  neuterPast: Word('расплющило', 5),
  pluralPast: Word('расплющили', 5),
  imperativeInformal: Word('расплющи//расплю'щь', 5),
  imperativeFormal: Word('расплющьте', 5),
  imperfect: [],
};

perfectVerbs.set(расплющить.name.text, расплющить);

export { расплющить };