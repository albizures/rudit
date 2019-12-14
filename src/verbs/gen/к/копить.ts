import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копить: PerfectVerb = {
  name: Word('копить', 3),
  singular1stPerson: Word('коплю', 4),
  singular2ndPerson: Word('копишь', 1),
  singular3rdPerson: Word('копит', 1),
  plural1stPerson: Word('копим', 1),
  plural2ndPerson: Word('копите', 1),
  plural3rdPerson: Word('копят', 1),
  masculinePast: Word('копил', 3),
  femininePast: Word('копила', 3),
  neuterPast: Word('копило', 3),
  pluralPast: Word('копили', 3),
  imperativeInformal: Word('копи', 3),
  imperativeFormal: Word('копите', 3),
  imperfect: [],
};

perfectVerbs.set(копить.name.text, копить);

export { копить };