import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заострить: PerfectVerb = {
  name: Word('заострить', 6),
  singular1stPerson: Word('заострю', 6),
  singular2ndPerson: Word('заостришь', 6),
  singular3rdPerson: Word('заострит', 6),
  plural1stPerson: Word('заострим', 6),
  plural2ndPerson: Word('заострите', 6),
  plural3rdPerson: Word('заострят', 6),
  masculinePast: Word('заострил', 6),
  femininePast: Word('заострила', 6),
  neuterPast: Word('заострило', 6),
  pluralPast: Word('заострили', 6),
  imperativeInformal: Word('заостри', 6),
  imperativeFormal: Word('заострите', 6),
  imperfect: [],
};

perfectVerbs.set(заострить.name.text, заострить);

export { заострить };