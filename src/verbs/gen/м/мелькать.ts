import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мелькать: PerfectVerb = {
  name: Word('мелькать', 5),
  singular1stPerson: Word('мелькаю', 5),
  singular2ndPerson: Word('мелькаешь', 5),
  singular3rdPerson: Word('мелькает', 5),
  plural1stPerson: Word('мелькаем', 5),
  plural2ndPerson: Word('мелькаете', 5),
  plural3rdPerson: Word('мелькают', 5),
  masculinePast: Word('мелькал', 5),
  femininePast: Word('мелькала', 5),
  neuterPast: Word('мелькало', 5),
  pluralPast: Word('мелькали', 5),
  imperativeInformal: Word('мелькай', 5),
  imperativeFormal: Word('мелькайте', 5),
  imperfect: ['мелькнуть','замелькать'],
};

perfectVerbs.set(мелькать.name.text, мелькать);

export { мелькать };