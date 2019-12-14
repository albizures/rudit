import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const губить: PerfectVerb = {
  name: Word('губить', 3),
  singular1stPerson: Word('гублю', 4),
  singular2ndPerson: Word('губишь', 1),
  singular3rdPerson: Word('губит', 1),
  plural1stPerson: Word('губим', 1),
  plural2ndPerson: Word('губите', 1),
  plural3rdPerson: Word('губят', 1),
  masculinePast: Word('губил', 3),
  femininePast: Word('губила', 3),
  neuterPast: Word('губило', 3),
  pluralPast: Word('губили', 3),
  imperativeInformal: Word('губи', 3),
  imperativeFormal: Word('губите', 3),
  imperfect: [],
};

perfectVerbs.set(губить.name.text, губить);

export { губить };