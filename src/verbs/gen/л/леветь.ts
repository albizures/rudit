import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const леветь: PerfectVerb = {
  name: Word('леветь', 3),
  singular1stPerson: Word('левею', 3),
  singular2ndPerson: Word('левеешь', 3),
  singular3rdPerson: Word('левеет', 3),
  plural1stPerson: Word('левеем', 3),
  plural2ndPerson: Word('левеете', 3),
  plural3rdPerson: Word('левеют', 3),
  masculinePast: Word('левел', 3),
  femininePast: Word('левела', 3),
  neuterPast: Word('левело', 3),
  pluralPast: Word('левели', 3),
  imperativeInformal: Word('левей', 3),
  imperativeFormal: Word('левейте', 3),
  imperfect: [],
};

perfectVerbs.set(леветь.name.text, леветь);

export { леветь };