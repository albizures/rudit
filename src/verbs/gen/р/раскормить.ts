import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскормить: PerfectVerb = {
  name: Word('раскормить', 7),
  singular1stPerson: Word('раскормлю', 8),
  singular2ndPerson: Word('раскормишь', 4),
  singular3rdPerson: Word('раскормит', 4),
  plural1stPerson: Word('раскормим', 4),
  plural2ndPerson: Word('раскормите', 4),
  plural3rdPerson: Word('раскормят', 4),
  masculinePast: Word('раскормил', 7),
  femininePast: Word('раскормила', 7),
  neuterPast: Word('раскормило', 7),
  pluralPast: Word('раскормили', 7),
  imperativeInformal: Word('раскорми', 7),
  imperativeFormal: Word('раскормите', 7),
  imperfect: [],
};

perfectVerbs.set(раскормить.name.text, раскормить);

export { раскормить };