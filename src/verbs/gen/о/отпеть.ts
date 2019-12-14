import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпеть: PerfectVerb = {
  name: Word('отпеть', 3),
  singular1stPerson: Word('отпою', 4),
  singular2ndPerson: Word('отпоёшь', 4),
  singular3rdPerson: Word('отпоёт', 4),
  plural1stPerson: Word('отпоём', 4),
  plural2ndPerson: Word('отпоёте', 4),
  plural3rdPerson: Word('отпоют', 4),
  masculinePast: Word('отпел', 3),
  femininePast: Word('отпела', 3),
  neuterPast: Word('отпело', 3),
  pluralPast: Word('отпели', 3),
  imperativeInformal: Word('отпой', 3),
  imperativeFormal: Word('отпойте', 3),
  imperfect: [],
};

perfectVerbs.set(отпеть.name.text, отпеть);

export { отпеть };