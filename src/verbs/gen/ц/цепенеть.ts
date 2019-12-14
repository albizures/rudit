import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цепенеть: PerfectVerb = {
  name: Word('цепенеть', 5),
  singular1stPerson: Word('цепенею', 5),
  singular2ndPerson: Word('цепенеешь', 5),
  singular3rdPerson: Word('цепенеет', 5),
  plural1stPerson: Word('цепенеем', 5),
  plural2ndPerson: Word('цепенеете', 5),
  plural3rdPerson: Word('цепенеют', 5),
  masculinePast: Word('цепенел', 5),
  femininePast: Word('цепенела', 5),
  neuterPast: Word('цепенело', 5),
  pluralPast: Word('цепенели', 5),
  imperativeInformal: Word('цепеней', 5),
  imperativeFormal: Word('цепенейте', 5),
  imperfect: [],
};

perfectVerbs.set(цепенеть.name.text, цепенеть);

export { цепенеть };