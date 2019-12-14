import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригореть: PerfectVerb = {
  name: Word('пригореть', 6),
  singular1stPerson: Word('пригорю', 6),
  singular2ndPerson: Word('пригоришь', 6),
  singular3rdPerson: Word('пригорит', 6),
  plural1stPerson: Word('пригорим', 6),
  plural2ndPerson: Word('пригорите', 6),
  plural3rdPerson: Word('пригорят', 6),
  masculinePast: Word('пригорел', 6),
  femininePast: Word('пригорела', 6),
  neuterPast: Word('пригорело', 6),
  pluralPast: Word('пригорели', 6),
  imperativeInformal: Word('пригори', 6),
  imperativeFormal: Word('пригорите', 6),
  imperfect: [],
};

perfectVerbs.set(пригореть.name.text, пригореть);

export { пригореть };