import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закладывать: PerfectVerb = {
  name: Word('закладывать', 4),
  singular1stPerson: Word('закладываю', 4),
  singular2ndPerson: Word('закладываешь', 4),
  singular3rdPerson: Word('закладывает', 4),
  plural1stPerson: Word('закладываем', 4),
  plural2ndPerson: Word('закладываете', 4),
  plural3rdPerson: Word('закладывают', 4),
  masculinePast: Word('закладывал', 4),
  femininePast: Word('закладывала', 4),
  neuterPast: Word('закладывало', 4),
  pluralPast: Word('закладывали', 4),
  imperativeInformal: Word('закладывай', 4),
  imperativeFormal: Word('закладывайте', 4),
  imperfect: ['заложить'],
};

perfectVerbs.set(закладывать.name.text, закладывать);

export { закладывать };