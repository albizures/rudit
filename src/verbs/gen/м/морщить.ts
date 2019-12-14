import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морщить: PerfectVerb = {
  name: Word('морщить', 1),
  singular1stPerson: Word('морщу', 1),
  singular2ndPerson: Word('морщишь', 1),
  singular3rdPerson: Word('морщит', 1),
  plural1stPerson: Word('морщим', 1),
  plural2ndPerson: Word('морщите', 1),
  plural3rdPerson: Word('морщат', 1),
  masculinePast: Word('морщил', 1),
  femininePast: Word('морщила', 1),
  neuterPast: Word('морщило', 1),
  pluralPast: Word('морщили', 1),
  imperativeInformal: Word('морщи//мо'рщь', 1),
  imperativeFormal: Word('морщьте', 1),
  imperfect: [],
};

perfectVerbs.set(морщить.name.text, морщить);

export { морщить };