import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрывать: PerfectVerb = {
  name: Word('закрывать', 6),
  singular1stPerson: Word('закрываю', 6),
  singular2ndPerson: Word('закрываешь', 6),
  singular3rdPerson: Word('закрывает', 6),
  plural1stPerson: Word('закрываем', 6),
  plural2ndPerson: Word('закрываете', 6),
  plural3rdPerson: Word('закрывают', 6),
  masculinePast: Word('закрывал', 6),
  femininePast: Word('закрывала', 6),
  neuterPast: Word('закрывало', 6),
  pluralPast: Word('закрывали', 6),
  imperativeInformal: Word('закрывай', 6),
  imperativeFormal: Word('закрывайте', 6),
  imperfect: ['закрыть'],
};

perfectVerbs.set(закрывать.name.text, закрывать);

export { закрывать };