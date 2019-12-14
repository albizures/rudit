import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переходить: PerfectVerb = {
  name: Word('переходить', 7),
  singular1stPerson: Word('перехожу', 7),
  singular2ndPerson: Word('переходишь', 5),
  singular3rdPerson: Word('переходит', 5),
  plural1stPerson: Word('переходим', 5),
  plural2ndPerson: Word('переходите', 5),
  plural3rdPerson: Word('переходят', 5),
  masculinePast: Word('переходил', 7),
  femininePast: Word('переходила', 7),
  neuterPast: Word('переходило', 7),
  pluralPast: Word('переходили', 7),
  imperativeInformal: Word('переходи', 7),
  imperativeFormal: Word('переходите', 7),
  imperfect: ['перейти'],
};

perfectVerbs.set(переходить.name.text, переходить);

export { переходить };