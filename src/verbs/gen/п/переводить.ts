import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переводить: PerfectVerb = {
  name: Word('переводить', 7),
  singular1stPerson: Word('перевожу', 7),
  singular2ndPerson: Word('переводишь', 5),
  singular3rdPerson: Word('переводит', 5),
  plural1stPerson: Word('переводим', 5),
  plural2ndPerson: Word('переводите', 5),
  plural3rdPerson: Word('переводят', 5),
  masculinePast: Word('переводил', 7),
  femininePast: Word('переводила', 7),
  neuterPast: Word('переводило', 7),
  pluralPast: Word('переводили', 7),
  imperativeInformal: Word('переводи', 7),
  imperativeFormal: Word('переводите', 7),
  imperfect: ['перевести'],
};

perfectVerbs.set(переводить.name.text, переводить);

export { переводить };