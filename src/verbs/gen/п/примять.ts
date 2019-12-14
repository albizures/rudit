import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примять: PerfectVerb = {
  name: Word('примять', 4),
  singular1stPerson: Word('примну', 5),
  singular2ndPerson: Word('примнёшь', 2),
  singular3rdPerson: Word('примнёт', 2),
  plural1stPerson: Word('примнём', 2),
  plural2ndPerson: Word('примнёте', 7),
  plural3rdPerson: Word('примнут', 5),
  masculinePast: Word('примял', 4),
  femininePast: Word('примяла', 4),
  neuterPast: Word('примяло', 4),
  pluralPast: Word('примяли', 4),
  imperativeInformal: Word('примни', 5),
  imperativeFormal: Word('примните', 5),
  imperfect: [],
};

perfectVerbs.set(примять.name.text, примять);

export { примять };