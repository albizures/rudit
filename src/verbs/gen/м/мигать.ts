import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мигать: PerfectVerb = {
  name: Word('мигать', 3),
  singular1stPerson: Word('мигаю', 3),
  singular2ndPerson: Word('мигаешь', 3),
  singular3rdPerson: Word('мигает', 3),
  plural1stPerson: Word('мигаем', 3),
  plural2ndPerson: Word('мигаете', 3),
  plural3rdPerson: Word('мигают', 3),
  masculinePast: Word('мигал', 3),
  femininePast: Word('мигала', 3),
  neuterPast: Word('мигало', 3),
  pluralPast: Word('мигали', 3),
  imperativeInformal: Word('мигай', 3),
  imperativeFormal: Word('мигайте', 3),
  imperfect: [],
};

perfectVerbs.set(мигать.name.text, мигать);

export { мигать };