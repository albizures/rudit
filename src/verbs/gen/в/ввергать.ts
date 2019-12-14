import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввергать: PerfectVerb = {
  name: Word('ввергать', 5),
  singular1stPerson: Word('ввергаю', 5),
  singular2ndPerson: Word('ввергаешь', 5),
  singular3rdPerson: Word('ввергает', 5),
  plural1stPerson: Word('ввергаем', 5),
  plural2ndPerson: Word('ввергаете', 5),
  plural3rdPerson: Word('ввергают', 5),
  masculinePast: Word('ввергал', 5),
  femininePast: Word('ввергала', 5),
  neuterPast: Word('ввергало', 5),
  pluralPast: Word('ввергали', 5),
  imperativeInformal: Word('ввергай', 5),
  imperativeFormal: Word('ввергайте', 5),
  imperfect: [],
};

perfectVerbs.set(ввергать.name.text, ввергать);

export { ввергать };