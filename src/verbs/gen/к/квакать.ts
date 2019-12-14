import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const квакать: PerfectVerb = {
  name: Word('квакать', 2),
  singular1stPerson: Word('квакаю', 2),
  singular2ndPerson: Word('квакаешь', 2),
  singular3rdPerson: Word('квакает', 2),
  plural1stPerson: Word('квакаем', 2),
  plural2ndPerson: Word('квакаете', 2),
  plural3rdPerson: Word('квакают', 2),
  masculinePast: Word('квакал', 2),
  femininePast: Word('квакала', 2),
  neuterPast: Word('квакало', 2),
  pluralPast: Word('квакали', 2),
  imperativeInformal: Word('квакай', 2),
  imperativeFormal: Word('квакайте', 2),
  imperfect: [],
};

perfectVerbs.set(квакать.name.text, квакать);

export { квакать };