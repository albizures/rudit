import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ниспадать: PerfectVerb = {
  name: Word('ниспадать', 6),
  singular1stPerson: Word('ниспадаю', 6),
  singular2ndPerson: Word('ниспадаешь', 6),
  singular3rdPerson: Word('ниспадает', 6),
  plural1stPerson: Word('ниспадаем', 6),
  plural2ndPerson: Word('ниспадаете', 6),
  plural3rdPerson: Word('ниспадают', 6),
  masculinePast: Word('ниспадал', 6),
  femininePast: Word('ниспадала', 6),
  neuterPast: Word('ниспадало', 6),
  pluralPast: Word('ниспадали', 6),
  imperativeInformal: Word('ниспадай', 6),
  imperativeFormal: Word('ниспадайте', 6),
  imperfect: [],
};

perfectVerbs.set(ниспадать.name.text, ниспадать);

export { ниспадать };