import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злоупотребить: PerfectVerb = {
  name: Word('злоупотребить', 10),
  singular1stPerson: Word('злоупотреблю', 11),
  singular2ndPerson: Word('злоупотребишь', 10),
  singular3rdPerson: Word('злоупотребит', 10),
  plural1stPerson: Word('злоупотребим', 10),
  plural2ndPerson: Word('злоупотребите', 10),
  plural3rdPerson: Word('злоупотребят', 10),
  masculinePast: Word('злоупотребил', 10),
  femininePast: Word('злоупотребила', 10),
  neuterPast: Word('злоупотребило', 10),
  pluralPast: Word('злоупотребили', 10),
  imperativeInformal: Word('злоупотреби', 10),
  imperativeFormal: Word('злоупотребите', 10),
  imperfect: ['злоупотреблять'],
};

perfectVerbs.set(злоупотребить.name.text, злоупотребить);

export { злоупотребить };