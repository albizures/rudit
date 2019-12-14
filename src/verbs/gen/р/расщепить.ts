import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расщепить: PerfectVerb = {
  name: Word('расщепить', 6),
  singular1stPerson: Word('расщеплю', 7),
  singular2ndPerson: Word('расщепишь', 6),
  singular3rdPerson: Word('расщепит', 6),
  plural1stPerson: Word('расщепим', 6),
  plural2ndPerson: Word('расщепите', 6),
  plural3rdPerson: Word('расщепят', 6),
  masculinePast: Word('расщепил', 6),
  femininePast: Word('расщепила', 6),
  neuterPast: Word('расщепило', 6),
  pluralPast: Word('расщепили', 6),
  imperativeInformal: Word('расщепи', 6),
  imperativeFormal: Word('расщепите', 6),
  imperfect: [],
};

perfectVerbs.set(расщепить.name.text, расщепить);

export { расщепить };