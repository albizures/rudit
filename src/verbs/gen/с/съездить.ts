import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съездить: PerfectVerb = {
  name: Word('съездить', 2),
  singular1stPerson: Word('съезжу', 2),
  singular2ndPerson: Word('съездишь', 2),
  singular3rdPerson: Word('съездит', 2),
  plural1stPerson: Word('съездим', 2),
  plural2ndPerson: Word('съездите', 2),
  plural3rdPerson: Word('съездят', 2),
  masculinePast: Word('съездил', 2),
  femininePast: Word('съездила', 2),
  neuterPast: Word('съездило', 2),
  pluralPast: Word('съездили', 2),
  imperativeInformal: Word('съезди', 2),
  imperativeFormal: Word('съездите', 2),
  imperfect: [],
};

perfectVerbs.set(съездить.name.text, съездить);

export { съездить };