import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облекаться: PerfectVerb = {
  name: Word('облекаться', 5),
  singular1stPerson: Word('облекаюсь', 5),
  singular2ndPerson: Word('облекаешься', 5),
  singular3rdPerson: Word('облекается', 5),
  plural1stPerson: Word('облекаемся', 5),
  plural2ndPerson: Word('облекаетесь', 5),
  plural3rdPerson: Word('облекаются', 5),
  masculinePast: Word('облекался', 5),
  femininePast: Word('облекалась', 5),
  neuterPast: Word('облекалось', 5),
  pluralPast: Word('облекались', 5),
  imperativeInformal: Word('облекайся', 5),
  imperativeFormal: Word('облекайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(облекаться.name.text, облекаться);

export { облекаться };