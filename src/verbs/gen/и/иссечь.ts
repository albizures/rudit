import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссечь: PerfectVerb = {
  name: Word('иссечь', 3),
  singular1stPerson: Word('иссеку', 5),
  singular2ndPerson: Word('иссечёшь', 5),
  singular3rdPerson: Word('иссечёт', 5),
  plural1stPerson: Word('иссечём', 5),
  plural2ndPerson: Word('иссечёте', 5),
  plural3rdPerson: Word('иссекут', 5),
  masculinePast: Word('иссёк', 3),
  femininePast: Word('иссекла', 6),
  neuterPast: Word('иссекло', 6),
  pluralPast: Word('иссекли', 6),
  imperativeInformal: Word('иссеки', 5),
  imperativeFormal: Word('иссеките', 5),
  imperfect: [],
};

perfectVerbs.set(иссечь.name.text, иссечь);

export { иссечь };