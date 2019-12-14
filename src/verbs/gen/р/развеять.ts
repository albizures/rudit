import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеять: PerfectVerb = {
  name: Word('развеять', 4),
  singular1stPerson: Word('развею', 4),
  singular2ndPerson: Word('развеешь', 4),
  singular3rdPerson: Word('развеет', 4),
  plural1stPerson: Word('развеем', 4),
  plural2ndPerson: Word('развеете', 4),
  plural3rdPerson: Word('развеют', 4),
  masculinePast: Word('развеял', 4),
  femininePast: Word('развеяла', 4),
  neuterPast: Word('развеяло', 4),
  pluralPast: Word('развеяли', 4),
  imperativeInformal: Word('развей', 4),
  imperativeFormal: Word('развейте', 4),
  imperfect: [],
};

perfectVerbs.set(развеять.name.text, развеять);

export { развеять };