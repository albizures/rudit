import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспешить: PerfectVerb = {
  name: Word('заспешить', 6),
  singular1stPerson: Word('заспешу', 6),
  singular2ndPerson: Word('заспешишь', 6),
  singular3rdPerson: Word('заспешит', 6),
  plural1stPerson: Word('заспешим', 6),
  plural2ndPerson: Word('заспешите', 6),
  plural3rdPerson: Word('заспешат', 6),
  masculinePast: Word('заспешил', 6),
  femininePast: Word('заспешила', 6),
  neuterPast: Word('заспешило', 6),
  pluralPast: Word('заспешили', 6),
  imperativeInformal: Word('заспеши', 6),
  imperativeFormal: Word('заспешите', 6),
  imperfect: [],
};

perfectVerbs.set(заспешить.name.text, заспешить);

export { заспешить };