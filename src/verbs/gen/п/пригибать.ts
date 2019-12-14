import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригибать: PerfectVerb = {
  name: Word('пригибать', 6),
  singular1stPerson: Word('пригибаю', 6),
  singular2ndPerson: Word('пригибаешь', 6),
  singular3rdPerson: Word('пригибает', 6),
  plural1stPerson: Word('пригибаем', 6),
  plural2ndPerson: Word('пригибаете', 6),
  plural3rdPerson: Word('пригибают', 6),
  masculinePast: Word('пригибал', 6),
  femininePast: Word('пригибала', 6),
  neuterPast: Word('пригибало', 6),
  pluralPast: Word('пригибали', 6),
  imperativeInformal: Word('пригибай', 6),
  imperativeFormal: Word('пригибайте', 6),
  imperfect: [],
};

perfectVerbs.set(пригибать.name.text, пригибать);

export { пригибать };