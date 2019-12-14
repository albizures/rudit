import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассимилировать: PerfectVerb = {
  name: Word('ассимилировать', 7),
  singular1stPerson: Word('ассимилирую', 7),
  singular2ndPerson: Word('ассимилируешь', 7),
  singular3rdPerson: Word('ассимилирует', 7),
  plural1stPerson: Word('ассимилируем', 7),
  plural2ndPerson: Word('ассимилируете', 7),
  plural3rdPerson: Word('ассимилируют', 7),
  masculinePast: Word('ассимилировал', 7),
  femininePast: Word('ассимилировала', 7),
  neuterPast: Word('ассимилировало', 7),
  pluralPast: Word('ассимилировали', 7),
  imperativeInformal: Word('ассимилируй', 7),
  imperativeFormal: Word('ассимилируйте', 7),
  imperfect: [],
};

perfectVerbs.set(ассимилировать.name.text, ассимилировать);

export { ассимилировать };