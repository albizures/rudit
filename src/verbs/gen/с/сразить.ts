import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сразить: PerfectVerb = {
  name: Word('сразить', 4),
  singular1stPerson: Word('сражу', 4),
  singular2ndPerson: Word('сразишь', 4),
  singular3rdPerson: Word('сразит', 4),
  plural1stPerson: Word('сразим', 4),
  plural2ndPerson: Word('сразите', 4),
  plural3rdPerson: Word('сразят', 4),
  masculinePast: Word('сразил', 4),
  femininePast: Word('сразила', 4),
  neuterPast: Word('сразило', 4),
  pluralPast: Word('сразили', 4),
  imperativeInformal: Word('срази', 4),
  imperativeFormal: Word('сразите', 4),
  imperfect: ['разить'],
};

perfectVerbs.set(сразить.name.text, сразить);

export { сразить };