import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const винтить: PerfectVerb = {
  name: Word('винтить', 4),
  singular1stPerson: Word('винчу', 4),
  singular2ndPerson: Word('винтишь', 4),
  singular3rdPerson: Word('винтит', 4),
  plural1stPerson: Word('винтим', 4),
  plural2ndPerson: Word('винтите', 4),
  plural3rdPerson: Word('винтят', 4),
  masculinePast: Word('винтил', 4),
  femininePast: Word('винтила', 4),
  neuterPast: Word('винтило', 4),
  pluralPast: Word('винтили', 4),
  imperativeInformal: Word('винти', 4),
  imperativeFormal: Word('винтите', 4),
  imperfect: [],
};

perfectVerbs.set(винтить.name.text, винтить);

export { винтить };