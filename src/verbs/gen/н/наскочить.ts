import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наскочить: PerfectVerb = {
  name: Word('наскочить', 6),
  singular1stPerson: Word('наскочу', 6),
  singular2ndPerson: Word('наскочишь', 4),
  singular3rdPerson: Word('наскочит', 4),
  plural1stPerson: Word('наскочим', 4),
  plural2ndPerson: Word('наскочите', 4),
  plural3rdPerson: Word('наскочат', 4),
  masculinePast: Word('наскочил', 6),
  femininePast: Word('наскочила', 6),
  neuterPast: Word('наскочило', 6),
  pluralPast: Word('наскочили', 6),
  imperativeInformal: Word('наскочи', 6),
  imperativeFormal: Word('наскочите', 6),
  imperfect: [],
};

perfectVerbs.set(наскочить.name.text, наскочить);

export { наскочить };