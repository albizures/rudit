import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потеплеть: PerfectVerb = {
  name: Word('потеплеть', 6),
  singular1stPerson: Word('потеплею', 6),
  singular2ndPerson: Word('потеплеешь', 6),
  singular3rdPerson: Word('потеплеет', 6),
  plural1stPerson: Word('потеплеем', 6),
  plural2ndPerson: Word('потеплеете', 6),
  plural3rdPerson: Word('потеплеют', 6),
  masculinePast: Word('потеплел', 6),
  femininePast: Word('потеплела', 6),
  neuterPast: Word('потеплело', 6),
  pluralPast: Word('потеплели', 6),
  imperativeInformal: Word('потеплей', 6),
  imperativeFormal: Word('потеплейте', 6),
  imperfect: ['теплеть'],
};

perfectVerbs.set(потеплеть.name.text, потеплеть);

export { потеплеть };