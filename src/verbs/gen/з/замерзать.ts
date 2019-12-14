import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замерзать: PerfectVerb = {
  name: Word('замерзать', 6),
  singular1stPerson: Word('замерзаю', 6),
  singular2ndPerson: Word('замерзаешь', 6),
  singular3rdPerson: Word('замерзает', 6),
  plural1stPerson: Word('замерзаем', 6),
  plural2ndPerson: Word('замерзаете', 6),
  plural3rdPerson: Word('замерзают', 6),
  masculinePast: Word('замерзал', 6),
  femininePast: Word('замерзала', 6),
  neuterPast: Word('замерзало', 6),
  pluralPast: Word('замерзали', 6),
  imperativeInformal: Word('замерзай', 6),
  imperativeFormal: Word('замерзайте', 6),
  imperfect: ['замёрзнуть'],
};

perfectVerbs.set(замерзать.name.text, замерзать);

export { замерзать };