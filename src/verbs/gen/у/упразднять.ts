import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упразднять: PerfectVerb = {
  name: Word('упразднять', 7),
  singular1stPerson: Word('упраздняю', 7),
  singular2ndPerson: Word('упраздняешь', 7),
  singular3rdPerson: Word('упраздняет', 7),
  plural1stPerson: Word('упраздняем', 7),
  plural2ndPerson: Word('упраздняете', 7),
  plural3rdPerson: Word('упраздняют', 7),
  masculinePast: Word('упразднял', 7),
  femininePast: Word('упраздняла', 7),
  neuterPast: Word('упраздняло', 7),
  pluralPast: Word('упраздняли', 7),
  imperativeInformal: Word('упраздняй', 7),
  imperativeFormal: Word('упраздняйте', 7),
  imperfect: [],
};

perfectVerbs.set(упразднять.name.text, упразднять);

export { упразднять };