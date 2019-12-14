import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перештопать: PerfectVerb = {
  name: Word('перештопать', 6),
  singular1stPerson: Word('перештопаю', 6),
  singular2ndPerson: Word('перештопаешь', 6),
  singular3rdPerson: Word('перештопает', 6),
  plural1stPerson: Word('перештопаем', 6),
  plural2ndPerson: Word('перештопаете', 6),
  plural3rdPerson: Word('перештопают', 6),
  masculinePast: Word('перештопал', 6),
  femininePast: Word('перештопала', 6),
  neuterPast: Word('перештопало', 6),
  pluralPast: Word('перештопали', 6),
  imperativeInformal: Word('перештопай', 6),
  imperativeFormal: Word('перештопайте', 6),
  imperfect: [],
};

perfectVerbs.set(перештопать.name.text, перештопать);

export { перештопать };