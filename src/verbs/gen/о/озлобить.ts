import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озлобить: PerfectVerb = {
  name: Word('озлобить', 3),
  singular1stPerson: Word('озлоблю', 3),
  singular2ndPerson: Word('озлобишь', 3),
  singular3rdPerson: Word('озлобит', 3),
  plural1stPerson: Word('озлобим', 3),
  plural2ndPerson: Word('озлобите', 3),
  plural3rdPerson: Word('озлобят', 3),
  masculinePast: Word('озлобил', 3),
  femininePast: Word('озлобила', 3),
  neuterPast: Word('озлобило', 3),
  pluralPast: Word('озлобили', 3),
  imperativeInformal: Word('озлобь', 3),
  imperativeFormal: Word('озлобьте', 3),
  imperfect: [],
};

perfectVerbs.set(озлобить.name.text, озлобить);

export { озлобить };