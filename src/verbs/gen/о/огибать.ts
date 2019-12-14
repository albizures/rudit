import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огибать: PerfectVerb = {
  name: Word('огибать', 4),
  singular1stPerson: Word('огибаю', 4),
  singular2ndPerson: Word('огибаешь', 4),
  singular3rdPerson: Word('огибает', 4),
  plural1stPerson: Word('огибаем', 4),
  plural2ndPerson: Word('огибаете', 4),
  plural3rdPerson: Word('огибают', 4),
  masculinePast: Word('огибал', 4),
  femininePast: Word('огибала', 4),
  neuterPast: Word('огибало', 4),
  pluralPast: Word('огибали', 4),
  imperativeInformal: Word('огибай', 4),
  imperativeFormal: Word('огибайте', 4),
  imperfect: [],
};

perfectVerbs.set(огибать.name.text, огибать);

export { огибать };