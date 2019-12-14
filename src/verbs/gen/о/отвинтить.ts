import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвинтить: PerfectVerb = {
  name: Word('отвинтить', 6),
  singular1stPerson: Word('отвинчу', 6),
  singular2ndPerson: Word('отвинтишь', 3),
  singular3rdPerson: Word('отвинтит', 3),
  plural1stPerson: Word('отвинтим', 3),
  plural2ndPerson: Word('отвинтите', 3),
  plural3rdPerson: Word('отвинтят', 3),
  masculinePast: Word('отвинтил', 6),
  femininePast: Word('отвинтила', 6),
  neuterPast: Word('отвинтило', 6),
  pluralPast: Word('отвинтили', 6),
  imperativeInformal: Word('отвинти', 6),
  imperativeFormal: Word('отвинтите', 6),
  imperfect: [],
};

perfectVerbs.set(отвинтить.name.text, отвинтить);

export { отвинтить };