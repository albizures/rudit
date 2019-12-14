import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затлеть: PerfectVerb = {
  name: Word('затлеть', 4),
  singular1stPerson: Word('затлею', 4),
  singular2ndPerson: Word('затлеешь', 4),
  singular3rdPerson: Word('затлеет', 4),
  plural1stPerson: Word('затлеем', 4),
  plural2ndPerson: Word('затлеете', 4),
  plural3rdPerson: Word('затлеют', 4),
  masculinePast: Word('затлел', 4),
  femininePast: Word('затлела', 4),
  neuterPast: Word('затлело', 4),
  pluralPast: Word('затлели', 4),
  imperativeInformal: Word('затлей', 4),
  imperativeFormal: Word('затлейте', 4),
  imperfect: [],
};

perfectVerbs.set(затлеть.name.text, затлеть);

export { затлеть };