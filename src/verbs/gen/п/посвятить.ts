import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвятить: PerfectVerb = {
  name: Word('посвятить', 6),
  singular1stPerson: Word('посвящу', 6),
  singular2ndPerson: Word('посвятишь', 6),
  singular3rdPerson: Word('посвятит', 6),
  plural1stPerson: Word('посвятим', 6),
  plural2ndPerson: Word('посвятите', 6),
  plural3rdPerson: Word('посвятят', 6),
  masculinePast: Word('посвятил', 6),
  femininePast: Word('посвятила', 6),
  neuterPast: Word('посвятило', 6),
  pluralPast: Word('посвятили', 6),
  imperativeInformal: Word('посвяти', 6),
  imperativeFormal: Word('посвятите', 6),
  imperfect: ['посвящать'],
};

perfectVerbs.set(посвятить.name.text, посвятить);

export { посвятить };