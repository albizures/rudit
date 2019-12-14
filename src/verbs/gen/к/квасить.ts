import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const квасить: PerfectVerb = {
  name: Word('квасить', 2),
  singular1stPerson: Word('квашу', 2),
  singular2ndPerson: Word('квасишь', 2),
  singular3rdPerson: Word('квасит', 2),
  plural1stPerson: Word('квасим', 2),
  plural2ndPerson: Word('квасите', 2),
  plural3rdPerson: Word('квасят', 2),
  masculinePast: Word('квасил', 2),
  femininePast: Word('квасила', 2),
  neuterPast: Word('квасило', 2),
  pluralPast: Word('квасили', 2),
  imperativeInformal: Word('квась', 2),
  imperativeFormal: Word('квасьте', 2),
  imperfect: [],
};

perfectVerbs.set(квасить.name.text, квасить);

export { квасить };