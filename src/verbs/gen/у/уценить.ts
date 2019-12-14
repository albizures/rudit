import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уценить: PerfectVerb = {
  name: Word('уценить', 4),
  singular1stPerson: Word('уценю', 4),
  singular2ndPerson: Word('уценишь', 2),
  singular3rdPerson: Word('уценит', 2),
  plural1stPerson: Word('уценим', 2),
  plural2ndPerson: Word('уцените', 2),
  plural3rdPerson: Word('уценят', 2),
  masculinePast: Word('уценил', 4),
  femininePast: Word('уценила', 4),
  neuterPast: Word('уценило', 4),
  pluralPast: Word('уценили', 4),
  imperativeInformal: Word('уцени', 4),
  imperativeFormal: Word('уцените', 4),
  imperfect: [],
};

perfectVerbs.set(уценить.name.text, уценить);

export { уценить };