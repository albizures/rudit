import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переучиваться: PerfectVerb = {
  name: Word('переучиваться', 4),
  singular1stPerson: Word('переучиваюсь', 4),
  singular2ndPerson: Word('переучиваешься', 4),
  singular3rdPerson: Word('переучивается', 4),
  plural1stPerson: Word('переучиваемся', 4),
  plural2ndPerson: Word('переучиваетесь', 4),
  plural3rdPerson: Word('переучиваются', 4),
  masculinePast: Word('переучивался', 4),
  femininePast: Word('переучивалась', 4),
  neuterPast: Word('переучивалось', 4),
  pluralPast: Word('переучивались', 4),
  imperativeInformal: Word('переучивайся', 4),
  imperativeFormal: Word('переучивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(переучиваться.name.text, переучиваться);

export { переучиваться };