import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переменить: PerfectVerb = {
  name: Word('переменить', 7),
  singular1stPerson: Word('переменю', 7),
  singular2ndPerson: Word('переменишь', 5),
  singular3rdPerson: Word('переменит', 5),
  plural1stPerson: Word('переменим', 5),
  plural2ndPerson: Word('перемените', 5),
  plural3rdPerson: Word('переменят', 5),
  masculinePast: Word('переменил', 7),
  femininePast: Word('переменила', 7),
  neuterPast: Word('переменило', 7),
  pluralPast: Word('переменили', 7),
  imperativeInformal: Word('перемени', 7),
  imperativeFormal: Word('перемените', 7),
  imperfect: [],
};

perfectVerbs.set(переменить.name.text, переменить);

export { переменить };