import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересидеть: PerfectVerb = {
  name: Word('пересидеть', 7),
  singular1stPerson: Word('пересижу', 7),
  singular2ndPerson: Word('пересидишь', 7),
  singular3rdPerson: Word('пересидит', 7),
  plural1stPerson: Word('пересидим', 7),
  plural2ndPerson: Word('пересидите', 7),
  plural3rdPerson: Word('пересидят', 7),
  masculinePast: Word('пересидел', 7),
  femininePast: Word('пересидела', 7),
  neuterPast: Word('пересидело', 7),
  pluralPast: Word('пересидели', 7),
  imperativeInformal: Word('пересиди', 7),
  imperativeFormal: Word('пересидите', 7),
  imperfect: [],
};

perfectVerbs.set(пересидеть.name.text, пересидеть);

export { пересидеть };