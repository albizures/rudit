import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскипятить: PerfectVerb = {
  name: Word('вскипятить', 7),
  singular1stPerson: Word('вскипячу', 7),
  singular2ndPerson: Word('вскипятишь', 7),
  singular3rdPerson: Word('вскипятит', 7),
  plural1stPerson: Word('вскипятим', 7),
  plural2ndPerson: Word('вскипятите', 7),
  plural3rdPerson: Word('вскипятят', 7),
  masculinePast: Word('вскипятил', 7),
  femininePast: Word('вскипятила', 7),
  neuterPast: Word('вскипятило', 7),
  pluralPast: Word('вскипятили', 7),
  imperativeInformal: Word('вскипяти', 7),
  imperativeFormal: Word('вскипятите', 7),
  imperfect: [],
};

perfectVerbs.set(вскипятить.name.text, вскипятить);

export { вскипятить };