import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спятить: PerfectVerb = {
  name: Word('спятить', 2),
  singular1stPerson: Word('спячу', 2),
  singular2ndPerson: Word('спятишь', 2),
  singular3rdPerson: Word('спятит', 2),
  plural1stPerson: Word('спятим', 2),
  plural2ndPerson: Word('спятите', 2),
  plural3rdPerson: Word('спятят', 2),
  masculinePast: Word('спятил', 2),
  femininePast: Word('спятила', 2),
  neuterPast: Word('спятило', 2),
  pluralPast: Word('спятили', 2),
  imperativeInformal: Word('спять', 2),
  imperativeFormal: Word('спятьте', 2),
  imperfect: [],
};

perfectVerbs.set(спятить.name.text, спятить);

export { спятить };