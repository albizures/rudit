import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завинтить: PerfectVerb = {
  name: Word('завинтить', 6),
  singular1stPerson: Word('завинчу', 6),
  singular2ndPerson: Word('завинтишь', 3),
  singular3rdPerson: Word('завинтит', 3),
  plural1stPerson: Word('завинтим', 3),
  plural2ndPerson: Word('завинтите', 3),
  plural3rdPerson: Word('завинтят', 3),
  masculinePast: Word('завинтил', 6),
  femininePast: Word('завинтила', 6),
  neuterPast: Word('завинтило', 6),
  pluralPast: Word('завинтили', 6),
  imperativeInformal: Word('завинти', 6),
  imperativeFormal: Word('завинтите', 6),
  imperfect: [],
};

perfectVerbs.set(завинтить.name.text, завинтить);

export { завинтить };