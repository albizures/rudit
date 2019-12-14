import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посидеть: PerfectVerb = {
  name: Word('посидеть', 5),
  singular1stPerson: Word('посижу', 5),
  singular2ndPerson: Word('посидишь', 5),
  singular3rdPerson: Word('посидит', 5),
  plural1stPerson: Word('посидим', 5),
  plural2ndPerson: Word('посидите', 5),
  plural3rdPerson: Word('посидят', 5),
  masculinePast: Word('посидел', 5),
  femininePast: Word('посидела', 5),
  neuterPast: Word('посидело', 5),
  pluralPast: Word('посидели', 5),
  imperativeInformal: Word('посиди', 5),
  imperativeFormal: Word('посидите', 5),
  imperfect: ['сидеть'],
};

perfectVerbs.set(посидеть.name.text, посидеть);

export { посидеть };