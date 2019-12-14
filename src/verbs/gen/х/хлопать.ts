import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлопать: PerfectVerb = {
  name: Word('хлопать', 2),
  singular1stPerson: Word('хлопаю', 2),
  singular2ndPerson: Word('хлопаешь', 2),
  singular3rdPerson: Word('хлопает', 2),
  plural1stPerson: Word('хлопаем', 2),
  plural2ndPerson: Word('хлопаете', 2),
  plural3rdPerson: Word('хлопают', 2),
  masculinePast: Word('хлопал', 2),
  femininePast: Word('хлопала', 2),
  neuterPast: Word('хлопало', 2),
  pluralPast: Word('хлопали', 2),
  imperativeInformal: Word('хлопай', 2),
  imperativeFormal: Word('хлопайте', 2),
  imperfect: ['хлопнуть','похлопать'],
};

perfectVerbs.set(хлопать.name.text, хлопать);

export { хлопать };