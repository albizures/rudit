import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возродить: PerfectVerb = {
  name: Word('возродить', 6),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('возродишь', 6),
  singular3rdPerson: Word('возродит', 6),
  plural1stPerson: Word('возродим', 6),
  plural2ndPerson: Word('возродите', 6),
  plural3rdPerson: Word('возродят', 6),
  masculinePast: Word('возродил', 6),
  femininePast: Word('возродила', 6),
  neuterPast: Word('возродило', 6),
  pluralPast: Word('возродили', 6),
  imperativeInformal: Word('возроди', 6),
  imperativeFormal: Word('возродите', 6),
  imperfect: ['возрождать'],
};

perfectVerbs.set(возродить.name.text, возродить);

export { возродить };