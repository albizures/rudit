import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стемнеть: PerfectVerb = {
  name: Word('стемнеть', 5),
  singular1stPerson: Word('стемнею', 5),
  singular2ndPerson: Word('стемнеешь', 5),
  singular3rdPerson: Word('стемнеет', 5),
  plural1stPerson: Word('стемнеем', 5),
  plural2ndPerson: Word('стемнеете', 5),
  plural3rdPerson: Word('стемнеют', 5),
  masculinePast: Word('стемнел', 5),
  femininePast: Word('стемнела', 5),
  neuterPast: Word('стемнело', 5),
  pluralPast: Word('стемнели', 5),
  imperativeInformal: Word('стемней', 5),
  imperativeFormal: Word('стемнейте', 5),
  imperfect: [],
};

perfectVerbs.set(стемнеть.name.text, стемнеть);

export { стемнеть };