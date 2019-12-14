import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затеять: PerfectVerb = {
  name: Word('затеять', 3),
  singular1stPerson: Word('затею', 3),
  singular2ndPerson: Word('затеешь', 3),
  singular3rdPerson: Word('затеет', 3),
  plural1stPerson: Word('затеем', 3),
  plural2ndPerson: Word('затеете', 3),
  plural3rdPerson: Word('затеют', 3),
  masculinePast: Word('затеял', 3),
  femininePast: Word('затеяла', 3),
  neuterPast: Word('затеяло', 3),
  pluralPast: Word('затеяли', 3),
  imperativeInformal: Word('затей', 3),
  imperativeFormal: Word('затейте', 3),
  imperfect: [],
};

perfectVerbs.set(затеять.name.text, затеять);

export { затеять };