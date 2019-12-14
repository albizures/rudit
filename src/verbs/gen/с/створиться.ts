import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створиться: PerfectVerb = {
  name: Word('створиться', 5),
  singular1stPerson: Word('створюсь', 5),
  singular2ndPerson: Word('створишься', 5),
  singular3rdPerson: Word('створится', 5),
  plural1stPerson: Word('створимся', 5),
  plural2ndPerson: Word('створитесь', 5),
  plural3rdPerson: Word('створятся', 5),
  masculinePast: Word('створился', 5),
  femininePast: Word('створилась', 5),
  neuterPast: Word('створилось', 5),
  pluralPast: Word('створились', 5),
  imperativeInformal: Word('створись', 5),
  imperativeFormal: Word('створитесь', 5),
  imperfect: [],
};

perfectVerbs.set(створиться.name.text, створиться);

export { створиться };