import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затруднять: PerfectVerb = {
  name: Word('затруднять', 7),
  singular1stPerson: Word('затрудняю', 7),
  singular2ndPerson: Word('затрудняешь', 7),
  singular3rdPerson: Word('затрудняет', 7),
  plural1stPerson: Word('затрудняем', 7),
  plural2ndPerson: Word('затрудняете', 7),
  plural3rdPerson: Word('затрудняют', 7),
  masculinePast: Word('затруднял', 7),
  femininePast: Word('затрудняла', 7),
  neuterPast: Word('затрудняло', 7),
  pluralPast: Word('затрудняли', 7),
  imperativeInformal: Word('затрудняй', 7),
  imperativeFormal: Word('затрудняйте', 7),
  imperfect: [],
};

perfectVerbs.set(затруднять.name.text, затруднять);

export { затруднять };