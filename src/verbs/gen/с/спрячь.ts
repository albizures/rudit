import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрячь: PerfectVerb = {
  name: Word('спрячь', 3),
  singular1stPerson: Word('спрягу', 5),
  singular2ndPerson: Word('спряжёшь', 5),
  singular3rdPerson: Word('спряжёт', 5),
  plural1stPerson: Word('спряжём', 5),
  plural2ndPerson: Word('спряжёте', 5),
  plural3rdPerson: Word('спрягут', 5),
  masculinePast: Word('спряг', 3),
  femininePast: Word('спрягла', 6),
  neuterPast: Word('спрягло', 6),
  pluralPast: Word('спрягли', 6),
  imperativeInformal: Word('спряги', 5),
  imperativeFormal: Word('спрягите', 5),
  imperfect: [],
};

perfectVerbs.set(спрячь.name.text, спрячь);

export { спрячь };