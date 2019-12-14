import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рысить: PerfectVerb = {
  name: Word('рысить', 3),
  singular1stPerson: Word('рышу', 3),
  singular2ndPerson: Word('рысишь', 3),
  singular3rdPerson: Word('рысит', 3),
  plural1stPerson: Word('рысим', 3),
  plural2ndPerson: Word('рысите', 3),
  plural3rdPerson: Word('рысят', 3),
  masculinePast: Word('рысил', 3),
  femininePast: Word('рысила', 3),
  neuterPast: Word('рысило', 3),
  pluralPast: Word('рысили', 3),
  imperativeInformal: Word('рыси', 3),
  imperativeFormal: Word('рысите', 3),
  imperfect: [],
};

perfectVerbs.set(рысить.name.text, рысить);

export { рысить };