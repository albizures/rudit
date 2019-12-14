import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поездить: PerfectVerb = {
  name: Word('поездить', 2),
  singular1stPerson: Word('поезжу', 2),
  singular2ndPerson: Word('поездишь', 2),
  singular3rdPerson: Word('поездит', 2),
  plural1stPerson: Word('поездим', 2),
  plural2ndPerson: Word('поездите', 2),
  plural3rdPerson: Word('поездят', 2),
  masculinePast: Word('поездил', 2),
  femininePast: Word('поездила', 2),
  neuterPast: Word('поездило', 2),
  pluralPast: Word('поездили', 2),
  imperativeInformal: Word('поезди', 2),
  imperativeFormal: Word('поездите', 2),
  imperfect: [],
};

perfectVerbs.set(поездить.name.text, поездить);

export { поездить };