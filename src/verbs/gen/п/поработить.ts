import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поработить: PerfectVerb = {
  name: Word('поработить', 7),
  singular1stPerson: Word('порабощу', 7),
  singular2ndPerson: Word('поработишь', 7),
  singular3rdPerson: Word('поработит', 7),
  plural1stPerson: Word('поработим', 7),
  plural2ndPerson: Word('поработите', 7),
  plural3rdPerson: Word('поработят', 7),
  masculinePast: Word('поработил', 7),
  femininePast: Word('поработила', 7),
  neuterPast: Word('поработило', 7),
  pluralPast: Word('поработили', 7),
  imperativeInformal: Word('поработи', 7),
  imperativeFormal: Word('поработите', 7),
  imperfect: [],
};

perfectVerbs.set(поработить.name.text, поработить);

export { поработить };