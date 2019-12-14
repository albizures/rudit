import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извинять: PerfectVerb = {
  name: Word('извинять', 5),
  singular1stPerson: Word('извиняю', 5),
  singular2ndPerson: Word('извиняешь', 5),
  singular3rdPerson: Word('извиняет', 5),
  plural1stPerson: Word('извиняем', 5),
  plural2ndPerson: Word('извиняете', 5),
  plural3rdPerson: Word('извиняют', 5),
  masculinePast: Word('извинял', 5),
  femininePast: Word('извиняла', 5),
  neuterPast: Word('извиняло', 5),
  pluralPast: Word('извиняли', 5),
  imperativeInformal: Word('извиняй', 5),
  imperativeFormal: Word('извиняйте', 5),
  imperfect: ['извинить'],
};

perfectVerbs.set(извинять.name.text, извинять);

export { извинять };