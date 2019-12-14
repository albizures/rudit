import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припечь: PerfectVerb = {
  name: Word('припечь', 4),
  singular1stPerson: Word('припеку', 6),
  singular2ndPerson: Word('припечёшь', 6),
  singular3rdPerson: Word('припечёт', 6),
  plural1stPerson: Word('припечём', 6),
  plural2ndPerson: Word('припечёте', 6),
  plural3rdPerson: Word('припекут', 6),
  masculinePast: Word('припек', 4),
  femininePast: Word('припекла', 7),
  neuterPast: Word('припекло', 7),
  pluralPast: Word('припекли', 7),
  imperativeInformal: Word('припеки', 6),
  imperativeFormal: Word('припеките', 6),
  imperfect: [],
};

perfectVerbs.set(припечь.name.text, припечь);

export { припечь };