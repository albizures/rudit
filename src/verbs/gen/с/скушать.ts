import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скушать: PerfectVerb = {
  name: Word('скушать', 2),
  singular1stPerson: Word('скушаю', 2),
  singular2ndPerson: Word('скушаешь', 2),
  singular3rdPerson: Word('скушает', 2),
  plural1stPerson: Word('скушаем', 2),
  plural2ndPerson: Word('скушаете', 2),
  plural3rdPerson: Word('скушают', 2),
  masculinePast: Word('скушал', 2),
  femininePast: Word('скушала', 2),
  neuterPast: Word('скушало', 2),
  pluralPast: Word('скушали', 2),
  imperativeInformal: Word('скушай', 2),
  imperativeFormal: Word('скушайте', 2),
  imperfect: [],
};

perfectVerbs.set(скушать.name.text, скушать);

export { скушать };