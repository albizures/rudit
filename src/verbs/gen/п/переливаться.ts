import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переливаться: PerfectVerb = {
  name: Word('переливаться', 7),
  singular1stPerson: Word('переливаюсь', 7),
  singular2ndPerson: Word('переливаешься', 7),
  singular3rdPerson: Word('переливается', 7),
  plural1stPerson: Word('переливаемся', 7),
  plural2ndPerson: Word('переливаетесь', 7),
  plural3rdPerson: Word('переливаются', 7),
  masculinePast: Word('переливался', 7),
  femininePast: Word('переливалась', 7),
  neuterPast: Word('переливалось', 7),
  pluralPast: Word('переливались', 7),
  imperativeInformal: Word('переливайся', 7),
  imperativeFormal: Word('переливайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переливаться.name.text, переливаться);

export { переливаться };