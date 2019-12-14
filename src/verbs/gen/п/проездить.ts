import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проездить: PerfectVerb = {
  name: Word('проездить', 3),
  singular1stPerson: Word('проезжу', 3),
  singular2ndPerson: Word('проездишь', 3),
  singular3rdPerson: Word('проездит', 3),
  plural1stPerson: Word('проездим', 3),
  plural2ndPerson: Word('проездите', 3),
  plural3rdPerson: Word('проездят', 3),
  masculinePast: Word('проездил', 3),
  femininePast: Word('проездила', 3),
  neuterPast: Word('проездило', 3),
  pluralPast: Word('проездили', 3),
  imperativeInformal: Word('проезди', 3),
  imperativeFormal: Word('проездите', 3),
  imperfect: [],
};

perfectVerbs.set(проездить.name.text, проездить);

export { проездить };