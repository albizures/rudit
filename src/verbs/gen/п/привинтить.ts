import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привинтить: PerfectVerb = {
  name: Word('привинтить', 7),
  singular1stPerson: Word('привинчу', 7),
  singular2ndPerson: Word('привинтишь', 4),
  singular3rdPerson: Word('привинтит', 4),
  plural1stPerson: Word('привинтим', 4),
  plural2ndPerson: Word('привинтите', 4),
  plural3rdPerson: Word('привинтят', 4),
  masculinePast: Word('привинтил', 7),
  femininePast: Word('привинтила', 7),
  neuterPast: Word('привинтило', 7),
  pluralPast: Word('привинтили', 7),
  imperativeInformal: Word('привинти', 7),
  imperativeFormal: Word('привинтите', 7),
  imperfect: [],
};

perfectVerbs.set(привинтить.name.text, привинтить);

export { привинтить };