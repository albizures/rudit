import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мастерить: PerfectVerb = {
  name: Word('мастерить', 6),
  singular1stPerson: Word('мастерю', 6),
  singular2ndPerson: Word('мастеришь', 6),
  singular3rdPerson: Word('мастерит', 6),
  plural1stPerson: Word('мастерим', 6),
  plural2ndPerson: Word('мастерите', 6),
  plural3rdPerson: Word('мастерят', 6),
  masculinePast: Word('мастерил', 6),
  femininePast: Word('мастерила', 6),
  neuterPast: Word('мастерило', 6),
  pluralPast: Word('мастерили', 6),
  imperativeInformal: Word('мастери', 6),
  imperativeFormal: Word('мастерите', 6),
  imperfect: [],
};

perfectVerbs.set(мастерить.name.text, мастерить);

export { мастерить };