import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переварить: PerfectVerb = {
  name: Word('переварить', 7),
  singular1stPerson: Word('переварю', 7),
  singular2ndPerson: Word('переваришь', 5),
  singular3rdPerson: Word('переварит', 5),
  plural1stPerson: Word('переварим', 5),
  plural2ndPerson: Word('переварите', 5),
  plural3rdPerson: Word('переварят', 5),
  masculinePast: Word('переварил', 7),
  femininePast: Word('переварила', 7),
  neuterPast: Word('переварило', 7),
  pluralPast: Word('переварили', 7),
  imperativeInformal: Word('перевари', 7),
  imperativeFormal: Word('переварите', 7),
  imperfect: [],
};

perfectVerbs.set(переварить.name.text, переварить);

export { переварить };