import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмутить: PerfectVerb = {
  name: Word('возмутить', 6),
  singular1stPerson: Word('возмущу', 6),
  singular2ndPerson: Word('возмутишь', 6),
  singular3rdPerson: Word('возмутит', 6),
  plural1stPerson: Word('возмутим', 6),
  plural2ndPerson: Word('возмутите', 6),
  plural3rdPerson: Word('возмутят', 6),
  masculinePast: Word('возмутил', 6),
  femininePast: Word('возмутила', 6),
  neuterPast: Word('возмутило', 6),
  pluralPast: Word('возмутили', 6),
  imperativeInformal: Word('возмути', 6),
  imperativeFormal: Word('возмутите', 6),
  imperfect: [],
};

perfectVerbs.set(возмутить.name.text, возмутить);

export { возмутить };