import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истребить: PerfectVerb = {
  name: Word('истребить', 6),
  singular1stPerson: Word('истреблю', 7),
  singular2ndPerson: Word('истребишь', 6),
  singular3rdPerson: Word('истребит', 6),
  plural1stPerson: Word('истребим', 6),
  plural2ndPerson: Word('истребите', 6),
  plural3rdPerson: Word('истребят', 6),
  masculinePast: Word('истребил', 6),
  femininePast: Word('истребила', 6),
  neuterPast: Word('истребило', 6),
  pluralPast: Word('истребили', 6),
  imperativeInformal: Word('истреби', 6),
  imperativeFormal: Word('истребите', 6),
  imperfect: [],
};

perfectVerbs.set(истребить.name.text, истребить);

export { истребить };