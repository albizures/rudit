import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсеять: PerfectVerb = {
  name: Word('отсеять', 3),
  singular1stPerson: Word('отсею', 3),
  singular2ndPerson: Word('отсеешь', 3),
  singular3rdPerson: Word('отсеет', 3),
  plural1stPerson: Word('отсеем', 3),
  plural2ndPerson: Word('отсеете', 3),
  plural3rdPerson: Word('отсеют', 3),
  masculinePast: Word('отсеял', 3),
  femininePast: Word('отсеяла', 3),
  neuterPast: Word('отсеяло', 3),
  pluralPast: Word('отсеяли', 3),
  imperativeInformal: Word('отсей', 3),
  imperativeFormal: Word('отсейте', 3),
  imperfect: [],
};

perfectVerbs.set(отсеять.name.text, отсеять);

export { отсеять };