import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засеять: PerfectVerb = {
  name: Word('засеять', 3),
  singular1stPerson: Word('засею', 3),
  singular2ndPerson: Word('засеешь', 3),
  singular3rdPerson: Word('засеет', 3),
  plural1stPerson: Word('засеем', 3),
  plural2ndPerson: Word('засеете', 3),
  plural3rdPerson: Word('засеют', 3),
  masculinePast: Word('засеял', 3),
  femininePast: Word('засеяла', 3),
  neuterPast: Word('засеяло', 3),
  pluralPast: Word('засеяли', 3),
  imperativeInformal: Word('засей', 3),
  imperativeFormal: Word('засейте', 3),
  imperfect: [],
};

perfectVerbs.set(засеять.name.text, засеять);

export { засеять };