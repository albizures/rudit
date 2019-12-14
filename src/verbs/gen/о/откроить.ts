import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откроить: PerfectVerb = {
  name: Word('откроить', 5),
  singular1stPerson: Word('открою', 5),
  singular2ndPerson: Word('откроишь', 5),
  singular3rdPerson: Word('откроит', 5),
  plural1stPerson: Word('откроим', 5),
  plural2ndPerson: Word('откроите', 5),
  plural3rdPerson: Word('откроят', 5),
  masculinePast: Word('откроил', 5),
  femininePast: Word('откроила', 5),
  neuterPast: Word('откроило', 5),
  pluralPast: Word('откроили', 5),
  imperativeInformal: Word('открои', 5),
  imperativeFormal: Word('откроите', 5),
  imperfect: [],
};

perfectVerbs.set(откроить.name.text, откроить);

export { откроить };