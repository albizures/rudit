import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переженить: PerfectVerb = {
  name: Word('переженить', 7),
  singular1stPerson: Word('переженю', 7),
  singular2ndPerson: Word('переженишь', 5),
  singular3rdPerson: Word('переженит', 5),
  plural1stPerson: Word('переженим', 5),
  plural2ndPerson: Word('пережените', 5),
  plural3rdPerson: Word('переженят', 5),
  masculinePast: Word('переженил', 7),
  femininePast: Word('переженила', 7),
  neuterPast: Word('переженило', 7),
  pluralPast: Word('переженили', 7),
  imperativeInformal: Word('пережени', 7),
  imperativeFormal: Word('пережените', 7),
  imperfect: [],
};

perfectVerbs.set(переженить.name.text, переженить);

export { переженить };