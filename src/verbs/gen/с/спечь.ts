import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спечь: PerfectVerb = {
  name: Word('спечь', 2),
  singular1stPerson: Word('спеку', 4),
  singular2ndPerson: Word('спечёшь', 2),
  singular3rdPerson: Word('спечёт', 2),
  plural1stPerson: Word('спечём', 2),
  plural2ndPerson: Word('спечёте', 2),
  plural3rdPerson: Word('спекут', 4),
  masculinePast: Word('спёк', 2),
  femininePast: Word('спекла', 5),
  neuterPast: Word('спекло', 5),
  pluralPast: Word('спекли', 5),
  imperativeInformal: Word('спеки', 4),
  imperativeFormal: Word('спеките', 4),
  imperfect: ['печь'],
};

perfectVerbs.set(спечь.name.text, спечь);

export { спечь };