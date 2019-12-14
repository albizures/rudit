import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распять: PerfectVerb = {
  name: Word('распять', 4),
  singular1stPerson: Word('разопну', 6),
  singular2ndPerson: Word('разопнёшь', 6),
  singular3rdPerson: Word('разопнёт', 6),
  plural1stPerson: Word('разопнём', 6),
  plural2ndPerson: Word('разопнёте', 6),
  plural3rdPerson: Word('разопнут', 6),
  masculinePast: Word('распял', 4),
  femininePast: Word('распяла', 4),
  neuterPast: Word('распяло', 4),
  pluralPast: Word('распяли', 4),
  imperativeInformal: Word('разопни', 6),
  imperativeFormal: Word('разопните', 6),
  imperfect: [],
};

perfectVerbs.set(распять.name.text, распять);

export { распять };