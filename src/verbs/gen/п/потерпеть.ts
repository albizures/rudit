import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потерпеть: PerfectVerb = {
  name: Word('потерпеть', 6),
  singular1stPerson: Word('потерплю', 7),
  singular2ndPerson: Word('потерпишь', 3),
  singular3rdPerson: Word('потерпит', 3),
  plural1stPerson: Word('потерпим', 3),
  plural2ndPerson: Word('потерпите', 3),
  plural3rdPerson: Word('потерпят', 3),
  masculinePast: Word('потерпел', 6),
  femininePast: Word('потерпела', 6),
  neuterPast: Word('потерпело', 6),
  pluralPast: Word('потерпели', 6),
  imperativeInformal: Word('потерпи', 6),
  imperativeFormal: Word('потерпите', 6),
  imperfect: [],
};

perfectVerbs.set(потерпеть.name.text, потерпеть);

export { потерпеть };