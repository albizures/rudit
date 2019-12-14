import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылакать: PerfectVerb = {
  name: Word('вылакать', 1),
  singular1stPerson: Word('вылакаю', 1),
  singular2ndPerson: Word('вылакаешь', 1),
  singular3rdPerson: Word('вылакает', 1),
  plural1stPerson: Word('вылакаем', 1),
  plural2ndPerson: Word('вылакаете', 1),
  plural3rdPerson: Word('вылакают', 1),
  masculinePast: Word('вылакал', 1),
  femininePast: Word('вылакала', 1),
  neuterPast: Word('вылакало', 1),
  pluralPast: Word('вылакали', 1),
  imperativeInformal: Word('вылакай', 1),
  imperativeFormal: Word('вылакайте', 1),
  imperfect: [],
};

perfectVerbs.set(вылакать.name.text, вылакать);

export { вылакать };