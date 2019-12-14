import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предохранять: PerfectVerb = {
  name: Word('предохранять', 9),
  singular1stPerson: Word('предохраняю', 9),
  singular2ndPerson: Word('предохраняешь', 9),
  singular3rdPerson: Word('предохраняет', 9),
  plural1stPerson: Word('предохраняем', 9),
  plural2ndPerson: Word('предохраняете', 9),
  plural3rdPerson: Word('предохраняют', 9),
  masculinePast: Word('предохранял', 9),
  femininePast: Word('предохраняла', 9),
  neuterPast: Word('предохраняло', 9),
  pluralPast: Word('предохраняли', 9),
  imperativeInformal: Word('предохраняй', 9),
  imperativeFormal: Word('предохраняйте', 9),
  imperfect: [],
};

perfectVerbs.set(предохранять.name.text, предохранять);

export { предохранять };