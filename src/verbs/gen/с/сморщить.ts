import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморщить: PerfectVerb = {
  name: Word('сморщить', 2),
  singular1stPerson: Word('сморщу', 2),
  singular2ndPerson: Word('сморщишь', 2),
  singular3rdPerson: Word('сморщит', 2),
  plural1stPerson: Word('сморщим', 2),
  plural2ndPerson: Word('сморщите', 2),
  plural3rdPerson: Word('сморщат', 2),
  masculinePast: Word('сморщил', 2),
  femininePast: Word('сморщила', 2),
  neuterPast: Word('сморщило', 2),
  pluralPast: Word('сморщили', 2),
  imperativeInformal: Word('сморщи//смо'рщь', 2),
  imperativeFormal: Word('сморщьте', 2),
  imperfect: [],
};

perfectVerbs.set(сморщить.name.text, сморщить);

export { сморщить };