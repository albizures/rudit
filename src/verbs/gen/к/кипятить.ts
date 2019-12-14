import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кипятить: PerfectVerb = {
  name: Word('кипятить', 5),
  singular1stPerson: Word('кипячу', 5),
  singular2ndPerson: Word('кипятишь', 5),
  singular3rdPerson: Word('кипятит', 5),
  plural1stPerson: Word('кипятим', 5),
  plural2ndPerson: Word('кипятите', 5),
  plural3rdPerson: Word('кипятят', 5),
  masculinePast: Word('кипятил', 5),
  femininePast: Word('кипятила', 5),
  neuterPast: Word('кипятило', 5),
  pluralPast: Word('кипятили', 5),
  imperativeInformal: Word('кипяти', 5),
  imperativeFormal: Word('кипятите', 5),
  imperfect: [],
};

perfectVerbs.set(кипятить.name.text, кипятить);

export { кипятить };