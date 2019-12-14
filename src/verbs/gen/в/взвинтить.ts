import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвинтить: PerfectVerb = {
  name: Word('взвинтить', 6),
  singular1stPerson: Word('взвинчу', 6),
  singular2ndPerson: Word('взвинтишь', 6),
  singular3rdPerson: Word('взвинтит', 6),
  plural1stPerson: Word('взвинтим', 6),
  plural2ndPerson: Word('взвинтите', 6),
  plural3rdPerson: Word('взвинтят', 6),
  masculinePast: Word('взвинтил', 6),
  femininePast: Word('взвинтила', 6),
  neuterPast: Word('взвинтило', 6),
  pluralPast: Word('взвинтили', 6),
  imperativeInformal: Word('взвинти', 6),
  imperativeFormal: Word('взвинтите', 6),
  imperfect: [],
};

perfectVerbs.set(взвинтить.name.text, взвинтить);

export { взвинтить };