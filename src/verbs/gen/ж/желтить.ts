import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const желтить: PerfectVerb = {
  name: Word('желтить', 4),
  singular1stPerson: Word('желчу', 4),
  singular2ndPerson: Word('желтишь', 4),
  singular3rdPerson: Word('желтит', 4),
  plural1stPerson: Word('желтим', 4),
  plural2ndPerson: Word('желтите', 4),
  plural3rdPerson: Word('желтят', 4),
  masculinePast: Word('желтил', 4),
  femininePast: Word('желтила', 4),
  neuterPast: Word('желтило', 4),
  pluralPast: Word('желтили', 4),
  imperativeInformal: Word('желти', 4),
  imperativeFormal: Word('желтите', 4),
  imperfect: [],
};

perfectVerbs.set(желтить.name.text, желтить);

export { желтить };