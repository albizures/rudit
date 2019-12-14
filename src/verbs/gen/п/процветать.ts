import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const процветать: PerfectVerb = {
  name: Word('процветать', 7),
  singular1stPerson: Word('процветаю', 7),
  singular2ndPerson: Word('процветаешь', 7),
  singular3rdPerson: Word('процветает', 7),
  plural1stPerson: Word('процветаем', 7),
  plural2ndPerson: Word('процветаете', 7),
  plural3rdPerson: Word('процветают', 7),
  masculinePast: Word('процветал', 7),
  femininePast: Word('процветала', 7),
  neuterPast: Word('процветало', 7),
  pluralPast: Word('процветали', 7),
  imperativeInformal: Word('процветай', 7),
  imperativeFormal: Word('процветайте', 7),
  imperfect: [],
};

perfectVerbs.set(процветать.name.text, процветать);

export { процветать };