import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскочить: PerfectVerb = {
  name: Word('выскочить', 1),
  singular1stPerson: Word('выскочу', 1),
  singular2ndPerson: Word('выскочишь', 1),
  singular3rdPerson: Word('выскочит', 1),
  plural1stPerson: Word('выскочим', 1),
  plural2ndPerson: Word('выскочите', 1),
  plural3rdPerson: Word('выскочат', 1),
  masculinePast: Word('выскочил', 1),
  femininePast: Word('выскочила', 1),
  neuterPast: Word('выскочило', 1),
  pluralPast: Word('выскочили', 1),
  imperativeInformal: Word('выскочи', 1),
  imperativeFormal: Word('выскочите', 1),
  imperfect: ['выскакивать'],
};

perfectVerbs.set(выскочить.name.text, выскочить);

export { выскочить };