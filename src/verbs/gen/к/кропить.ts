import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кропить: PerfectVerb = {
  name: Word('кропить', 4),
  singular1stPerson: Word('кроплю', 5),
  singular2ndPerson: Word('кропишь', 4),
  singular3rdPerson: Word('кропит', 4),
  plural1stPerson: Word('кропим', 4),
  plural2ndPerson: Word('кропите', 4),
  plural3rdPerson: Word('кропят', 4),
  masculinePast: Word('кропил', 4),
  femininePast: Word('кропила', 4),
  neuterPast: Word('кропило', 4),
  pluralPast: Word('кропили', 4),
  imperativeInformal: Word('кропи', 4),
  imperativeFormal: Word('кропите', 4),
  imperfect: [],
};

perfectVerbs.set(кропить.name.text, кропить);

export { кропить };