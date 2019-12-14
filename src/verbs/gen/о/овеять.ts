import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овеять: PerfectVerb = {
  name: Word('овеять', 2),
  singular1stPerson: Word('овею', 2),
  singular2ndPerson: Word('овеешь', 2),
  singular3rdPerson: Word('овеет', 2),
  plural1stPerson: Word('овеем', 2),
  plural2ndPerson: Word('овеете', 2),
  plural3rdPerson: Word('овеют', 2),
  masculinePast: Word('овеял', 2),
  femininePast: Word('овеяла', 2),
  neuterPast: Word('овеяло', 2),
  pluralPast: Word('овеяли', 2),
  imperativeInformal: Word('овей', 2),
  imperativeFormal: Word('овейте', 2),
  imperfect: [],
};

perfectVerbs.set(овеять.name.text, овеять);

export { овеять };