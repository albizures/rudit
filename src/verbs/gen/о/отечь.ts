import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отечь: PerfectVerb = {
  name: Word('отечь', 2),
  singular1stPerson: Word('отеку', 4),
  singular2ndPerson: Word('отечёшь', 4),
  singular3rdPerson: Word('отечёт', 4),
  plural1stPerson: Word('отечём', 4),
  plural2ndPerson: Word('отечёте', 4),
  plural3rdPerson: Word('отекут', 4),
  masculinePast: Word('отёк', 2),
  femininePast: Word('отекла', 5),
  neuterPast: Word('отекло', 5),
  pluralPast: Word('отекли', 5),
  imperativeInformal: Word('отеки', 4),
  imperativeFormal: Word('отеките', 4),
  imperfect: [],
};

perfectVerbs.set(отечь.name.text, отечь);

export { отечь };