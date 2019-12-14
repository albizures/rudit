import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекретить: PerfectVerb = {
  name: Word('засекретить', 6),
  singular1stPerson: Word('засекречу', 6),
  singular2ndPerson: Word('засекретишь', 6),
  singular3rdPerson: Word('засекретит', 6),
  plural1stPerson: Word('засекретим', 6),
  plural2ndPerson: Word('засекретите', 6),
  plural3rdPerson: Word('засекретят', 6),
  masculinePast: Word('засекретил', 6),
  femininePast: Word('засекретила', 6),
  neuterPast: Word('засекретило', 6),
  pluralPast: Word('засекретили', 6),
  imperativeInformal: Word('засекреть', 6),
  imperativeFormal: Word('засекретьте', 6),
  imperfect: [],
};

perfectVerbs.set(засекретить.name.text, засекретить);

export { засекретить };