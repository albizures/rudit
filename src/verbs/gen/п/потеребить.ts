import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потеребить: PerfectVerb = {
  name: Word('потеребить', 7),
  singular1stPerson: Word('потереблю', 8),
  singular2ndPerson: Word('потеребишь', 7),
  singular3rdPerson: Word('потеребит', 7),
  plural1stPerson: Word('потеребим', 7),
  plural2ndPerson: Word('потеребите', 7),
  plural3rdPerson: Word('потеребят', 7),
  masculinePast: Word('потеребил', 7),
  femininePast: Word('потеребила', 7),
  neuterPast: Word('потеребило', 7),
  pluralPast: Word('потеребили', 7),
  imperativeInformal: Word('потереби', 7),
  imperativeFormal: Word('потеребите', 7),
  imperfect: [],
};

perfectVerbs.set(потеребить.name.text, потеребить);

export { потеребить };