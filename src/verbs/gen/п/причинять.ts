import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причинять: PerfectVerb = {
  name: Word('причинять', 6),
  singular1stPerson: Word('причиняю', 6),
  singular2ndPerson: Word('причиняешь', 6),
  singular3rdPerson: Word('причиняет', 6),
  plural1stPerson: Word('причиняем', 6),
  plural2ndPerson: Word('причиняете', 6),
  plural3rdPerson: Word('причиняют', 6),
  masculinePast: Word('причинял', 6),
  femininePast: Word('причиняла', 6),
  neuterPast: Word('причиняло', 6),
  pluralPast: Word('причиняли', 6),
  imperativeInformal: Word('причиняй', 6),
  imperativeFormal: Word('причиняйте', 6),
  imperfect: ['причинить'],
};

perfectVerbs.set(причинять.name.text, причинять);

export { причинять };