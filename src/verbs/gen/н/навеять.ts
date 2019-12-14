import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навеять: PerfectVerb = {
  name: Word('навеять', 3),
  singular1stPerson: Word('навею', 3),
  singular2ndPerson: Word('навеешь', 3),
  singular3rdPerson: Word('навеет', 3),
  plural1stPerson: Word('навеем', 3),
  plural2ndPerson: Word('навеете', 3),
  plural3rdPerson: Word('навеют', 3),
  masculinePast: Word('навеял', 3),
  femininePast: Word('навеяла', 3),
  neuterPast: Word('навеяло', 3),
  pluralPast: Word('навеяли', 3),
  imperativeInformal: Word('навей', 3),
  imperativeFormal: Word('навейте', 3),
  imperfect: [],
};

perfectVerbs.set(навеять.name.text, навеять);

export { навеять };