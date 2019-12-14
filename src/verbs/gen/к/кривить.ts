import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кривить: PerfectVerb = {
  name: Word('кривить', 4),
  singular1stPerson: Word('кривлю', 5),
  singular2ndPerson: Word('кривишь', 4),
  singular3rdPerson: Word('кривит', 4),
  plural1stPerson: Word('кривим', 4),
  plural2ndPerson: Word('кривите', 4),
  plural3rdPerson: Word('кривят', 4),
  masculinePast: Word('кривил', 4),
  femininePast: Word('кривила', 4),
  neuterPast: Word('кривило', 4),
  pluralPast: Word('кривили', 4),
  imperativeInformal: Word('криви', 4),
  imperativeFormal: Word('кривите', 4),
  imperfect: [],
};

perfectVerbs.set(кривить.name.text, кривить);

export { кривить };