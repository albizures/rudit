import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распять: PerfectVerb = {
  name: Word('распять', 4),
  singular1stPerson: Word('разопну', 6),
  singular2ndPerson: Word('разопнёшь', 1),
  singular3rdPerson: Word('разопнёт', 1),
  plural1stPerson: Word('разопнём', 1),
  plural2ndPerson: Word('разопнёте', 1),
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