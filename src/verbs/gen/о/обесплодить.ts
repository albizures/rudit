import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесплодить: PerfectVerb = {
  name: Word('обесплодить', 8),
  singular1stPerson: Word('обеспложу', 6),
  singular2ndPerson: Word('обесплодишь', 6),
  singular3rdPerson: Word('обесплодит', 6),
  plural1stPerson: Word('обесплодим', 6),
  plural2ndPerson: Word('обесплодите', 6),
  plural3rdPerson: Word('обесплодят', 6),
  masculinePast: Word('обесплодил', 8),
  femininePast: Word('обесплодила', 8),
  neuterPast: Word('обесплодило', 8),
  pluralPast: Word('обесплодили', 8),
  imperativeInformal: Word('обесплодь', 6),
  imperativeFormal: Word('обесплодьте', 6),
  imperfect: [],
};

perfectVerbs.set(обесплодить.name.text, обесплодить);

export { обесплодить };