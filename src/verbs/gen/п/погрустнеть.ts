import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрустнеть: PerfectVerb = {
  name: Word('погрустнеть', 8),
  singular1stPerson: Word('погрустнею', 8),
  singular2ndPerson: Word('погрустнеешь', 8),
  singular3rdPerson: Word('погрустнеет', 8),
  plural1stPerson: Word('погрустнеем', 8),
  plural2ndPerson: Word('погрустнеете', 8),
  plural3rdPerson: Word('погрустнеют', 8),
  masculinePast: Word('погрустнел', 8),
  femininePast: Word('погрустнела', 8),
  neuterPast: Word('погрустнело', 8),
  pluralPast: Word('погрустнели', 8),
  imperativeInformal: Word('погрустней', 8),
  imperativeFormal: Word('погрустнейте', 8),
  imperfect: [],
};

perfectVerbs.set(погрустнеть.name.text, погрустнеть);

export { погрустнеть };