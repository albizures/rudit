import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растеребить: PerfectVerb = {
  name: Word('растеребить', 8),
  singular1stPerson: Word('растереблю', 9),
  singular2ndPerson: Word('растеребишь', 8),
  singular3rdPerson: Word('растеребит', 8),
  plural1stPerson: Word('растеребим', 8),
  plural2ndPerson: Word('растеребите', 8),
  plural3rdPerson: Word('растеребят', 8),
  masculinePast: Word('растеребил', 8),
  femininePast: Word('растеребила', 8),
  neuterPast: Word('растеребило', 8),
  pluralPast: Word('растеребили', 8),
  imperativeInformal: Word('растереби', 8),
  imperativeFormal: Word('растеребите', 8),
  imperfect: [],
};

perfectVerbs.set(растеребить.name.text, растеребить);

export { растеребить };