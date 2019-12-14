import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепасть: PerfectVerb = {
  name: Word('перепасть', 5),
  singular1stPerson: Word('перепаду', 7),
  singular2ndPerson: Word('перепадёшь', 5),
  singular3rdPerson: Word('перепадёт', 5),
  plural1stPerson: Word('перепадём', 5),
  plural2ndPerson: Word('перепадёте', 5),
  plural3rdPerson: Word('перепадут', 7),
  masculinePast: Word('перепал', 5),
  femininePast: Word('перепала', 5),
  neuterPast: Word('перепало', 5),
  pluralPast: Word('перепали', 5),
  imperativeInformal: Word('перепади', 7),
  imperativeFormal: Word('перепадите', 7),
  imperfect: [],
};

perfectVerbs.set(перепасть.name.text, перепасть);

export { перепасть };