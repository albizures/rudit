import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попытать: PerfectVerb = {
  name: Word('попытать', 5),
  singular1stPerson: Word('попытаю', 5),
  singular2ndPerson: Word('попытаешь', 5),
  singular3rdPerson: Word('попытает', 5),
  plural1stPerson: Word('попытаем', 5),
  plural2ndPerson: Word('попытаете', 5),
  plural3rdPerson: Word('попытают', 5),
  masculinePast: Word('попытал', 5),
  femininePast: Word('попытала', 5),
  neuterPast: Word('попытало', 5),
  pluralPast: Word('попытали', 5),
  imperativeInformal: Word('попытай', 5),
  imperativeFormal: Word('попытайте', 5),
  imperfect: [],
};

perfectVerbs.set(попытать.name.text, попытать);

export { попытать };