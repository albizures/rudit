import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повеять: PerfectVerb = {
  name: Word('повеять', 3),
  singular1stPerson: Word('повею', 3),
  singular2ndPerson: Word('повеешь', 3),
  singular3rdPerson: Word('повеет', 3),
  plural1stPerson: Word('повеем', 3),
  plural2ndPerson: Word('повеете', 3),
  plural3rdPerson: Word('повеют', 3),
  masculinePast: Word('повеял', 3),
  femininePast: Word('повеяла', 3),
  neuterPast: Word('повеяло', 3),
  pluralPast: Word('повеяли', 3),
  imperativeInformal: Word('повей', 3),
  imperativeFormal: Word('повейте', 3),
  imperfect: [],
};

perfectVerbs.set(повеять.name.text, повеять);

export { повеять };