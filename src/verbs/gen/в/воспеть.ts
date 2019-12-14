import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспеть: PerfectVerb = {
  name: Word('воспеть', 4),
  singular1stPerson: Word('воспою', 5),
  singular2ndPerson: Word('воспоёшь', 1),
  singular3rdPerson: Word('воспоёт', 1),
  plural1stPerson: Word('воспоём', 1),
  plural2ndPerson: Word('воспоёте', 7),
  plural3rdPerson: Word('воспоют', 5),
  masculinePast: Word('воспел', 4),
  femininePast: Word('воспела', 4),
  neuterPast: Word('воспело', 4),
  pluralPast: Word('воспели', 4),
  imperativeInformal: Word('воспой', 4),
  imperativeFormal: Word('воспойте', 4),
  imperfect: [],
};

perfectVerbs.set(воспеть.name.text, воспеть);

export { воспеть };