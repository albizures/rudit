import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угомонить: PerfectVerb = {
  name: Word('угомонить', 6),
  singular1stPerson: Word('угомоню', 6),
  singular2ndPerson: Word('угомонишь', 6),
  singular3rdPerson: Word('угомонит', 6),
  plural1stPerson: Word('угомоним', 6),
  plural2ndPerson: Word('угомоните', 6),
  plural3rdPerson: Word('угомонят', 6),
  masculinePast: Word('угомонил', 6),
  femininePast: Word('угомонила', 6),
  neuterPast: Word('угомонило', 6),
  pluralPast: Word('угомонили', 6),
  imperativeInformal: Word('угомони', 6),
  imperativeFormal: Word('угомоните', 6),
  imperfect: [],
};

perfectVerbs.set(угомонить.name.text, угомонить);

export { угомонить };