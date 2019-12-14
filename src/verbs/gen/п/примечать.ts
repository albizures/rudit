import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примечать: PerfectVerb = {
  name: Word('примечать', 6),
  singular1stPerson: Word('примечаю', 6),
  singular2ndPerson: Word('примечаешь', 6),
  singular3rdPerson: Word('примечает', 6),
  plural1stPerson: Word('примечаем', 6),
  plural2ndPerson: Word('примечаете', 6),
  plural3rdPerson: Word('примечают', 6),
  masculinePast: Word('примечал', 6),
  femininePast: Word('примечала', 6),
  neuterPast: Word('примечало', 6),
  pluralPast: Word('примечали', 6),
  imperativeInformal: Word('примечай', 6),
  imperativeFormal: Word('примечайте', 6),
  imperfect: [],
};

perfectVerbs.set(примечать.name.text, примечать);

export { примечать };