import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напоминать: PerfectVerb = {
  name: Word('напоминать', 7),
  singular1stPerson: Word('напоминаю', 7),
  singular2ndPerson: Word('напоминаешь', 7),
  singular3rdPerson: Word('напоминает', 7),
  plural1stPerson: Word('напоминаем', 7),
  plural2ndPerson: Word('напоминаете', 7),
  plural3rdPerson: Word('напоминают', 7),
  masculinePast: Word('напоминал', 7),
  femininePast: Word('напоминала', 7),
  neuterPast: Word('напоминало', 7),
  pluralPast: Word('напоминали', 7),
  imperativeInformal: Word('напоминай', 7),
  imperativeFormal: Word('напоминайте', 7),
  imperfect: ['напомнить'],
};

perfectVerbs.set(напоминать.name.text, напоминать);

export { напоминать };