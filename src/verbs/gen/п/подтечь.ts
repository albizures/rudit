import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтечь: PerfectVerb = {
  name: Word('подтечь', 4),
  singular1stPerson: Word('подтеку', 6),
  singular2ndPerson: Word('подтечёшь', 6),
  singular3rdPerson: Word('подтечёт', 6),
  plural1stPerson: Word('подтечём', 6),
  plural2ndPerson: Word('подтечёте', 6),
  plural3rdPerson: Word('подтекут', 6),
  masculinePast: Word('подтёк', 4),
  femininePast: Word('подтекла', 7),
  neuterPast: Word('подтекло', 7),
  pluralPast: Word('подтекли', 7),
  imperativeInformal: Word('подтеки', 6),
  imperativeFormal: Word('подтеките', 6),
  imperfect: [],
};

perfectVerbs.set(подтечь.name.text, подтечь);

export { подтечь };