import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переработаться: PerfectVerb = {
  name: Word('переработаться', 7),
  singular1stPerson: Word('переработаюсь', 7),
  singular2ndPerson: Word('переработаешься', 7),
  singular3rdPerson: Word('переработается', 7),
  plural1stPerson: Word('переработаемся', 7),
  plural2ndPerson: Word('переработаетесь', 7),
  plural3rdPerson: Word('переработаются', 7),
  masculinePast: Word('переработался', 7),
  femininePast: Word('переработалась', 7),
  neuterPast: Word('переработалось', 7),
  pluralPast: Word('переработались', 7),
  imperativeInformal: Word('переработайся', 7),
  imperativeFormal: Word('переработайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переработаться.name.text, переработаться);

export { переработаться };