import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const митинговать: PerfectVerb = {
  name: Word('митинговать', 8),
  singular1stPerson: Word('митингую', 6),
  singular2ndPerson: Word('митингуешь', 6),
  singular3rdPerson: Word('митингует', 6),
  plural1stPerson: Word('митингуем', 6),
  plural2ndPerson: Word('митингуете', 6),
  plural3rdPerson: Word('митингуют', 6),
  masculinePast: Word('митинговал', 8),
  femininePast: Word('митинговала', 8),
  neuterPast: Word('митинговало', 8),
  pluralPast: Word('митинговали', 8),
  imperativeInformal: Word('митингуй', 6),
  imperativeFormal: Word('митингуйте', 6),
  imperfect: [],
};

perfectVerbs.set(митинговать.name.text, митинговать);

export { митинговать };