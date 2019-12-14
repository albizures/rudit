import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогреметь: PerfectVerb = {
  name: Word('прогреметь', 7),
  singular1stPerson: Word('прогремлю', 8),
  singular2ndPerson: Word('прогремишь', 7),
  singular3rdPerson: Word('прогремит', 7),
  plural1stPerson: Word('прогремим', 7),
  plural2ndPerson: Word('прогремите', 7),
  plural3rdPerson: Word('прогремят', 7),
  masculinePast: Word('прогремел', 7),
  femininePast: Word('прогремела', 7),
  neuterPast: Word('прогремело', 7),
  pluralPast: Word('прогремели', 7),
  imperativeInformal: Word('прогреми', 7),
  imperativeFormal: Word('прогремите', 7),
  imperfect: [],
};

perfectVerbs.set(прогреметь.name.text, прогреметь);

export { прогреметь };