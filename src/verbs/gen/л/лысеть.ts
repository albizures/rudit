import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лысеть: PerfectVerb = {
  name: Word('лысеть', 3),
  singular1stPerson: Word('лысею', 3),
  singular2ndPerson: Word('лысеешь', 3),
  singular3rdPerson: Word('лысеет', 3),
  plural1stPerson: Word('лысеем', 3),
  plural2ndPerson: Word('лысеете', 3),
  plural3rdPerson: Word('лысеют', 3),
  masculinePast: Word('лысел', 3),
  femininePast: Word('лысела', 3),
  neuterPast: Word('лысело', 3),
  pluralPast: Word('лысели', 3),
  imperativeInformal: Word('лысей', 3),
  imperativeFormal: Word('лысейте', 3),
  imperfect: [],
};

perfectVerbs.set(лысеть.name.text, лысеть);

export { лысеть };