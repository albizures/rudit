import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скачáть: PerfectVerb = {
  name: Word('скачáть', 2),
  singular1stPerson: Word('скачáю', 2),
  singular2ndPerson: Word('скачáешь', 2),
  singular3rdPerson: Word('скачáет', 2),
  plural1stPerson: Word('скачáем', 2),
  plural2ndPerson: Word('скачáете', 2),
  plural3rdPerson: Word('скачáют', 2),
  masculinePast: Word('скачáл', 2),
  femininePast: Word('скачáла', 2),
  neuterPast: Word('скачáло', 2),
  pluralPast: Word('скачáли', 2),
  imperativeInformal: Word('скачáй', 2),
  imperativeFormal: Word('скачáйте', 2),
  imperfect: ['скачивать'],
};

perfectVerbs.set(скачáть.name.text, скачáть);

export { скачáть };