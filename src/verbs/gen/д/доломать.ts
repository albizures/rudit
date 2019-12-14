import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доломать: PerfectVerb = {
  name: Word('доломать', 5),
  singular1stPerson: Word('доломаю', 5),
  singular2ndPerson: Word('доломаешь', 5),
  singular3rdPerson: Word('доломает', 5),
  plural1stPerson: Word('доломаем', 5),
  plural2ndPerson: Word('доломаете', 5),
  plural3rdPerson: Word('доломают', 5),
  masculinePast: Word('доломал', 5),
  femininePast: Word('доломала', 5),
  neuterPast: Word('доломало', 5),
  pluralPast: Word('доломали', 5),
  imperativeInformal: Word('доломай', 5),
  imperativeFormal: Word('доломайте', 5),
  imperfect: [],
};

perfectVerbs.set(доломать.name.text, доломать);

export { доломать };