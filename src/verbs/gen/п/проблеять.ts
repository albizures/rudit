import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проблеять: PerfectVerb = {
  name: Word('проблеять', 5),
  singular1stPerson: Word('проблею', 5),
  singular2ndPerson: Word('проблеешь', 5),
  singular3rdPerson: Word('проблеет', 5),
  plural1stPerson: Word('проблеем', 5),
  plural2ndPerson: Word('проблеете', 5),
  plural3rdPerson: Word('проблеют', 5),
  masculinePast: Word('проблеял', 5),
  femininePast: Word('проблеяла', 5),
  neuterPast: Word('проблеяло', 5),
  pluralPast: Word('проблеяли', 5),
  imperativeInformal: Word('проблей', 5),
  imperativeFormal: Word('проблейте', 5),
  imperfect: [],
};

perfectVerbs.set(проблеять.name.text, проблеять);

export { проблеять };