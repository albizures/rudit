import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побродить: PerfectVerb = {
  name: Word('побродить', 6),
  singular1stPerson: Word('поброжу', 6),
  singular2ndPerson: Word('побродишь', 4),
  singular3rdPerson: Word('побродит', 4),
  plural1stPerson: Word('побродим', 4),
  plural2ndPerson: Word('побродите', 4),
  plural3rdPerson: Word('побродят', 4),
  masculinePast: Word('побродил', 6),
  femininePast: Word('побродила', 6),
  neuterPast: Word('побродило', 6),
  pluralPast: Word('побродили', 6),
  imperativeInformal: Word('поброди', 6),
  imperativeFormal: Word('побродите', 6),
  imperfect: [],
};

perfectVerbs.set(побродить.name.text, побродить);

export { побродить };