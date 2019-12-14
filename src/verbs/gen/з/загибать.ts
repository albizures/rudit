import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загибать: PerfectVerb = {
  name: Word('загибать', 5),
  singular1stPerson: Word('загибаю', 5),
  singular2ndPerson: Word('загибаешь', 5),
  singular3rdPerson: Word('загибает', 5),
  plural1stPerson: Word('загибаем', 5),
  plural2ndPerson: Word('загибаете', 5),
  plural3rdPerson: Word('загибают', 5),
  masculinePast: Word('загибал', 5),
  femininePast: Word('загибала', 5),
  neuterPast: Word('загибало', 5),
  pluralPast: Word('загибали', 5),
  imperativeInformal: Word('загибай', 5),
  imperativeFormal: Word('загибайте', 5),
  imperfect: [],
};

perfectVerbs.set(загибать.name.text, загибать);

export { загибать };