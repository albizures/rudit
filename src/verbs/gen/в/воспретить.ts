import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспретить: PerfectVerb = {
  name: Word('воспретить', 7),
  singular1stPerson: Word('воспрещу', 7),
  singular2ndPerson: Word('воспретишь', 7),
  singular3rdPerson: Word('воспретит', 7),
  plural1stPerson: Word('воспретим', 7),
  plural2ndPerson: Word('воспретите', 7),
  plural3rdPerson: Word('воспретят', 7),
  masculinePast: Word('воспретил', 7),
  femininePast: Word('воспретила', 7),
  neuterPast: Word('воспретило', 7),
  pluralPast: Word('воспретили', 7),
  imperativeInformal: Word('воспрети', 7),
  imperativeFormal: Word('воспретите', 7),
  imperfect: [],
};

perfectVerbs.set(воспретить.name.text, воспретить);

export { воспретить };