import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заприметить: PerfectVerb = {
  name: Word('заприметить', 6),
  singular1stPerson: Word('запримечу', 6),
  singular2ndPerson: Word('заприметишь', 6),
  singular3rdPerson: Word('заприметит', 6),
  plural1stPerson: Word('заприметим', 6),
  plural2ndPerson: Word('заприметите', 6),
  plural3rdPerson: Word('заприметят', 6),
  masculinePast: Word('заприметил', 6),
  femininePast: Word('заприметила', 6),
  neuterPast: Word('заприметило', 6),
  pluralPast: Word('заприметили', 6),
  imperativeInformal: Word('заприметь', 6),
  imperativeFormal: Word('заприметьте', 6),
  imperfect: [],
};

perfectVerbs.set(заприметить.name.text, заприметить);

export { заприметить };