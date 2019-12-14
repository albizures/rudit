import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсечь: PerfectVerb = {
  name: Word('подсечь', 4),
  singular1stPerson: Word('подсеку', 6),
  singular2ndPerson: Word('подсечёшь', 6),
  singular3rdPerson: Word('подсечёт', 6),
  plural1stPerson: Word('подсечём', 6),
  plural2ndPerson: Word('подсечёте', 6),
  plural3rdPerson: Word('подсекут', 6),
  masculinePast: Word('подсёк', 4),
  femininePast: Word('подсекла', 7),
  neuterPast: Word('подсекло', 7),
  pluralPast: Word('подсекли', 7),
  imperativeInformal: Word('подсеки', 6),
  imperativeFormal: Word('подсеките', 6),
  imperfect: [],
};

perfectVerbs.set(подсечь.name.text, подсечь);

export { подсечь };