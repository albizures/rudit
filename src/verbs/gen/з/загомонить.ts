import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загомонить: PerfectVerb = {
  name: Word('загомонить', 7),
  singular1stPerson: Word('загомоню', 7),
  singular2ndPerson: Word('загомонишь', 7),
  singular3rdPerson: Word('загомонит', 7),
  plural1stPerson: Word('загомоним', 7),
  plural2ndPerson: Word('загомоните', 7),
  plural3rdPerson: Word('загомонят', 7),
  masculinePast: Word('загомонил', 7),
  femininePast: Word('загомонила', 7),
  neuterPast: Word('загомонило', 7),
  pluralPast: Word('загомонили', 7),
  imperativeInformal: Word('загомони', 7),
  imperativeFormal: Word('загомоните', 7),
  imperfect: [],
};

perfectVerbs.set(загомонить.name.text, загомонить);

export { загомонить };