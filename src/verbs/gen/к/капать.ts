import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const капать: PerfectVerb = {
  name: Word('капать', 1),
  singular1stPerson: Word('капаю', 1),
  singular2ndPerson: Word('капаешь', 1),
  singular3rdPerson: Word('капает', 1),
  plural1stPerson: Word('капаем', 1),
  plural2ndPerson: Word('капаете', 1),
  plural3rdPerson: Word('капают', 1),
  masculinePast: Word('капал', 1),
  femininePast: Word('капала', 1),
  neuterPast: Word('капало', 1),
  pluralPast: Word('капали', 1),
  imperativeInformal: Word('капай', 1),
  imperativeFormal: Word('капайте', 1),
  imperfect: ['капнуть','накапать'],
};

perfectVerbs.set(капать.name.text, капать);

export { капать };