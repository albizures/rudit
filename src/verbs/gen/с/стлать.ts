import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стлать: PerfectVerb = {
  name: Word('стлать', 3),
  singular1stPerson: Word('стелю', 4),
  singular2ndPerson: Word('стелешь', 2),
  singular3rdPerson: Word('стелет', 2),
  plural1stPerson: Word('стелем', 2),
  plural2ndPerson: Word('стелете', 2),
  plural3rdPerson: Word('стелют', 2),
  masculinePast: Word('стлал', 3),
  femininePast: Word('стлала', 3),
  neuterPast: Word('стлало', 3),
  pluralPast: Word('стлали', 3),
  imperativeInformal: Word('стели', 4),
  imperativeFormal: Word('стелите', 4),
  imperfect: ['постлать'],
};

perfectVerbs.set(стлать.name.text, стлать);

export { стлать };