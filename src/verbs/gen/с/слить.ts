import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слить: PerfectVerb = {
  name: Word('слить', 2),
  singular1stPerson: Word('солью', 4),
  singular2ndPerson: Word('сольёшь', 1),
  singular3rdPerson: Word('сольёт', 1),
  plural1stPerson: Word('сольём', 1),
  plural2ndPerson: Word('сольёте', 6),
  plural3rdPerson: Word('сольют', 4),
  masculinePast: Word('слил', 2),
  femininePast: Word('слила', 4),
  neuterPast: Word('слило', 2),
  pluralPast: Word('слили', 2),
  imperativeInformal: Word('слей', 2),
  imperativeFormal: Word('слейте', 2),
  imperfect: [],
};

perfectVerbs.set(слить.name.text, слить);

export { слить };