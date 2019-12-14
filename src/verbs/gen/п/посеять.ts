import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посеять: PerfectVerb = {
  name: Word('посеять', 3),
  singular1stPerson: Word('посею', 3),
  singular2ndPerson: Word('посеешь', 3),
  singular3rdPerson: Word('посеет', 3),
  plural1stPerson: Word('посеем', 3),
  plural2ndPerson: Word('посеете', 3),
  plural3rdPerson: Word('посеют', 3),
  masculinePast: Word('посеял', 3),
  femininePast: Word('посеяла', 3),
  neuterPast: Word('посеяло', 3),
  pluralPast: Word('посеяли', 3),
  imperativeInformal: Word('посей', 3),
  imperativeFormal: Word('посейте', 3),
  imperfect: ['сеять'],
};

perfectVerbs.set(посеять.name.text, посеять);

export { посеять };