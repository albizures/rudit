import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заквасить: PerfectVerb = {
  name: Word('заквасить', 4),
  singular1stPerson: Word('заквашу', 4),
  singular2ndPerson: Word('заквасишь', 4),
  singular3rdPerson: Word('заквасит', 4),
  plural1stPerson: Word('заквасим', 4),
  plural2ndPerson: Word('заквасите', 4),
  plural3rdPerson: Word('заквасят', 4),
  masculinePast: Word('заквасил', 4),
  femininePast: Word('заквасила', 4),
  neuterPast: Word('заквасило', 4),
  pluralPast: Word('заквасили', 4),
  imperativeInformal: Word('заквась', 4),
  imperativeFormal: Word('заквасьте', 4),
  imperfect: [],
};

perfectVerbs.set(заквасить.name.text, заквасить);

export { заквасить };