import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навострить: PerfectVerb = {
  name: Word('навострить', 7),
  singular1stPerson: Word('навострю', 7),
  singular2ndPerson: Word('навостришь', 7),
  singular3rdPerson: Word('навострит', 7),
  plural1stPerson: Word('навострим', 7),
  plural2ndPerson: Word('навострите', 7),
  plural3rdPerson: Word('навострят', 7),
  masculinePast: Word('навострил', 7),
  femininePast: Word('навострила', 7),
  neuterPast: Word('навострило', 7),
  pluralPast: Word('навострили', 7),
  imperativeInformal: Word('навостри', 7),
  imperativeFormal: Word('навострите', 7),
  imperfect: [],
};

perfectVerbs.set(навострить.name.text, навострить);

export { навострить };