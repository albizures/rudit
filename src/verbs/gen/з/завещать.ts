import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завещать: PerfectVerb = {
  name: Word('завещать', 5),
  singular1stPerson: Word('завещаю', 5),
  singular2ndPerson: Word('завещаешь', 5),
  singular3rdPerson: Word('завещает', 5),
  plural1stPerson: Word('завещаем', 5),
  plural2ndPerson: Word('завещаете', 5),
  plural3rdPerson: Word('завещают', 5),
  masculinePast: Word('завещал', 5),
  femininePast: Word('завещала', 5),
  neuterPast: Word('завещало', 5),
  pluralPast: Word('завещали', 5),
  imperativeInformal: Word('завещай', 5),
  imperativeFormal: Word('завещайте', 5),
  imperfect: [],
};

perfectVerbs.set(завещать.name.text, завещать);

export { завещать };