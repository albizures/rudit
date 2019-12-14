import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назреть: PerfectVerb = {
  name: Word('назреть', 4),
  singular1stPerson: Word('назрею', 4),
  singular2ndPerson: Word('назреешь', 4),
  singular3rdPerson: Word('назреет', 4),
  plural1stPerson: Word('назреем', 4),
  plural2ndPerson: Word('назреете', 4),
  plural3rdPerson: Word('назреют', 4),
  masculinePast: Word('назрел', 4),
  femininePast: Word('назрела', 4),
  neuterPast: Word('назрело', 4),
  pluralPast: Word('назрели', 4),
  imperativeInformal: Word('назрей', 4),
  imperativeFormal: Word('назрейте', 4),
  imperfect: [],
};

perfectVerbs.set(назреть.name.text, назреть);

export { назреть };