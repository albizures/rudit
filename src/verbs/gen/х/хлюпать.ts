import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлюпать: PerfectVerb = {
  name: Word('хлюпать', 2),
  singular1stPerson: Word('хлюпаю', 2),
  singular2ndPerson: Word('хлюпаешь', 2),
  singular3rdPerson: Word('хлюпает', 2),
  plural1stPerson: Word('хлюпаем', 2),
  plural2ndPerson: Word('хлюпаете', 2),
  plural3rdPerson: Word('хлюпают', 2),
  masculinePast: Word('хлюпал', 2),
  femininePast: Word('хлюпала', 2),
  neuterPast: Word('хлюпало', 2),
  pluralPast: Word('хлюпали', 2),
  imperativeInformal: Word('хлюпай', 2),
  imperativeFormal: Word('хлюпайте', 2),
  imperfect: [],
};

perfectVerbs.set(хлюпать.name.text, хлюпать);

export { хлюпать };