import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врастать: PerfectVerb = {
  name: Word('врастать', 5),
  singular1stPerson: Word('врастаю', 5),
  singular2ndPerson: Word('врастаешь', 5),
  singular3rdPerson: Word('врастает', 5),
  plural1stPerson: Word('врастаем', 5),
  plural2ndPerson: Word('врастаете', 5),
  plural3rdPerson: Word('врастают', 5),
  masculinePast: Word('врастал', 5),
  femininePast: Word('врастала', 5),
  neuterPast: Word('врастало', 5),
  pluralPast: Word('врастали', 5),
  imperativeInformal: Word('врастай', 5),
  imperativeFormal: Word('врастайте', 5),
  imperfect: [],
};

perfectVerbs.set(врастать.name.text, врастать);

export { врастать };