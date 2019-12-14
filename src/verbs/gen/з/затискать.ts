import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затискать: PerfectVerb = {
  name: Word('затискать', 3),
  singular1stPerson: Word('затискаю', 3),
  singular2ndPerson: Word('затискаешь', 3),
  singular3rdPerson: Word('затискает', 3),
  plural1stPerson: Word('затискаем', 3),
  plural2ndPerson: Word('затискаете', 3),
  plural3rdPerson: Word('затискают', 3),
  masculinePast: Word('затискал', 3),
  femininePast: Word('затискала', 3),
  neuterPast: Word('затискало', 3),
  pluralPast: Word('затискали', 3),
  imperativeInformal: Word('затискай', 3),
  imperativeFormal: Word('затискайте', 3),
  imperfect: [],
};

perfectVerbs.set(затискать.name.text, затискать);

export { затискать };