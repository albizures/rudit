import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переминаться: PerfectVerb = {
  name: Word('переминаться', 7),
  singular1stPerson: Word('переминаюсь', 7),
  singular2ndPerson: Word('переминаешься', 7),
  singular3rdPerson: Word('переминается', 7),
  plural1stPerson: Word('переминаемся', 7),
  plural2ndPerson: Word('переминаетесь', 7),
  plural3rdPerson: Word('переминаются', 7),
  masculinePast: Word('переминался', 7),
  femininePast: Word('переминалась', 7),
  neuterPast: Word('переминалось', 7),
  pluralPast: Word('переминались', 7),
  imperativeInformal: Word('переминайся', 7),
  imperativeFormal: Word('переминайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переминаться.name.text, переминаться);

export { переминаться };