import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопрячь: PerfectVerb = {
  name: Word('сопрячь', 4),
  singular1stPerson: Word('сопрягу', 6),
  singular2ndPerson: Word('сопряжёшь', 6),
  singular3rdPerson: Word('сопряжёт', 6),
  plural1stPerson: Word('сопряжём', 6),
  plural2ndPerson: Word('сопряжёте', 6),
  plural3rdPerson: Word('сопрягут', 6),
  masculinePast: Word('сопряг', 4),
  femininePast: Word('сопрягла', 7),
  neuterPast: Word('сопрягло', 7),
  pluralPast: Word('сопрягли', 7),
  imperativeInformal: Word('сопряги', 6),
  imperativeFormal: Word('сопрягите', 6),
  imperfect: [],
};

perfectVerbs.set(сопрячь.name.text, сопрячь);

export { сопрячь };