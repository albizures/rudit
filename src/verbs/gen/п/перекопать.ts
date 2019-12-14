import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекопать: PerfectVerb = {
  name: Word('перекопать', 7),
  singular1stPerson: Word('перекопаю', 7),
  singular2ndPerson: Word('перекопаешь', 7),
  singular3rdPerson: Word('перекопает', 7),
  plural1stPerson: Word('перекопаем', 7),
  plural2ndPerson: Word('перекопаете', 7),
  plural3rdPerson: Word('перекопают', 7),
  masculinePast: Word('перекопал', 7),
  femininePast: Word('перекопала', 7),
  neuterPast: Word('перекопало', 7),
  pluralPast: Word('перекопали', 7),
  imperativeInformal: Word('перекопай', 7),
  imperativeFormal: Word('перекопайте', 7),
  imperfect: [],
};

perfectVerbs.set(перекопать.name.text, перекопать);

export { перекопать };