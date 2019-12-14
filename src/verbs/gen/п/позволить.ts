import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позволить: PerfectVerb = {
  name: Word('позволить', 4),
  singular1stPerson: Word('позволю', 4),
  singular2ndPerson: Word('позволишь', 4),
  singular3rdPerson: Word('позволит', 4),
  plural1stPerson: Word('позволим', 4),
  plural2ndPerson: Word('позволите', 4),
  plural3rdPerson: Word('позволят', 4),
  masculinePast: Word('позволил', 4),
  femininePast: Word('позволила', 4),
  neuterPast: Word('позволило', 4),
  pluralPast: Word('позволили', 4),
  imperativeInformal: Word('позволь', 4),
  imperativeFormal: Word('позвольте', 4),
  imperfect: ['позволять'],
};

perfectVerbs.set(позволить.name.text, позволить);

export { позволить };