import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предвидеть: PerfectVerb = {
  name: Word('предвидеть', 5),
  singular1stPerson: Word('предвижу', 5),
  singular2ndPerson: Word('предвидишь', 5),
  singular3rdPerson: Word('предвидит', 5),
  plural1stPerson: Word('предвидим', 5),
  plural2ndPerson: Word('предвидите', 5),
  plural3rdPerson: Word('предвидят', 5),
  masculinePast: Word('предвидел', 5),
  femininePast: Word('предвидела', 5),
  neuterPast: Word('предвидело', 5),
  pluralPast: Word('предвидели', 5),
  imperativeInformal: Word('предвидь', 5),
  imperativeFormal: Word('предвидьте', 5),
  imperfect: [],
};

perfectVerbs.set(предвидеть.name.text, предвидеть);

export { предвидеть };