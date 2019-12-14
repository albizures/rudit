import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблеять: PerfectVerb = {
  name: Word('заблеять', 4),
  singular1stPerson: Word('заблею', 4),
  singular2ndPerson: Word('заблеешь', 4),
  singular3rdPerson: Word('заблеет', 4),
  plural1stPerson: Word('заблеем', 4),
  plural2ndPerson: Word('заблеете', 4),
  plural3rdPerson: Word('заблеют', 4),
  masculinePast: Word('заблеял', 4),
  femininePast: Word('заблеяла', 4),
  neuterPast: Word('заблеяло', 4),
  pluralPast: Word('заблеяли', 4),
  imperativeInformal: Word('заблей', 4),
  imperativeFormal: Word('заблейте', 4),
  imperfect: [],
};

perfectVerbs.set(заблеять.name.text, заблеять);

export { заблеять };