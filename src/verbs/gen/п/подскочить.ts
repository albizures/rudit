import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подскочить: PerfectVerb = {
  name: Word('подскочить', 7),
  singular1stPerson: Word('подскочу', 7),
  singular2ndPerson: Word('подскочишь', 5),
  singular3rdPerson: Word('подскочит', 5),
  plural1stPerson: Word('подскочим', 5),
  plural2ndPerson: Word('подскочите', 5),
  plural3rdPerson: Word('подскочат', 5),
  masculinePast: Word('подскочил', 7),
  femininePast: Word('подскочила', 7),
  neuterPast: Word('подскочило', 7),
  pluralPast: Word('подскочили', 7),
  imperativeInformal: Word('подскочи', 7),
  imperativeFormal: Word('подскочите', 7),
  imperfect: [],
};

perfectVerbs.set(подскочить.name.text, подскочить);

export { подскочить };