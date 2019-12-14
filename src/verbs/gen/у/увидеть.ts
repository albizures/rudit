import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увидеть: PerfectVerb = {
  name: Word('увидеть', 2),
  singular1stPerson: Word('увижу', 2),
  singular2ndPerson: Word('увидишь', 2),
  singular3rdPerson: Word('увидит', 2),
  plural1stPerson: Word('увидим', 2),
  plural2ndPerson: Word('увидите', 2),
  plural3rdPerson: Word('увидят', 2),
  masculinePast: Word('увидел', 2),
  femininePast: Word('увидела', 2),
  neuterPast: Word('увидело', 2),
  pluralPast: Word('увидели', 2),
  imperativeInformal: Word('увидь', 2),
  imperativeFormal: Word('увидьте', 2),
  imperfect: ['видеть'],
};

perfectVerbs.set(увидеть.name.text, увидеть);

export { увидеть };