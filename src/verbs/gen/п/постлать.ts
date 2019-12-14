import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постлать: PerfectVerb = {
  name: Word('постлать', 5),
  singular1stPerson: Word('постелю', 6),
  singular2ndPerson: Word('постелешь', 4),
  singular3rdPerson: Word('постелет', 4),
  plural1stPerson: Word('постелем', 4),
  plural2ndPerson: Word('постелете', 4),
  plural3rdPerson: Word('постелют', 4),
  masculinePast: Word('постлал', 5),
  femininePast: Word('постлала', 5),
  neuterPast: Word('постлало', 5),
  pluralPast: Word('постлали', 5),
  imperativeInformal: Word('постели', 6),
  imperativeFormal: Word('постелите', 6),
  imperfect: ['стлать'],
};

perfectVerbs.set(постлать.name.text, постлать);

export { постлать };