import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почтить: PerfectVerb = {
  name: Word('почтить', 4),
  singular1stPerson: Word('почту', 4),
  singular2ndPerson: Word('почтишь', 4),
  singular3rdPerson: Word('почтит', 4),
  plural1stPerson: Word('почтим', 4),
  plural2ndPerson: Word('почтите', 4),
  plural3rdPerson: Word('почтят//почтут', 1),
  masculinePast: Word('почтил', 4),
  femininePast: Word('почтила', 4),
  neuterPast: Word('почтило', 4),
  pluralPast: Word('почтили', 4),
  imperativeInformal: Word('почтят//почти', 12),
  imperativeFormal: Word('почтят//почтите', 12),
  imperfect: [],
};

perfectVerbs.set(почтить.name.text, почтить);

export { почтить };