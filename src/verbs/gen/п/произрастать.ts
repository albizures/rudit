import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произрастать: PerfectVerb = {
  name: Word('произрастать', 9),
  singular1stPerson: Word('произрастаю', 9),
  singular2ndPerson: Word('произрастаешь', 9),
  singular3rdPerson: Word('произрастает', 9),
  plural1stPerson: Word('произрастаем', 9),
  plural2ndPerson: Word('произрастаете', 9),
  plural3rdPerson: Word('произрастают', 9),
  masculinePast: Word('произрастал', 9),
  femininePast: Word('произрастала', 9),
  neuterPast: Word('произрастало', 9),
  pluralPast: Word('произрастали', 9),
  imperativeInformal: Word('произрастай', 9),
  imperativeFormal: Word('произрастайте', 9),
  imperfect: [],
};

perfectVerbs.set(произрастать.name.text, произрастать);

export { произрастать };