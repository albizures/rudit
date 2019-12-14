import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наморщить: PerfectVerb = {
  name: Word('наморщить', 3),
  singular1stPerson: Word('наморщу', 3),
  singular2ndPerson: Word('наморщишь', 3),
  singular3rdPerson: Word('наморщит', 3),
  plural1stPerson: Word('наморщим', 3),
  plural2ndPerson: Word('наморщите', 3),
  plural3rdPerson: Word('наморщат', 3),
  masculinePast: Word('наморщил', 3),
  femininePast: Word('наморщила', 3),
  neuterPast: Word('наморщило', 3),
  pluralPast: Word('наморщили', 3),
  imperativeInformal: Word('наморщи//намо'рщь', 3),
  imperativeFormal: Word('наморщьте', 3),
  imperfect: [],
};

perfectVerbs.set(наморщить.name.text, наморщить);

export { наморщить };