import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашнуровывать: PerfectVerb = {
  name: Word('зашнуровывать', 6),
  singular1stPerson: Word('зашнуровываю', 6),
  singular2ndPerson: Word('зашнуровываешь', 6),
  singular3rdPerson: Word('зашнуровывает', 6),
  plural1stPerson: Word('зашнуровываем', 6),
  plural2ndPerson: Word('зашнуровываете', 6),
  plural3rdPerson: Word('зашнуровывают', 6),
  masculinePast: Word('зашнуровывал', 6),
  femininePast: Word('зашнуровывала', 6),
  neuterPast: Word('зашнуровывало', 6),
  pluralPast: Word('зашнуровывали', 6),
  imperativeInformal: Word('зашнуровывай', 6),
  imperativeFormal: Word('зашнуровывайте', 6),
  imperfect: [],
};

perfectVerbs.set(зашнуровывать.name.text, зашнуровывать);

export { зашнуровывать };