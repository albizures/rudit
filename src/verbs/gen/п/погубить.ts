import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погубить: PerfectVerb = {
  name: Word('погубить', 5),
  singular1stPerson: Word('погублю', 6),
  singular2ndPerson: Word('погубишь', 3),
  singular3rdPerson: Word('погубит', 3),
  plural1stPerson: Word('погубим', 3),
  plural2ndPerson: Word('погубите', 3),
  plural3rdPerson: Word('погубят', 3),
  masculinePast: Word('погубил', 5),
  femininePast: Word('погубила', 5),
  neuterPast: Word('погубило', 5),
  pluralPast: Word('погубили', 5),
  imperativeInformal: Word('погуби', 5),
  imperativeFormal: Word('погубите', 5),
  imperfect: [],
};

perfectVerbs.set(погубить.name.text, погубить);

export { погубить };