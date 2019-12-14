import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделить: PerfectVerb = {
  name: Word('выделить', 1),
  singular1stPerson: Word('выделю', 1),
  singular2ndPerson: Word('выделишь', 1),
  singular3rdPerson: Word('выделит', 1),
  plural1stPerson: Word('выделим', 1),
  plural2ndPerson: Word('выделите', 1),
  plural3rdPerson: Word('выделят', 1),
  masculinePast: Word('выделил', 1),
  femininePast: Word('выделила', 1),
  neuterPast: Word('выделило', 1),
  pluralPast: Word('выделили', 1),
  imperativeInformal: Word('выдели', 1),
  imperativeFormal: Word('выделите', 1),
  imperfect: ['выделять'],
};

perfectVerbs.set(выделить.name.text, выделить);

export { выделить };