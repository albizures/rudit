import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оценить: PerfectVerb = {
  name: Word('оценить', 4),
  singular1stPerson: Word('оценю', 4),
  singular2ndPerson: Word('оценишь', 2),
  singular3rdPerson: Word('оценит', 2),
  plural1stPerson: Word('оценим', 2),
  plural2ndPerson: Word('оцените', 2),
  plural3rdPerson: Word('оценят', 2),
  masculinePast: Word('оценил', 4),
  femininePast: Word('оценила', 4),
  neuterPast: Word('оценило', 4),
  pluralPast: Word('оценили', 4),
  imperativeInformal: Word('оцени', 4),
  imperativeFormal: Word('оцените', 4),
  imperfect: [],
};

perfectVerbs.set(оценить.name.text, оценить);

export { оценить };