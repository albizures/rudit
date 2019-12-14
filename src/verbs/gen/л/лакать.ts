import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лакать: PerfectVerb = {
  name: Word('лакать', 3),
  singular1stPerson: Word('лакаю', 3),
  singular2ndPerson: Word('лакаешь', 3),
  singular3rdPerson: Word('лакает', 3),
  plural1stPerson: Word('лакаем', 3),
  plural2ndPerson: Word('лакаете', 3),
  plural3rdPerson: Word('лакают', 3),
  masculinePast: Word('лакал', 3),
  femininePast: Word('лакала', 3),
  neuterPast: Word('лакало', 3),
  pluralPast: Word('лакали', 3),
  imperativeInformal: Word('лакай', 3),
  imperativeFormal: Word('лакайте', 3),
  imperfect: [],
};

perfectVerbs.set(лакать.name.text, лакать);

export { лакать };