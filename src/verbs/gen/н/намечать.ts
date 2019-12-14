import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намечать: PerfectVerb = {
  name: Word('намечать', 5),
  singular1stPerson: Word('намечаю', 5),
  singular2ndPerson: Word('намечаешь', 5),
  singular3rdPerson: Word('намечает', 5),
  plural1stPerson: Word('намечаем', 5),
  plural2ndPerson: Word('намечаете', 5),
  plural3rdPerson: Word('намечают', 5),
  masculinePast: Word('намечал', 5),
  femininePast: Word('намечала', 5),
  neuterPast: Word('намечало', 5),
  pluralPast: Word('намечали', 5),
  imperativeInformal: Word('намечай', 5),
  imperativeFormal: Word('намечайте', 5),
  imperfect: [],
};

perfectVerbs.set(намечать.name.text, намечать);

export { намечать };