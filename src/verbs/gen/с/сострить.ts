import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сострить: PerfectVerb = {
  name: Word('сострить', 5),
  singular1stPerson: Word('сострю', 5),
  singular2ndPerson: Word('состришь', 5),
  singular3rdPerson: Word('сострит', 5),
  plural1stPerson: Word('сострим', 5),
  plural2ndPerson: Word('сострите', 5),
  plural3rdPerson: Word('сострят', 5),
  masculinePast: Word('сострил', 5),
  femininePast: Word('сострила', 5),
  neuterPast: Word('сострило', 5),
  pluralPast: Word('сострили', 5),
  imperativeInformal: Word('состри', 5),
  imperativeFormal: Word('сострите', 5),
  imperfect: [],
};

perfectVerbs.set(сострить.name.text, сострить);

export { сострить };