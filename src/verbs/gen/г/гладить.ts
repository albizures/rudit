import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гладить: PerfectVerb = {
  name: Word('гладить', 2),
  singular1stPerson: Word('глажу', 2),
  singular2ndPerson: Word('гладишь', 2),
  singular3rdPerson: Word('гладит', 2),
  plural1stPerson: Word('гладим', 2),
  plural2ndPerson: Word('гладите', 2),
  plural3rdPerson: Word('гладят', 2),
  masculinePast: Word('гладил', 2),
  femininePast: Word('гладила', 2),
  neuterPast: Word('гладило', 2),
  pluralPast: Word('гладили', 2),
  imperativeInformal: Word('гладь', 2),
  imperativeFormal: Word('гладьте', 2),
  imperfect: ['погладить'],
};

perfectVerbs.set(гладить.name.text, гладить);

export { гладить };