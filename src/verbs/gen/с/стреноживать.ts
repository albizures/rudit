import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стреноживать: PerfectVerb = {
  name: Word('стреноживать', 5),
  singular1stPerson: Word('стреноживаю', 5),
  singular2ndPerson: Word('стреноживаешь', 5),
  singular3rdPerson: Word('стреноживает', 5),
  plural1stPerson: Word('стреноживаем', 5),
  plural2ndPerson: Word('стреноживаете', 5),
  plural3rdPerson: Word('стреноживают', 5),
  masculinePast: Word('стреноживал', 5),
  femininePast: Word('стреноживала', 5),
  neuterPast: Word('стреноживало', 5),
  pluralPast: Word('стреноживали', 5),
  imperativeInformal: Word('стреноживай', 5),
  imperativeFormal: Word('стреноживайте', 5),
  imperfect: [],
};

perfectVerbs.set(стреноживать.name.text, стреноживать);

export { стреноживать };