import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрячь: PerfectVerb = {
  name: Word('запрячь', 4),
  singular1stPerson: Word('запрягу', 6),
  singular2ndPerson: Word('запряжёшь', 6),
  singular3rdPerson: Word('запряжёт', 6),
  plural1stPerson: Word('запряжём', 6),
  plural2ndPerson: Word('запряжёте', 6),
  plural3rdPerson: Word('запрягут', 6),
  masculinePast: Word('запряг', 4),
  femininePast: Word('запрягла', 7),
  neuterPast: Word('запрягло', 7),
  pluralPast: Word('запрягли', 7),
  imperativeInformal: Word('запряги', 6),
  imperativeFormal: Word('запрягите', 6),
  imperfect: ['запрягать'],
};

perfectVerbs.set(запрячь.name.text, запрячь);

export { запрячь };