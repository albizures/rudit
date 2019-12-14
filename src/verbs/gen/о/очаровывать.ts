import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очаровывать: PerfectVerb = {
  name: Word('очаровывать', 4),
  singular1stPerson: Word('очаровываю', 4),
  singular2ndPerson: Word('очаровываешь', 4),
  singular3rdPerson: Word('очаровывает', 4),
  plural1stPerson: Word('очаровываем', 4),
  plural2ndPerson: Word('очаровываете', 4),
  plural3rdPerson: Word('очаровывают', 4),
  masculinePast: Word('очаровывал', 4),
  femininePast: Word('очаровывала', 4),
  neuterPast: Word('очаровывало', 4),
  pluralPast: Word('очаровывали', 4),
  imperativeInformal: Word('очаровывай', 4),
  imperativeFormal: Word('очаровывайте', 4),
  imperfect: [],
};

perfectVerbs.set(очаровывать.name.text, очаровывать);

export { очаровывать };