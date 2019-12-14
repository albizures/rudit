import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переселить: PerfectVerb = {
  name: Word('переселить', 7),
  singular1stPerson: Word('переселю', 7),
  singular2ndPerson: Word('переселишь', 7),
  singular3rdPerson: Word('переселит', 7),
  plural1stPerson: Word('переселим', 7),
  plural2ndPerson: Word('переселите', 7),
  plural3rdPerson: Word('переселят', 7),
  masculinePast: Word('переселил', 7),
  femininePast: Word('переселила', 7),
  neuterPast: Word('переселило', 7),
  pluralPast: Word('переселили', 7),
  imperativeInformal: Word('пересели', 7),
  imperativeFormal: Word('переселите', 7),
  imperfect: [],
};

perfectVerbs.set(переселить.name.text, переселить);

export { переселить };