import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскрипывать: PerfectVerb = {
  name: Word('поскрипывать', 5),
  singular1stPerson: Word('поскрипываю', 5),
  singular2ndPerson: Word('поскрипываешь', 5),
  singular3rdPerson: Word('поскрипывает', 5),
  plural1stPerson: Word('поскрипываем', 5),
  plural2ndPerson: Word('поскрипываете', 5),
  plural3rdPerson: Word('поскрипывают', 5),
  masculinePast: Word('поскрипывал', 5),
  femininePast: Word('поскрипывала', 5),
  neuterPast: Word('поскрипывало', 5),
  pluralPast: Word('поскрипывали', 5),
  imperativeInformal: Word('поскрипывай', 5),
  imperativeFormal: Word('поскрипывайте', 5),
  imperfect: [],
};

perfectVerbs.set(поскрипывать.name.text, поскрипывать);

export { поскрипывать };