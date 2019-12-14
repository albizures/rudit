import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переругиваться: PerfectVerb = {
  name: Word('переругиваться', 5),
  singular1stPerson: Word('переругиваюсь', 5),
  singular2ndPerson: Word('переругиваешься', 5),
  singular3rdPerson: Word('переругивается', 5),
  plural1stPerson: Word('переругиваемся', 5),
  plural2ndPerson: Word('переругиваетесь', 5),
  plural3rdPerson: Word('переругиваются', 5),
  masculinePast: Word('переругивался', 5),
  femininePast: Word('переругивалась', 5),
  neuterPast: Word('переругивалось', 5),
  pluralPast: Word('переругивались', 5),
  imperativeInformal: Word('переругивайся', 5),
  imperativeFormal: Word('переругивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(переругиваться.name.text, переругиваться);

export { переругиваться };