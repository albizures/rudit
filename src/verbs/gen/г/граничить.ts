import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const граничить: PerfectVerb = {
  name: Word('граничить', 4),
  singular1stPerson: Word('граничу', 4),
  singular2ndPerson: Word('граничишь', 4),
  singular3rdPerson: Word('граничит', 4),
  plural1stPerson: Word('граничим', 4),
  plural2ndPerson: Word('граничите', 4),
  plural3rdPerson: Word('граничат', 4),
  masculinePast: Word('граничил', 4),
  femininePast: Word('граничила', 4),
  neuterPast: Word('граничило', 4),
  pluralPast: Word('граничили', 4),
  imperativeInformal: Word('граничь', 4),
  imperativeFormal: Word('граничьте', 4),
  imperfect: [],
};

perfectVerbs.set(граничить.name.text, граничить);

export { граничить };