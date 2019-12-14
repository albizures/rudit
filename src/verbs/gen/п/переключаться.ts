import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переключаться: PerfectVerb = {
  name: Word('переключаться', 8),
  singular1stPerson: Word('переключаюсь', 8),
  singular2ndPerson: Word('переключаешься', 8),
  singular3rdPerson: Word('переключается', 8),
  plural1stPerson: Word('переключаемся', 8),
  plural2ndPerson: Word('переключаетесь', 8),
  plural3rdPerson: Word('переключаются', 8),
  masculinePast: Word('переключался', 8),
  femininePast: Word('переключалась', 8),
  neuterPast: Word('переключалось', 8),
  pluralPast: Word('переключались', 8),
  imperativeInformal: Word('переключайся', 8),
  imperativeFormal: Word('переключайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(переключаться.name.text, переключаться);

export { переключаться };