import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притечь: PerfectVerb = {
  name: Word('притечь', 4),
  singular1stPerson: Word('притеку', 6),
  singular2ndPerson: Word('притечёшь', 6),
  singular3rdPerson: Word('притечёт', 6),
  plural1stPerson: Word('притечём', 6),
  plural2ndPerson: Word('притечёте', 6),
  plural3rdPerson: Word('притекут', 6),
  masculinePast: Word('притек', 4),
  femininePast: Word('притекла', 7),
  neuterPast: Word('притекло', 7),
  pluralPast: Word('притекли', 7),
  imperativeInformal: Word('притеки', 6),
  imperativeFormal: Word('притеките', 6),
  imperfect: [],
};

perfectVerbs.set(притечь.name.text, притечь);

export { притечь };