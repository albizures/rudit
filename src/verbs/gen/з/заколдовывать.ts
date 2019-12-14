import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколдовывать: PerfectVerb = {
  name: Word('заколдовывать', 6),
  singular1stPerson: Word('заколдовываю', 6),
  singular2ndPerson: Word('заколдовываешь', 6),
  singular3rdPerson: Word('заколдовывает', 6),
  plural1stPerson: Word('заколдовываем', 6),
  plural2ndPerson: Word('заколдовываете', 6),
  plural3rdPerson: Word('заколдовывают', 6),
  masculinePast: Word('заколдовывал', 6),
  femininePast: Word('заколдовывала', 6),
  neuterPast: Word('заколдовывало', 6),
  pluralPast: Word('заколдовывали', 6),
  imperativeInformal: Word('заколдовывай', 6),
  imperativeFormal: Word('заколдовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(заколдовывать.name.text, заколдовывать);

export { заколдовывать };