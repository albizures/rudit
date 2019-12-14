import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вообразить: PerfectVerb = {
  name: Word('вообразить', 7),
  singular1stPerson: Word('воображу', 7),
  singular2ndPerson: Word('вообразишь', 7),
  singular3rdPerson: Word('вообразит', 7),
  plural1stPerson: Word('вообразим', 7),
  plural2ndPerson: Word('вообразите', 7),
  plural3rdPerson: Word('вообразят', 7),
  masculinePast: Word('вообразил', 7),
  femininePast: Word('вообразила', 7),
  neuterPast: Word('вообразило', 7),
  pluralPast: Word('вообразили', 7),
  imperativeInformal: Word('вообрази', 7),
  imperativeFormal: Word('вообразите', 7),
  imperfect: ['воображать'],
};

perfectVerbs.set(вообразить.name.text, вообразить);

export { вообразить };