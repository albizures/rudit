import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрастать: PerfectVerb = {
  name: Word('подрастать', 7),
  singular1stPerson: Word('подрастаю', 7),
  singular2ndPerson: Word('подрастаешь', 7),
  singular3rdPerson: Word('подрастает', 7),
  plural1stPerson: Word('подрастаем', 7),
  plural2ndPerson: Word('подрастаете', 7),
  plural3rdPerson: Word('подрастают', 7),
  masculinePast: Word('подрастал', 7),
  femininePast: Word('подрастала', 7),
  neuterPast: Word('подрастало', 7),
  pluralPast: Word('подрастали', 7),
  imperativeInformal: Word('подрастай', 7),
  imperativeFormal: Word('подрастайте', 7),
  imperfect: [],
};

perfectVerbs.set(подрастать.name.text, подрастать);

export { подрастать };