import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потолстеть: PerfectVerb = {
  name: Word('потолстеть', 7),
  singular1stPerson: Word('потолстею', 7),
  singular2ndPerson: Word('потолстеешь', 7),
  singular3rdPerson: Word('потолстеет', 7),
  plural1stPerson: Word('потолстеем', 7),
  plural2ndPerson: Word('потолстеете', 7),
  plural3rdPerson: Word('потолстеют', 7),
  masculinePast: Word('потолстел', 7),
  femininePast: Word('потолстела', 7),
  neuterPast: Word('потолстело', 7),
  pluralPast: Word('потолстели', 7),
  imperativeInformal: Word('потолстей', 7),
  imperativeFormal: Word('потолстейте', 7),
  imperfect: [],
};

perfectVerbs.set(потолстеть.name.text, потолстеть);

export { потолстеть };