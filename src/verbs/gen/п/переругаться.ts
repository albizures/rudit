import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переругаться: PerfectVerb = {
  name: Word('переругаться', 7),
  singular1stPerson: Word('переругаюсь', 7),
  singular2ndPerson: Word('переругаешься', 7),
  singular3rdPerson: Word('переругается', 7),
  plural1stPerson: Word('переругаемся', 7),
  plural2ndPerson: Word('переругаетесь', 7),
  plural3rdPerson: Word('переругаются', 7),
  masculinePast: Word('переругался', 7),
  femininePast: Word('переругалась', 7),
  neuterPast: Word('переругалось', 7),
  pluralPast: Word('переругались', 7),
  imperativeInformal: Word('переругайся', 7),
  imperativeFormal: Word('переругайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переругаться.name.text, переругаться);

export { переругаться };