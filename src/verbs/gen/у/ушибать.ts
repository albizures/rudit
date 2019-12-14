import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушибать: PerfectVerb = {
  name: Word('ушибать', 4),
  singular1stPerson: Word('ушибаю', 4),
  singular2ndPerson: Word('ушибаешь', 4),
  singular3rdPerson: Word('ушибает', 4),
  plural1stPerson: Word('ушибаем', 4),
  plural2ndPerson: Word('ушибаете', 4),
  plural3rdPerson: Word('ушибают', 4),
  masculinePast: Word('ушибал', 4),
  femininePast: Word('ушибала', 4),
  neuterPast: Word('ушибало', 4),
  pluralPast: Word('ушибали', 4),
  imperativeInformal: Word('ушибай', 4),
  imperativeFormal: Word('ушибайте', 4),
  imperfect: [],
};

perfectVerbs.set(ушибать.name.text, ушибать);

export { ушибать };