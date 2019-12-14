import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ронять: PerfectVerb = {
  name: Word('ронять', 3),
  singular1stPerson: Word('роняю', 3),
  singular2ndPerson: Word('роняешь', 3),
  singular3rdPerson: Word('роняет', 3),
  plural1stPerson: Word('роняем', 3),
  plural2ndPerson: Word('роняете', 3),
  plural3rdPerson: Word('роняют', 3),
  masculinePast: Word('ронял', 3),
  femininePast: Word('роняла', 3),
  neuterPast: Word('роняло', 3),
  pluralPast: Word('роняли', 3),
  imperativeInformal: Word('роняй', 3),
  imperativeFormal: Word('роняйте', 3),
  imperfect: [],
};

perfectVerbs.set(ронять.name.text, ронять);

export { ронять };