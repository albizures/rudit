import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потечь: PerfectVerb = {
  name: Word('потечь', 3),
  singular1stPerson: Word('потеку', 5),
  singular2ndPerson: Word('потечёшь', 3),
  singular3rdPerson: Word('потечёт', 3),
  plural1stPerson: Word('потечём', 3),
  plural2ndPerson: Word('потечёте', 3),
  plural3rdPerson: Word('потекут', 5),
  masculinePast: Word('потек', 3),
  femininePast: Word('потекла', 6),
  neuterPast: Word('потекло', 6),
  pluralPast: Word('потекли', 6),
  imperativeInformal: Word('потеки', 5),
  imperativeFormal: Word('потеките', 5),
  imperfect: [],
};

perfectVerbs.set(потечь.name.text, потечь);

export { потечь };