import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облысеть: PerfectVerb = {
  name: Word('облысеть', 5),
  singular1stPerson: Word('облысею', 5),
  singular2ndPerson: Word('облысеешь', 5),
  singular3rdPerson: Word('облысеет', 5),
  plural1stPerson: Word('облысеем', 5),
  plural2ndPerson: Word('облысеете', 5),
  plural3rdPerson: Word('облысеют', 5),
  masculinePast: Word('облысел', 5),
  femininePast: Word('облысела', 5),
  neuterPast: Word('облысело', 5),
  pluralPast: Word('облысели', 5),
  imperativeInformal: Word('облысей', 5),
  imperativeFormal: Word('облысейте', 5),
  imperfect: [],
};

perfectVerbs.set(облысеть.name.text, облысеть);

export { облысеть };