import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гомонить: PerfectVerb = {
  name: Word('гомонить', 5),
  singular1stPerson: Word('гомоню', 5),
  singular2ndPerson: Word('гомонишь', 5),
  singular3rdPerson: Word('гомонит', 5),
  plural1stPerson: Word('гомоним', 5),
  plural2ndPerson: Word('гомоните', 5),
  plural3rdPerson: Word('гомонят', 5),
  masculinePast: Word('гомонил', 5),
  femininePast: Word('гомонила', 5),
  neuterPast: Word('гомонило', 5),
  pluralPast: Word('гомонили', 5),
  imperativeInformal: Word('гомони', 5),
  imperativeFormal: Word('гомоните', 5),
  imperfect: [],
};

perfectVerbs.set(гомонить.name.text, гомонить);

export { гомонить };