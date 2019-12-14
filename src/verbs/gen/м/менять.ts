import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const менять: PerfectVerb = {
  name: Word('менять', 3),
  singular1stPerson: Word('меняю', 3),
  singular2ndPerson: Word('меняешь', 3),
  singular3rdPerson: Word('меняет', 3),
  plural1stPerson: Word('меняем', 3),
  plural2ndPerson: Word('меняете', 3),
  plural3rdPerson: Word('меняют', 3),
  masculinePast: Word('менял', 3),
  femininePast: Word('меняла', 3),
  neuterPast: Word('меняло', 3),
  pluralPast: Word('меняли', 3),
  imperativeInformal: Word('меняй', 3),
  imperativeFormal: Word('меняйте', 3),
  imperfect: ['поменять','обменять'],
};

perfectVerbs.set(менять.name.text, менять);

export { менять };