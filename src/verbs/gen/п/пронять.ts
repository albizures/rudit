import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронять: PerfectVerb = {
  name: Word('пронять', 4),
  singular1stPerson: Word('пройму', 5),
  singular2ndPerson: Word('проймёшь', 5),
  singular3rdPerson: Word('проймёт', 5),
  plural1stPerson: Word('проймём', 5),
  plural2ndPerson: Word('проймёте', 5),
  plural3rdPerson: Word('проймут', 5),
  masculinePast: Word('пронял', 2),
  femininePast: Word('проняла', 6),
  neuterPast: Word('проняло', 2),
  pluralPast: Word('проняли', 2),
  imperativeInformal: Word('пройми', 5),
  imperativeFormal: Word('проймите', 5),
  imperfect: [],
};

perfectVerbs.set(пронять.name.text, пронять);

export { пронять };