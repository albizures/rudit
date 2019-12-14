import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запретить: PerfectVerb = {
  name: Word('запретить', 6),
  singular1stPerson: Word('запрещу', 6),
  singular2ndPerson: Word('запретишь', 6),
  singular3rdPerson: Word('запретит', 6),
  plural1stPerson: Word('запретим', 6),
  plural2ndPerson: Word('запретите', 6),
  plural3rdPerson: Word('запретят', 6),
  masculinePast: Word('запретил', 6),
  femininePast: Word('запретила', 6),
  neuterPast: Word('запретило', 6),
  pluralPast: Word('запретили', 6),
  imperativeInformal: Word('запрети', 6),
  imperativeFormal: Word('запретите', 6),
  imperfect: ['запрещать'],
};

perfectVerbs.set(запретить.name.text, запретить);

export { запретить };