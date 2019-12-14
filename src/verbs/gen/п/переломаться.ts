import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переломаться: PerfectVerb = {
  name: Word('переломаться', 7),
  singular1stPerson: Word('переломаюсь', 7),
  singular2ndPerson: Word('переломаешься', 7),
  singular3rdPerson: Word('переломается', 7),
  plural1stPerson: Word('переломаемся', 7),
  plural2ndPerson: Word('переломаетесь', 7),
  plural3rdPerson: Word('переломаются', 7),
  masculinePast: Word('переломался', 7),
  femininePast: Word('переломалась', 7),
  neuterPast: Word('переломалось', 7),
  pluralPast: Word('переломались', 7),
  imperativeInformal: Word('переломайся', 7),
  imperativeFormal: Word('переломайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переломаться.name.text, переломаться);

export { переломаться };