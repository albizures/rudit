import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удлинять: PerfectVerb = {
  name: Word('удлинять', 5),
  singular1stPerson: Word('удлиняю', 5),
  singular2ndPerson: Word('удлиняешь', 5),
  singular3rdPerson: Word('удлиняет', 5),
  plural1stPerson: Word('удлиняем', 5),
  plural2ndPerson: Word('удлиняете', 5),
  plural3rdPerson: Word('удлиняют', 5),
  masculinePast: Word('удлинял', 5),
  femininePast: Word('удлиняла', 5),
  neuterPast: Word('удлиняло', 5),
  pluralPast: Word('удлиняли', 5),
  imperativeInformal: Word('удлиняй', 5),
  imperativeFormal: Word('удлиняйте', 5),
  imperfect: [],
};

perfectVerbs.set(удлинять.name.text, удлинять);

export { удлинять };