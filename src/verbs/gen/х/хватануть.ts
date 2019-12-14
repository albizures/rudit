import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хватануть: PerfectVerb = {
  name: Word('хватануть', 6),
  singular1stPerson: Word('хватану', 6),
  singular2ndPerson: Word('хватанёшь', 2),
  singular3rdPerson: Word('хватанёт', 2),
  plural1stPerson: Word('хватанём', 2),
  plural2ndPerson: Word('хватанёте', 2),
  plural3rdPerson: Word('хватанут', 6),
  masculinePast: Word('хватанул', 6),
  femininePast: Word('хватанула', 6),
  neuterPast: Word('хватануло', 6),
  pluralPast: Word('хватанули', 6),
  imperativeInformal: Word('хватани', 6),
  imperativeFormal: Word('хватаните', 6),
  imperfect: [],
};

perfectVerbs.set(хватануть.name.text, хватануть);

export { хватануть };