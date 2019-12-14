import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронзать: PerfectVerb = {
  name: Word('пронзать', 5),
  singular1stPerson: Word('пронзаю', 5),
  singular2ndPerson: Word('пронзаешь', 5),
  singular3rdPerson: Word('пронзает', 5),
  plural1stPerson: Word('пронзаем', 5),
  plural2ndPerson: Word('пронзаете', 5),
  plural3rdPerson: Word('пронзают', 5),
  masculinePast: Word('пронзал', 5),
  femininePast: Word('пронзала', 5),
  neuterPast: Word('пронзало', 5),
  pluralPast: Word('пронзали', 5),
  imperativeInformal: Word('пронзай', 5),
  imperativeFormal: Word('пронзайте', 5),
  imperfect: [],
};

perfectVerbs.set(пронзать.name.text, пронзать);

export { пронзать };