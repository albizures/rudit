import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промять: PerfectVerb = {
  name: Word('промять', 4),
  singular1stPerson: Word('промну', 5),
  singular2ndPerson: Word('промнёшь', 2),
  singular3rdPerson: Word('промнёт', 2),
  plural1stPerson: Word('промнём', 2),
  plural2ndPerson: Word('промнёте', 7),
  plural3rdPerson: Word('промнут', 5),
  masculinePast: Word('промял', 4),
  femininePast: Word('промяла', 4),
  neuterPast: Word('промяло', 4),
  pluralPast: Word('промяли', 4),
  imperativeInformal: Word('промни', 5),
  imperativeFormal: Word('промните', 5),
  imperfect: [],
};

perfectVerbs.set(промять.name.text, промять);

export { промять };