import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечитать: PerfectVerb = {
  name: Word('перечитать', 7),
  singular1stPerson: Word('перечитаю', 7),
  singular2ndPerson: Word('перечитаешь', 7),
  singular3rdPerson: Word('перечитает', 7),
  plural1stPerson: Word('перечитаем', 7),
  plural2ndPerson: Word('перечитаете', 7),
  plural3rdPerson: Word('перечитают', 7),
  masculinePast: Word('перечитал', 7),
  femininePast: Word('перечитала', 7),
  neuterPast: Word('перечитало', 7),
  pluralPast: Word('перечитали', 7),
  imperativeInformal: Word('перечитай', 7),
  imperativeFormal: Word('перечитайте', 7),
  imperfect: [],
};

perfectVerbs.set(перечитать.name.text, перечитать);

export { перечитать };