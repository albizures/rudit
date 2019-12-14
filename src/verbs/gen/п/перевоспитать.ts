import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоспитать: PerfectVerb = {
  name: Word('перевоспитать', 10),
  singular1stPerson: Word('перевоспитаю', 10),
  singular2ndPerson: Word('перевоспитаешь', 10),
  singular3rdPerson: Word('перевоспитает', 10),
  plural1stPerson: Word('перевоспитаем', 10),
  plural2ndPerson: Word('перевоспитаете', 10),
  plural3rdPerson: Word('перевоспитают', 10),
  masculinePast: Word('перевоспитал', 10),
  femininePast: Word('перевоспитала', 10),
  neuterPast: Word('перевоспитало', 10),
  pluralPast: Word('перевоспитали', 10),
  imperativeInformal: Word('перевоспитай', 10),
  imperativeFormal: Word('перевоспитайте', 10),
  imperfect: [],
};

perfectVerbs.set(перевоспитать.name.text, перевоспитать);

export { перевоспитать };