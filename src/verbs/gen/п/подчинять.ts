import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчинять: PerfectVerb = {
  name: Word('подчинять', 6),
  singular1stPerson: Word('подчиняю', 6),
  singular2ndPerson: Word('подчиняешь', 6),
  singular3rdPerson: Word('подчиняет', 6),
  plural1stPerson: Word('подчиняем', 6),
  plural2ndPerson: Word('подчиняете', 6),
  plural3rdPerson: Word('подчиняют', 6),
  masculinePast: Word('подчинял', 6),
  femininePast: Word('подчиняла', 6),
  neuterPast: Word('подчиняло', 6),
  pluralPast: Word('подчиняли', 6),
  imperativeInformal: Word('подчиняй', 6),
  imperativeFormal: Word('подчиняйте', 6),
  imperfect: [],
};

perfectVerbs.set(подчинять.name.text, подчинять);

export { подчинять };