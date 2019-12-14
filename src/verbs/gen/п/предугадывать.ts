import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предугадывать: PerfectVerb = {
  name: Word('предугадывать', 6),
  singular1stPerson: Word('предугадываю', 6),
  singular2ndPerson: Word('предугадываешь', 6),
  singular3rdPerson: Word('предугадывает', 6),
  plural1stPerson: Word('предугадываем', 6),
  plural2ndPerson: Word('предугадываете', 6),
  plural3rdPerson: Word('предугадывают', 6),
  masculinePast: Word('предугадывал', 6),
  femininePast: Word('предугадывала', 6),
  neuterPast: Word('предугадывало', 6),
  pluralPast: Word('предугадывали', 6),
  imperativeInformal: Word('предугадывай', 6),
  imperativeFormal: Word('предугадывайте', 6),
  imperfect: [],
};

perfectVerbs.set(предугадывать.name.text, предугадывать);

export { предугадывать };