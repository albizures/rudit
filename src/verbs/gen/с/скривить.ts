import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скривить: PerfectVerb = {
  name: Word('скривить', 5),
  singular1stPerson: Word('скривлю', 6),
  singular2ndPerson: Word('скривишь', 5),
  singular3rdPerson: Word('скривит', 5),
  plural1stPerson: Word('скривим', 5),
  plural2ndPerson: Word('скривите', 5),
  plural3rdPerson: Word('скривят', 5),
  masculinePast: Word('скривил', 5),
  femininePast: Word('скривила', 5),
  neuterPast: Word('скривило', 5),
  pluralPast: Word('скривили', 5),
  imperativeInformal: Word('скриви', 5),
  imperativeFormal: Word('скривите', 5),
  imperfect: [],
};

perfectVerbs.set(скривить.name.text, скривить);

export { скривить };