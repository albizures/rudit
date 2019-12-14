import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переворачиваться: PerfectVerb = {
  name: Word('переворачиваться', 7),
  singular1stPerson: Word('переворачиваюсь', 7),
  singular2ndPerson: Word('переворачиваешься', 7),
  singular3rdPerson: Word('переворачивается', 7),
  plural1stPerson: Word('переворачиваемся', 7),
  plural2ndPerson: Word('переворачиваетесь', 7),
  plural3rdPerson: Word('переворачиваются', 7),
  masculinePast: Word('переворачивался', 7),
  femininePast: Word('переворачивалась', 7),
  neuterPast: Word('переворачивалось', 7),
  pluralPast: Word('переворачивались', 7),
  imperativeInformal: Word('переворачивайся', 7),
  imperativeFormal: Word('переворачивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переворачиваться.name.text, переворачиваться);

export { переворачиваться };